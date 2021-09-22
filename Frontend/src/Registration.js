import React from "react";
import axios from "axios";
import validator from 'validator'
import {withRouter,useHistory} from "react-router-dom";

class Registration extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
           
            userid:'',
            pass:'',
            name:'',
            mobileno:'',
            msg:''
        }

    }

    submit(event)
    {
        event.preventDefault();
        if(validator.isEmail(this.state.userid) && validator.isNumeric(this.state.mobileno))
        {
            axios.post("http://localhost:8072/api/create",{
            
                userid:this.state.userid,
                pass:this.state.pass,
                name:this.state.name,
                mobileno:this.state.mobileno
            }).then((response)=>{
                this.setState({msg:response.data});
                if(this.state.msg==="Sucessfully saved")
                {
                    alert(this.state.msg);
                    this.props.history.push("/");
                }
                else
                alert("Username already present. Please use different user name");
            });
        }
        else if(validator.isNumeric(this.state.mobileno))
        alert("Please enter a valid Email as Userid");
        else
        alert("Please enter a valid Mobile no");
    }

    render()
    {
        return(
            <>
                <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">Registration</a>
                </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div class="col s12">
                            <form onSubmit={(e)=>this.submit(e)}>
                            <div class="row">
                                    <div class="col s12">
                                    <div class="row">
                                        <div class="input-field col s12">
                                        <i class="material-icons prefix">textsms</i>
                                        <input value={this.state.userid} onChange={(e)=>this.setState({userid:e.target.value})} type="text" id="autocomplete-input" class="autocomplete"/>
                                        <label for="autocomplete-input">Enter User</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                        <i class="material-icons prefix">textsms</i>
                                        <input value={this.state.pass} onChange={(e)=>this.setState({pass:e.target.value})} type="password" id="autocomplete-input" class="autocomplete"/>
                                        <label for="autocomplete-input">Enter Password</label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="input-field col s12">
                                        <i class="material-icons prefix">textsms</i>
                                        <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} type="text" id="autocomplete-input" class="autocomplete"/>
                                        <label for="autocomplete-input">Enter Name</label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="input-field col s12">
                                        <i class="material-icons prefix">textsms</i>
                                        <input value={this.state.mobileno} onChange={(e)=>this.setState({mobileno:e.target.value})} type="text" id="autocomplete-input" class="autocomplete"/>
                                        <label for="autocomplete-input">Enter Mobile Number</label>
                                        </div>
                                    </div>
                                    
                                    <button class="btn waves-effect waves-light" type="submit" name="action">Register
                                    <i class="material-icons right"></i>
                                    </button>         

                                    </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Registration;