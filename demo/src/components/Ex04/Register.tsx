import React from 'react'
import { FormText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
  return (
    <div>
      <div style={{display:'flex',marginLeft:'550px',marginBottom:'100px',padding:'20px',   }}>
      
      <Form style={{padding:'20px'}}>
        <h3 style={{textAlign:'center'}}>Login account</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><b>Your email</b></Form.Label>
          <Form.Control type="email" placeholder="email@company.com" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><b>Confirm password</b></Form.Label>
          <Form.Control type="password" placeholder="*********" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><b>Password</b></Form.Label>
          <Form.Control type="password" placeholder="*********" />
        </Form.Group>
        
        <Button style={{width:"350px"}} variant="primary" type="submit">
          Create an account 
        </Button>
        <br />
        <FormText style={{ marginLeft:'40px'}}>Already have an account? <span><b>Login here</b></span> </FormText>
      </Form>
      </div>
    </div>
  )
}
