import React,{useState} from 'react'
import Table from '@mui/material/Table'
import { TableHead } from '@mui/material'
import { TableRow } from '@mui/material'
import {TableCell,TableBody} from '@mui/material'
import { TablePagination } from '@mui/material'
import { TableSortLabel } from '@mui/material'


const headCells =[
    {id:'fullName',label:'Employee Name'},
    {id:'email',label:'EmailAddress (personal)'},
    {id:'mobile',label:'Mobile Number'},
    {id:'department',label:'Department'},
    {id:'actions',label:'Actions'},
]

export default function MyTable(props){

    const{records}=props

    const pages=[5,10,25]
    const [page,setPage]=useState(0)
    const [rowsPerPage,setRowsPerPage]=useState(5)



    const TblHead = props=>{


        return(
            <TableHead>
                    <TableRow>
                        {
                            headCells.map(headCell=>(
                                <TableCell key={headCell.id}>{headCell.label}</TableCell>
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


    return (
        <React.Fragment>

                <Table
                    sx={{
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
                                records.slice(page*rowsPerPage,(page*rowsPerPage)+rowsPerPage)
                                .map(item=>(
                                    <TableRow key={item.id}>
                                            <TableCell>{item.fullName}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>{item.mobile}</TableCell>
                                            <TableCell>{item.department}</TableCell>
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