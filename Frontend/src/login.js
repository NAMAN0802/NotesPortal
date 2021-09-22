import React from "react";
import axios from 'axios';
import {withRouter,useHistory} from "react-router-dom";
import validator from 'validator'

class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        localStorage.removeItem("userid");
        this.state={
            userid:'',
            pass:'',
            msg:''
        }
    }
    
    submit(event)
    {
        event.preventDefault();
        if(validator.isEmail(this.state.userid))
        {
            axios.post("http://localhost:8072/api/check",
            {
                userid:this.state.userid,
                pass:this.state.pass
                }).then(response=>{
                this.setState({msg:response.data});
                if(this.state.msg==="User is not Register")
                {
                    alert("User not register. Please register");
                // this.props.history.push("/Registration");
                }
                else if(this.state.msg==="Incorect password")
                {
                    alert("Incorect password");
                // this.props.history.push("/Registration");
                }
                else
                {
                localStorage.setItem("userid",this.state.userid);
                if(localStorage.getItem("userid"))
                {
                    alert("Login Successful  " + localStorage.getItem("userid"));
                    this.props.history.push("App");
                }
                else{
                    alert("Sorry You are not Loged In. Please try again");
                }
                }
            })
        }
        else{
            alert("Please enter a valid Email as User");
        }
    }



    render()
    {
        return(
            <>
                <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">LOGIN</a>
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
                                        <input value={this.state.userid} onChange={(e)=>this.setState({userid:e.target.value})} type="text" />
                                        <label for="autocomplete-input">Enter User</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                        <i class="material-icons prefix">textsms</i>
                                        <input value={this.state.pass} onChange={(e)=>this.setState({pass:e.target.value})} type="password" />
                                        <label for="autocomplete-input">Enter Password</label>
                                        </div>
                                    </div>
                                    
                                    <button class="btn waves-effect waves-light" type="submit" name="action">Login
                                    <i class="material-icons right"></i>
                                    </button>         
                                    </div>
                            </div>

                            </form>
                        </div>
                        
                        <a onClick={()=>this.props.history.push("/Registration")}> Registration  </a>                      
                     
                    </div>
                </div>
            </>
        )
    }
}

export default Login;