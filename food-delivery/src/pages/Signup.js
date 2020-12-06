import React from 'react';
import {Form,FormGroup,Label,Input} from  'reactstrap';
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons';
import './signup.css';
import axios from 'axios';
import Swal from 'sweetalert2';
class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            nameerror:false,
            emailerror:false,
            passworderror:false,
            message:""
        }
        this.validateForm=this.validateForm.bind(this);
        this.onChangeInput=this.onChangeInput.bind(this);

    }
    validateForm(){
            const name= this.state.name;
            const email= this.state.email;
            const password= this.state.password;

            if(name){
                this.setState({nameerror:false})
            }else{
                this.setState({nameerror:true})
            }

            if(email){
                this.setState({emailerror:false})
            }else{
                this.setState({emailerror:true})
            }
            
            if(password){
                this.setState({passworderror:false})
            }else{
                this.setState({passworderror:true})
            }
            var signupFormData={
                name:name,
                email:email,
                password:password
            }

            console.log("-=-=-=--=-",signupFormData);

            axios.post('http://localhost:3002/signup', signupFormData)
              .then(function (response) {
                Swal.fire('Congrats Success!')
              })
              .catch(function (error) {
                console.log(error);
              });
    }
    onChangeInput(event){
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value})
    }
    render(){
        return(
            <Form className="signup">
                <h2 className="text-center"><span>Sign Up Form</span> </h2>
                <h3 className="text-center">Welcome</h3>
                <FormGroup>
                    <Label className="mt-0 mb-0">Name</Label>
                    <Input className="mt-0 mb-0" type="text" style={{border:(this.state.nameerror)?"1px solid red":""}} value={this.state.name} name="name" placeholder="Name" onChange={(e)=>this.onChangeInput(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label className="mt-0 mb-0">Email</Label>
                    <Input className="mt-0 mb-0" type="email" style={{border:(this.state.emailerror)?"1px solid red":""}} value={this.state.email} name="email" placeholder="Email" onChange={(e)=>this.onChangeInput(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label className="mt-0 mb-0">Password</Label>
                    <Input className="mt-0 mb-0" type="password" style={{border:(this.state.passworderror)?"1px solid red":""}} value={this.state.password} name="password" placeholder="Password"  onChange={(e)=>this.onChangeInput(e)}/>
                </FormGroup>
                <Input type="submit" className="btn-lg btn-dark btn-block mt-0 mb-0" value="Sign Up" onClick={this.validateForm}/>
                <div className="text-center pt-3 mt-1 mb-1">
                Or continue with your social account
                </div>
                <FacebookLoginButton className="mt-0 mb-0"/>
                <GoogleLoginButton className="mt-1 mb-0"/>

                <div className="text-center pt-3">
                Already have an account?</div>
                <div className="text-center">
                <a href="/">Log In</a>
                <span className="p-2">|</span>
                <a href="/">Forgot Password</a>
                </div>
            </Form>
        );
    }
}

export default Signup;
