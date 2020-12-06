import React from 'react'
import {Form,FormGroup,Label,Input,Row,Col,Button} from  'reactstrap';
import './signup.css';


export const Final = () => {
        return(
        <div>    
              <Form className="finalorder">
              <Row form>
                <Col md={6}>
                 <FormGroup>
                  <Label for="exampleName" className="mt-6 mb-2">Name</Label>
                  <Input type="text" name="name" placeholder="Enter your name"/>
                </FormGroup>
                 </Col>
                <Col md={6}>
                     <FormGroup>
                     <Label for="exampleMobile" className="mt-6 mb-2">Mobile</Label>
                     <Input type="text" name="mobile"  placeholder="Enter mobile number"  />
                    </FormGroup>
                 </Col>
                </Row>
                <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Gandhi Street"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">LandMark</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Near Hanoi Tower"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Pin</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button>Okay! Done</Button>
                </Form>
        </div>
      )
    }

export default Final;
