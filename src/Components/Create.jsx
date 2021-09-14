import React,{useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
function Create() {
    const [firstName, setFirstName]=useState(' ');
    const [lastName, setLastName]= useState(' ');
    const [checkbox, setCheckBox]= useState(false);

    const postData = () =>{
      axios.post(`https://61404b785cb9280017a11200.mockapi.io/api/v1/fakeData`,{
        firstName,
        lastName,
        checkbox
      } )
    }
    return (

        <Form>
          <h1>Create</h1>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=>setCheckBox(!checkbox)} />
        </Form.Field>
        <Button onClick={postData} type='submit'>Submit</Button>
      </Form>
    )
 }

export default Create