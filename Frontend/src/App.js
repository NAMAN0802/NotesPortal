import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
import {withRouter,useHistory} from "react-router-dom";

class App extends React.Component {
 
  constructor(props)
  {
    super(props);
    if(localStorage.getItem("userid")===null)
    {
      alert("Please Login");
      localStorage.removeItem("userid");
      this.props.history.push("/");
    }
    this.state={
      notes:[],
      id:0,
      userid:localStorage.getItem("userid"),
      title:"",
      content:""
    }  
    
  }


   componentDidMount(){
      axios.get("http://localhost:8071/api/"+this.state.userid)
      .then(res=>{
      this.setState({
        notes:(res.data),
        //id:0,
        userid:this.state.userid,
        title:"",
        content:""
      });
    })
  }

  submit(event,id)
  {
    event.preventDefault();
    if(id===0)
    {
      if(this.state.title==="")
      alert("Please enter Title");
      else{
      axios.post("http://localhost:8070/api/",{
        userid: this.state.userid,
        title:this.state.title,
        content:this.state.content
      })
      .then(()=>{
        this.componentDidMount();
      })
    }
    }
    else{
      axios.put("http://localhost:8070/api/",{
        id:id,
        userid: this.state.userid,
        title:this.state.title,
        content:this.state.content
      })
      .then(()=>{
        this.state.id=0;
        this.componentDidMount();
      })
    }
  }
  

  delete(id)
  {
    axios.delete("http://localhost:8070/api/"+id).then(()=>{this.componentDidMount();})
  }

  edit(id)
  {
    axios.get("http://localhost:8071/api/notes/"+id)
    .then((res)=>{
      this.setState({ 
        id:res.data.id,
        userid: this.state.userid,
        title:res.data.title,
        content:res.data.content  
      })
      //this.componentDidMount();
    })
  }

  logout()
  {
    localStorage.removeItem("userid");
    alert("Logout Successfully");
    this.props.history.push("/");
  }

  render()
  {
    return(
      <>
      <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">NOTES</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a onClick={()=>this.logout()}>Logout</a></li>
        </ul>
      </div>
      </nav>
      <div className="container">
      <div className="row">
          <div className="col s12">
            <form onSubmit={(e)=>this.submit(e,this.state.id)}> 
            <div className="row">
                    <div className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <i className="material-icons prefix">textsms</i>
                          <input value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})} type="text" id="autocomplete-input" className="autocomplete"/>
                          <label htmlFor="autocomplete-input">Enter Title</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <i className="material-icons prefix">textsms</i>
                          <input value={this.state.content} onChange={(e)=>this.setState({content:e.target.value})} type="text" id="autocomplete-input" className="autocomplete"/>
                          <label htmlFor="autocomplete-input">Enter Content</label>
                        </div>
                      </div>  
                      <button className="btn waves-effect waves-light" type="submit" name="action">Add Notes
                      <i className="material-icons right">send</i>
                       </button>                  
                    </div>
            </div>
            </form>
          </div>
          <br/>
          <div className="row">
          <table>
        <thead>
          <tr>
             {/* <th>ID</th>
              <th>UserID</th>*/}
              <th>Title</th>
              <th>Content</th>
              <th>Edit</th>
              <th>delete</th>
          </tr>
        </thead>

        <tbody>
        {
          this.state.notes.map((note)=>(
            <tr>
           {/* <tr>{note.id} </tr>
            <tr>{note.userid}</tr>*/}
            <td>{note.title}</td>
            <td>{note.content}</td>
            <td>
            <button onClick={(e)=>this.edit(note.id)} className="btn waves-effect waves-light" type="submit" name="action">
                      <i className="material-icons">edit</i>
                       </button> 
            </td>
            <td>
            <button onClick={(e)=>this.delete(note.id)} className="btn waves-effect waves-light" type="submit" name="action">
                      <i className="material-icons">delete</i>
                       </button> 
            </td>
          </tr>
          ))
        }
        </tbody>
      </table>
            
          </div>
      </div>
      </div>
      
      </>
    );
  }
}

export default App;
