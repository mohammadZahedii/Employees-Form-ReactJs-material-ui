import React,{useState} from 'react'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TableCell,TableBody, } from '@mui/material'
import { TablePagination } from '@mui/material'
import TableSortLabel from '@mui/material/TableSortLabel'
import Controls from './Controls'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MyTable(props){
    const{records,headCells,filterFn,openInPopUp,confirmDialog,setConfirmDialog,onDelete}=props
    
    
    const pages=[5,10,25];
    const [page,setPage]=useState(0);
    const [rowsPerPage,setRowsPerPage]=useState(25)
    const [order,setOrder]=useState()
    const [orderBy,setOrderBy]=useState()

    


    const TblContainer=props=>(
        <Table 
        sx={{
            marginTop:t=>t.spacing(3),
            '& thead th':{
                fontWeight:'600',
                color:theme=>theme.palette.primary.main,
                backgroundColor:t=>t.palette.primary.light,
            },
            '& tbody td':{
                fontWeight:'300'
            },
            '& tbody tr:hover':{
                backgroundColor:'#fffbf2',
                cursor:'pointer'
            }
        }}>
            {props.children}
        </Table>
    )
    const TblHead = props =>{

        const handleSortRequest=(cellId)=>{
            const isAsc = orderBy === cellId && order==='asc'
            
            setOrder(isAsc?'desc':'asc')
            setOrderBy(cellId)
        }

        return(
            <TableHead>
                 <TableRow>
                    {
                        headCells.map(headCell=>(
                            <TableCell 
                            sortDirection={orderBy === headCell.id?order:false}
                            key={headCell.id} 
                            align={headCell.id==='actions'?'center':'left'}
                            >
                        


                                {headCell.disableSorting?headCell.label:
                                
                                <TableSortLabel
                                active={orderBy===headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={()=>handleSortRequest(headCell.id)}
                            
                            >{headCell.label}</TableSortLabel>
                                
                                
                                }
                               
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        )
            
           
    }
    const handleChangePage=(event,newPage)=>{
        // console.log(newPage)
        setPage(newPage)
    }    
    const handleChangeRowsPerPage=(event)=>{
        setRowsPerPage(event.target.value)
    }
    const TblPagination=()=>(

        <TablePagination
            rowsPerPageOptions={pages}
            component="div"
            count={records.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        
        />
    )
    const stableSort=(array,comparator)=>{
        // console.log(comparator)
        const stabilizedThis=array.map((el,index)=>[el,index])

        stabilizedThis.sort((a,b)=>{
            //console.log(b[0])
            const order =comparator(a[0],b[0])
            
            if(order!==0) return order
            return a[1] - b[1]
            //console.log(order)
        })
        return stabilizedThis.map((el)=>{
    
            return el[0]})
    }
    const getComparator=(order,orderBy)=>{
        
        return order==='asc'
        ?(a,b)=>descendingComparator(a,b,orderBy)
        :(a,b)=>-descendingComparator(a,b,orderBy)
    }
    const descendingComparator=(a, b, orderBy)=>{
        //console.log(orderBy)
        if(a[orderBy]<b[orderBy]){
            return -1
        }
        if(a[orderBy]>b[orderBy]){
            return 1
        }
        return 0
      
    }
    const recordsAfterPagingAndSorting=()=>{


        return stableSort(filterFn.fn(records),getComparator(order,orderBy))
        .slice(page*rowsPerPage,(page+1)*rowsPerPage)
    }


    return (

        <React.Fragment>
            <TblContainer>
                        <TblHead/>
                        <TableBody>
                            {
                                recordsAfterPagingAndSorting().map(item=>(
                                    <TableRow key={item.id}>
                                        <TableCell>{item.fullName}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.mobile}</TableCell>
                                        <TableCell>{item.department}</TableCell>
                                        <TableCell align="right" >
                                            <Controls.ActionButton 
                                            onClick={()=>openInPopUp(item)}
                                            color="primary" size="small">
                                                <EditIcon fontSize="small"/>
                                            </Controls.ActionButton>
                                            <Controls.ActionButton 
                                            onClick={()=>{
                                                setConfirmDialog({
                                                    isOpen:true,
                                                    title:'Are you sure to delete this records?',
                                                    subtitle:"You can't undo this operation",
                                                    onConfirm:()=>onDelete(item.id)
                                                    
                                                })
                                                //onDelete(item.id)
                                            }}
                                            color="secondary" size="small">
                                                <DeleteIcon fontSize="small"/>
                                            </Controls.ActionButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </TblContainer> 
                    <TblPagination/>
                </React.Fragment>
    )

}