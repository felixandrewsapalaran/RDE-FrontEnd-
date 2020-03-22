import React, { Component } from 'react'
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
var num7 = 0;
var num8 = 0;
var num9 = 0;
var num10 = 0;
var num11 = 0;
 class Step1 extends Component {
     constructor(props){
         super(props)
         this.state = {
            //  clientId:this.props.match.params.id?this.props.match.params.id:0,
              errorMessage: "",
              annualGrossIncome:0,
              monthlyGrossIncome:0,
              annualHouseHoldWages:0,
              periodicPayment:0,
              unearnedIncome:0,
              receivedIncome:0,
              businessIncome:0,
              investments:0,
              armedForcesPay:0,
              publicAssistanceReceived:0,
              welfareReliant:"false",
              step: 1,
              userId:4, }
         
     }
    
     sumField(){
        num9=Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5)+Number(num6)+Number(num7)+Number(num8)
        console.log(num9)
        this.setState({
            annualGrossIncome: num9,
            monthlyGrossIncome:Number((Math.round((num9/12) * 100) / 100).toFixed(2))
           
             })
    }
    annualHouseHoldWagesChange = (e) => {
        num1=e.target.value
        this.setState({
            annualHouseHoldWages: Number(e.target.value),
           
             })
        this.sumField()     
    }
    periodicPaymentChange = (e) => {
        num2=e.target.value
        this.setState({
            periodicPayment: Number(e.target.value),
           
            })
        this.sumField()  
    }
    unearnedIncomeChange = (e) => {
        num3=e.target.value
        this.setState({
            unearnedIncome: Number(e.target.value),
            })
            this.sumField() 
    }
    receivedIncomeChange = (e) => {
        num4=e.target.value
        this.setState({
            receivedIncome: Number(e.target.value),
            })
            this.sumField() 
    }
    businessIncomeChange = (e) => {
        num5=e.target.value
        this.setState({
            businessIncome: Number(e.target.value),
            })
            this.sumField() 
    }
    investmentsChange = (e) => {
        num6=e.target.value
        this.setState({
            investments: Number(e.target.value),
            })
            this.sumField() 
    }
    armedForcesPayChange = (e) => {
        num7=e.target.value
        this.setState({
            armedForcesPay: Number(e.target.value),
            })
            this.sumField() 
    }
    publicAssistanceReceivedChange = (e) => {
        num8=e.target.value
        this.setState({
            publicAssistanceReceived:Number(e.target.value),
            })
            this.sumField() 
    }
    welfareReliantChange = (e) => {
        this.setState({
            welfareReliant: e.target.value
            })
            
          
    }
    //when next button click send state to rentcalculator
     submit = (e) => {
         console.log(this.state)
         //this.props is use for access the proprties and function of perent Commponents
        this.props.saveAndContinue(this.state)
    }
    render() {
        console.log(this.props)
        return (
            <div align="center">
                   
            <h1>Gross Annual Household Income</h1>
     
       
        { 
          this.state.errorMessage?
        
            <div className="primary">
                {
                  this.state.errorMessage &&
                  this.state.errorMessage
                }
            </div>
        
          :null
        }
            <form >
                <table >
                    <thead>
                        <tr>
                            <th width="5%">SNo.</th>
                            <th>Question</th>
                            <th>Description</th>
                            <th width="15%">Response</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Annual household wages and earnings before taxes</td>
                                <td>Include the full amount (before payroll deductions) of annual wages and salaries, overtime pay, commissions, fees, tips and bonuses, and other compensation for personal services prior to payroll deductions. ALL INCOME MUST BE ANNUALIZED.</td>
                                <td>
                                {/*this part is use for update the state which is declare as balnk in constructor*/}
                                    <input  min={0} max={100}  onChange={this.annualHouseHoldWagesChange} />
                                
                                </td>   
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Periodic payments: e.g. social security, retirement funds, annuities, etc.</td>
                                <td>Include periodic payments from Social Security, annuities, insurance policies, retirement funds, pensions, disability or death benefits, excluding lump sum payments for the delayed start of a periodic payment. ALL INCOME MUST BE ANNUALIZED.</td>
                                <td>
                               
                                    <input placeholder=""   onChange={this.periodicPaymentChange} />
                                    
                                
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Additional payments: e.g. unemployments, disability, worker's compensation, etc.</td>
                                <td>Include unemployment, disability, worker's compensation, and severance pay.</td>
                                <td>
                               
                                    <input placeholder=""   onChange={this.unearnedIncomeChange} />
                                    
                                
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Alimony, child support</td>
                                <td>Periodic payments received including alimony and child support, and regular contributions or gifts received from organizations or persons (including family members) not residing in the household.</td>
                                <td>
                               
                                    <input placeholder=""   onChange={this.receivedIncomeChange} />
                                    
                                
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Net income from operation of a business profession</td>
                                <td>Net income from operation of a business or profession (including but NOT limited to hairbraiding, day labor work, etc.).</td>
                                <td>
                               
                                    <input placeholder=""   onChange={this.businessIncomeChange} />
                                    
                                
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Investments and rental income in excess of $5,000 per year</td>
                                <td>Interest, dividends, and other net income of any kind from real or personal property. Where net family assets are in excess of $5,000, annual income shall include the greater of actual income derived from net family assets or a percentage of the value of such assets based on the current passbook savings rate, as determined by HUD.</td>
                                <td>
                               
                                    <input placeholder=""   onChange={this.investmentsChange} />
                                    
                                
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Pay and allowances of a member of the armed forces.</td>
                                <td>Include all regular pay, special pay and allowances of a member of the Armed Forces (except Hostile Fire Pay).</td>
                                <td>
                               
                                    <input placeholder=""  onChange={this.armedForcesPayChange} />
                                    
                                
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Public assistance received.</td>
                                <td>Public Assistance, including cash payments made to household members under other programs funded, separately or jointly, by federal, state, or local governments which are not excluded by Federal Statutes. Includes cash payments to household members made by the HIV/AIDS Services Administration (HASA).</td>
                                <td>
                               
                                    <input placeholder=""   onChange={this.publicAssistanceReceivedChange} />
                                    
                                
                                </td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>In the consumer / household solely dependent on Public Assistance?</td>
                                <td>If houseshold solely receives income from public assistance, tenant rent contribution shall equal $0.</td>
                                <td>
                                <input type="radio" value={true}   checked={this.state.welfareReliant === "true"}  onChange={this.welfareReliantChange}></input>Yes
        

                                <br></br>
                                <input type="radio" value={false} checked={this.state.welfareReliant === "false"}  onChange={this.welfareReliantChange}></input>No
                                
                                </td>
                            </tr>
                            
                        </tbody>


                </table>
               
                        Annual Gross Income
                      
                       
                                    <input value={this.state.annualGrossIncome} />
                                    
                                
                        
                      Monthly Gross Income
                       
                       
                                    <input value={this.state.monthlyGrossIncome}  />
                                
                <div>
                    <button type="button" size="md" color="success extrasp"
                    onClick={this.submit} className="float-right" >
                        <i className="fa fa-dot-circle-o"></i>Next
                    </button>
                    <button type="button" size="md" color="success extrasp" className="float-right"
                     onClick={() => {  this.props.history.push("");}}  >
                        <i className="fa fa-dot-circle-o"></i>Back
                    </button>
                    </div>
                <div>
                    <div>25% Done </div> 
                    </div>
            </form>
       
     

</div>

        )
    }
}

export default Step1
