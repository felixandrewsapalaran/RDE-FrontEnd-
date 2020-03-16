import React, { Component } from 'react'

class AddClient extends Component {  constructor(props) {
    super(props)
    this.state = {
        fName: "",
        lName: "",
        addStreet:"",
        addCity:"",
        addState:"",
        addZip:"",
        gender:"1",
        year:"",
        month:"",
        day:"",
        errorMessage: ""
    }
}

changeHandler = (e) =>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
submit = (e) => {
    
    e.preventDefault();
    console.log(this.state);
    if(this.state.fName !== "" && this.state.lName !== "" && this.state.addCity !=="" && this.state.addState !==""
    && this.state.addStreet !=="" && this.state.addZip !=="" && this.state.day !=="" && this.state.year !==""
    && this.state.month !=="" && this.state.gender !==""){
        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:8500/rentcalculator/index.cfm/client",false);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(this.state));
        const aa=JSON.parse(request.responseText);
        if(aa.status===true){
            alert(aa.message);
          //  this.props.history.push("/home");
            this.setState({errorMessage:""})
           
        }else{
            this.setState({errorMessage:aa.message})
        }
        
    }
    else {
        this.setState({errorMessage: "Please Fill All Field Empty"})
        console.log(this.state)
    }
}
render() {
    return (
        <div align="center">
                <h1>Client Add Page </h1>
                <form onSubmit={this.submit} >
            <table  width="35%"  align="center"  cellSpacing="20%" cellPadding="10%">
               
                <tbody>
                 
                    { this.state.errorMessage? 
                       <tr>
                           <td colSpan="3">
                            <h2>
                                    { 
                                        this.state.errorMessage &&
                                        this.state.errorMessage 
                                    }
                                </h2>
                           </td>
                        
                        </tr>
                        :null
                    }
                       <tr>
                            <td colSpan="3">
                                <h5>Client's Name</h5>
                            </td>
                        </tr>
                        <tr>
                             <th colSpan="3">First Name</th>
                        </tr>
                        <tr>    
                             <td colSpan="3"> 
                                <input type="text" className="form-control" name="fName"  onChange={this.changeHandler}  placeholder="Enter your First Name" required />
                            </td>
                        </tr>
                        <tr>
                             <th colSpan="3">
                                <label htmlFor="name">Last Name</label>
                            </th>
                        </tr>
                        <tr>
                             <td colSpan="3">
                                <input type="text" className="addwith" name="lName" onChange={this.changeHandler} placeholder="Enter your Last Name" required />
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="3">
                               
                                Client's Gender
                            </th>
                        </tr>
                        <tr>
                             <td colSpan="3">        
                                <select  className="addwith" name="gender"  onChange={this.changeHandler} required>
                                    <option value="Male">Male</option>
                                    <option value="FeMale">FeMale</option>
                                </select>
                               
                            </td>
                        </tr>
                        <tr>    
                             <th colSpan="3">
                                <h5>Client's Date of Birth</h5>
                            </th>
                        </tr>
                        
                        <tr>
                                <td>
                                     <select  name="month" onChange={this.changeHandler} required>
                                    <option value="">Month</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                </td>       
                            
                                <td>
                                    <select  name="year" onChange={this.changeHandler}>
                                        <option value="">Year</option>  
                                        <option value="1985">1985</option>
                                        <option value="1986">1986</option>
                                        <option value="1987">1987</option>
                                        <option value="1988">1988</option>
                                        <option value="1989">1989</option>
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2017">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                    
                                    
                                    </select>
                                </td>
                                <td>
                                
                                    <select name="day" onChange={this.changeHandler}>
                                        <option value="">Day</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        
                                    </select>
                                
                                </td>
                        </tr>
                        
                        <tr>
                             <td colSpan="3">
                                <h5>Client's Current Address</h5>
                            </td>
                        </tr> 
                        <tr>   
                             <th colSpan="3">
                                <label htmlFor="ccyear">Street</label>
                            </th>
                        </tr>
                        <tr>
                             <td colSpan="3">
                                <input type="text" placeholder="Add Sttreet"  className="addwith" name="addStreet"  onChange={this.changeHandler}>
                                </input>
                            </td>
                        </tr>
                        <tr>
                             <th colSpan="3">
                              <label htmlFor="ccyear">City</label>
                            </th>
                        </tr>
                        
                        <tr>   
                                
                             <td colSpan="3">
                               
                                <input type="text" placeholder="Add City" className="addwith" name="addCity"  onChange={this.changeHandler}>
                                
                                </input>
                               
                            </td>
                        </tr>
                        <tr>
                             <th colSpan="3">
                            <label htmlFor="ccyear">State</label>
                            </th>    
                        </tr> 
                        <tr>   
                             <td colSpan="3">
                               
                                
                                <input type="text" placeholder="Add State" className="addwith" name="addState"  onChange={this.changeHandler}>
                                
                                </input>
                               
                            </td>
                        </tr>
                        <tr>
                             <th colSpan="3">
                            <label htmlFor="ccyear">Zip</label>
                            </th>       
                        </tr>
                        <tr>    
                             <td colSpan="3">
                               
                               
                                <input type="text" placeholder="Add Zip" className="addwith" name="addZip"  onChange={this.changeHandler}>
                                
                                </input>
                               
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <button type="submit"  size="md"  color="success"> Submit</button>
                            </td>
                        </tr>
                    
                    
                </tbody>
              
            </table>
            </form>
        </div>
    )
}
}

export default AddClient
