import React,{useState} from 'react'
import Table from '@mui/material/Table'
import { TableHead } from '@mui/material'
import { TableRow } from '@mui/material'
import {TableCell,TableBody} from '@mui/material'
import { TablePagination } from '@mui/material'
import { TableSortLabel } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ActionButton from './ActionButton'



const headCells =[
    {id:'fullName',label:'Employee Name'},
    {id:'email',label:'EmailAddress (personal)'},
    {id:'mobile',label:'Mobile Number'},
    {id:'department',label:'Department'},
    {id:'actions',label:'Actions',disableSorting:true},
]

export default function MyTable(props){

    const{records,filterFn}=props

    const pages=[5,10,25]
    const [page,setPage]=useState(0)
    const [rowsPerPage,setRowsPerPage]=useState(5)
    const [order,setOrder]=useState()
    const [orderBy,setOrderBy]=useState()


    const TblHead = props=>{

        const handleSortRequest=(CellId)=>{
            const isAsc= orderBy === CellId && order === 'asc'

            setOrder(isAsc?'desc':'asc')
            setOrderBy(CellId)
        }

        return(
            <TableHead>
                    <TableRow>
                        {
                            headCells.map(headCell=>(
                                <TableCell 
                                    sortDirection={orderBy === headCell.id?order:false}
                                    align={headCell.id ==='actions'?'center':'left'}
                                    key={headCell.id}>

                                        {headCell.disableSorting?
                                            headCell.label
                                            :
                                            <TableSortLabel
                                            active={orderBy === headCell.id}
                                            direction={orderBy === headCell.id?order:'asc'}
                                            onClick={()=>handleSortRequest(headCell.id)}
                                        >
                                            {headCell.label}
                                        </TableSortLabel>    
                            
                                }

                                </TableCell>
                            ))

                        }
                    </TableRow>
            </TableHead>
        )
    }


    const handleChangePage=(event,newPage)=>{
        setPage(newPage)
    }

    const handleChangeRowsPerPage=(event)=>{
        setRowsPerPage(event.target.value)

    }

    const stableSort=(array,comprator)=>{

        const stablilizedThis=array.map((obj,index)=>[obj,index])
        // console.log(stablilizedThis)
        stablilizedThis.sort((a,b)=>{
            const ordering = comprator(a[0],b[0])

            if(ordering!==0) return ordering
            return a[1] - b[1]
        })
        return stablilizedThis.map((el)=>{
            return el[0]
        })
        
    }

    const getComprator=(order,orderBy)=>{

    //   console.log(order,orderBy)
      return order==='asc'
      ?(a,b)=>descendingComprator(a,b,orderBy)
      :(a,b)=>-descendingComprator(a,b,orderBy)
    }

    const descendingComprator=(a,b,orderBy)=>{
        // console.log(b,a)
        if(a[orderBy]<b[orderBy]){
            return -1
        }
        if(a[orderBy]>b[orderBy]){
            return 1
        }
        return 0
    }
    return (
        <React.Fragment>
                <Table
                    sx={{
                        display:['none','table'],
                        marginTop:t=>t.spacing(3),
                        '& thead th':{
                            fontWeight:600,
                            color:t=>t.palette.primary.main,
                            backgroundColor:t=>t.palette.primary.light,
                        },
                        '& tbody td':{
                            fontWeight:'300',
                        },
                        '& tbody tr:hover':{
                            backgroundColor:'#fffbf2',
                            cursor:'pointer'
                        }

                    }}
                    
                >
                    <TblHead/>
                        <TableBody>
                            {
                                stableSort(filterFn.fn(records),getComprator(order,orderBy)).slice(page*rowsPerPage,(page*rowsPerPage)+rowsPerPage)
                                .map(item=>(
                                    <TableRow key={item.id}>
                                            <TableCell>{item.fullName}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>{item.mobile}</TableCell>
                                            <TableCell>{item.department}</TableCell>
                                            <TableCell align="right">
                                                <ActionButton
                                                    Mycolor="primary"
                                                
                                                
                                                >
                                                    <EditIcon/>
                                                </ActionButton>
                                                <ActionButton
                                                    Mycolor="secondary"
                                                
                                                
                                                
                                                >
                                                    <DeleteIcon/>
                                                </ActionButton>
                                            </TableCell>
                                    </TableRow>
                                ))
                            }

                        </TableBody>
        
                </Table>
                <TablePagination
                    rowsPerPageOptions={pages}
                    component="div"
                    count={records.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                            
        </React.Fragment>

    )
}