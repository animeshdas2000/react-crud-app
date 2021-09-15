import axios from 'axios';
import React,{useEffect,useState} from 'react';

import { Table,Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIdata,setAPIdata]=useState([]);
    useEffect (()=>{
        axios.get(`https://61404b785cb9280017a11200.mockapi.io/api/v1/fakeData`)
        .then((response)=>{
            setAPIdata(response.data);
        })        
    },[])
    const getData = () => {
        axios.get(`https://61404b785cb9280017a11200.mockapi.io/api/v1/fakeData`)
            .then((getData) => {
                 setAPIdata(getData.data);
             })
    }
    const setData = (data) => {
        let { id,firstName,lastName,checkbox}=data;
        localStorage.setItem('ID',id);
        localStorage.setItem('First Name',firstName);
        localStorage.setItem('Last Name',lastName);
        localStorage.setItem('Checked Val',checkbox);
        
     }
    const onDelete = (id)=>{
        axios.delete(`https://61404b785cb9280017a11200.mockapi.io/api/v1/fakeData/${id}`)
        .then(()=>{
           getData();
        })
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        APIdata.map((data)=>{
                            return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName} </Table.Cell>
                                <Table.Cell>{data.checkbox? 'Yes': 'No'}</Table.Cell>
                                <Link to='/update'>
                                <Table.Cell> 
                                <Button onClick={()=> setData(data)}>Update</Button>
                               </Table.Cell>
                                </Link>
                                <Table.Cell> 
                                <Button onClick={()=> onDelete(data.id)}>Delete</Button>
                               </Table.Cell>
                            </Table.Row>)
                        })
                    }
                    
                </Table.Body>
            </Table>
        </div>
    )
}
