import React, { Component } from 'react'

 class Worksheet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage: "",
            cid:4,
            data:[{}],
            
        }
      
        this.doPrint = this.doPrint.bind(this);
    }

    componentDidMount(){
        var request = new XMLHttpRequest();
        request.open("GET", "http://localhost:8500/rentcalculator/index.cfm/worksheetlist/5",false);
        request.setRequestHeader("Content-Type", "application/json");
        request.send({"clientId":this.state.cid});
        console.log(request.responseText);
        const resultdata=JSON.parse(request.responseText);
        if(resultdata.status===true){
            this.setState({
              clientId:resultdata.data.clientId,
              data:resultdata.data,
            })
        }
    }
    doPrint=(ed)=>{
        window.print()
      
   }
 



    render() {
        return (
            <div align="center">
                <h1>Worksheet </h1>
                 <table  border="2" cellPadding="10px">
                                <thead>
                                    <tr>
                                        <th>Date of Submission</th>
                                        <th>Rent Calculation</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.data.map((row, i) =>
                                row.dateSubmitted?
                                                <tr key={i+1}>
                                                <td>{row.dateSubmitted?row.dateSubmitted:null}</td> 
                                                <td>{row.tenantRentResponsibility?row.tenantRentResponsibility:null}</td> 
                                               
                                                <td>
                                                    <button type="submit" size="md" color="success "   onClick={() => {  this.props.history.push("/result/"+row.id);}} > View </button>
                                                    <button Style="margin-left:10px" type="submit" size="md" color="primary " onClick={() => {  this.props.history.push("/result/"+row.id+"?isprint=true&cid="+this.state.cid);}} > Print </button>
                                                </td> 
                                                   
                                                </tr>
                                                :null
                                                )} 
                                   
                                </tbody>
                            </table>
                        
            </div>
        )
    }
}

export default Worksheet
