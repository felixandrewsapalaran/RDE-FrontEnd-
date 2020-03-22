import React, { Component } from 'react'
import Step1 from './Step1';



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
var num12 = 0;
var num13 = 0;
var num14 = 0;
var num15 = 0;
var num16 = 0;
var num17 = 0;
var num18 = 0;
var num19 = 0;
var num20 = 0;
var num21 = 0;
var num22=0
var num23=0
var num24=0
var num24=0
var num25=0
var num26=0
var num27=0
var nameinHOPWA="false"
var nameemploymentIncomeIncrease="false"
var nameselfSufficientIncome="false"
var nameincomeWSixMo="false"


 class RentCalculator extends Component {
    constructor(props) {
        super(props);
        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.backButton = this.backButton.bind(this)
        this.backSteps = this.backSteps.bind(this)
        this.state = {
            clientId:1,
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
            userId:1,
        
        };
    }

    backButton= (e) =>{
        console.log("back")
        this.previousStep()
    }
    //backSteps is use for jump any step
    backSteps=(Stepsno)=>{
        console.log(Stepsno)
        this.setState({
            step : Stepsno
          })
        
    }
    //this function set state for step wise
    saveAndContinue= (e) =>{
        console.log("save and continue ")
       console.log(e)
        if( this.state.step === 1){
            this.setState({
                annualGrossIncome:e.annualGrossIncome,
                monthlyGrossIncome:e.monthlyGrossIncome,
                annualHouseHoldWages:e.annualHouseHoldWages,
                periodicPayment:e.periodicPayment,
                unearnedIncome:e.unearnedIncome,
                receivedIncome:e.receivedIncome,
                businessIncome:e.businessIncome,
                investments:e.investments,
                armedForcesPay:e.armedForcesPay,
                publicAssistanceReceived:e.publicAssistanceReceived,
                welfareReliant:e.welfareReliant,
             })
            this.nextStep()
        }else if(this.state.step === 2){
            this.setState({
                numDependents:e.numDependents,
                disabledDeduction:e.disabledDeduction,
                childcareExp:e.childcareExp,
                attendExp:e.attendExp,
                elderlyExp:e.elderlyExp,
                medExp:e.medExp,
                perAGI:e.perAGI,
                medDeduction:e.medDeduction,
             })
            this.nextStep()
        }else if(this.state.step === 3){
            this.setState({
                inHOPWA:e.inHOPWA,
                employmentIncomeIncrease:e.employmentIncomeIncrease,
                selfSufficientIncome:e.selfSufficientIncome,
                incomeWSixMo:e.incomeWSixMo,
                incomeIncreaseDate:e.incomeIncreaseDate,
                baselineIncome:e.baselineIncome,
                incomeEID:e.incomeEID,
                otherIncomeEID:e.otherIncomeEID,
                applicableEID:e.applicableEID,
             })
           
             this.nextStep()
        }else if(this.state.step === 4){
            this.setState({
                    totalAllowance:e.totalAllowance,
                    annualAdjustedIncome:e.annualAdjustedIncome,
                    monthlyAdjustedIncome:e.monthlyAdjustedIncome,
                })

            this.nextStep()
        }else if(this.state.step === 5){
            this.setState({
                totalMontlyRent:e.totalMontlyRent,
                currentLeasePeriod:e.currentLeasePeriod,
                utilitiesIncluded:e.utilitiesIncluded,
                utilityAllowance:e.utilityAllowance,
                tenantRentResponsibility:e.tenantRentResponsibility,
                rentSubsidyPayment:e.rentSubsidyPayment,
            })
            
            this.nextStep()

        }

       
       
      }
      //nextStep for next step
      nextStep() {
        // console.log(this.state)
              //   console.log("next steps function")
    //   console.log(this.state)     

       this.setState({
         step : this.state.step + 1,
                })
     
     }
           
      // Same as nextStep, but decrementing
      //this function is use for goto back step
      previousStep() {
        this.setState({
          step : this.state.step - 1
        })
      }


    render() {
        console.log(this.state)
        //When all steps done then this use for store all step value to database
        if(this.state.step==6){
            var request = new XMLHttpRequest();
            request.open("POST", "http://localhost:8500/rentcalculator/index.cfm/addWorksheet",false);
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify(this.state));
            const resultdata=JSON.parse(request.responseText);
            if(resultdata.status===true){
                this.props.history.push("/rent_result/"+resultdata.wid);
            }else{
                this.setState({errorMessage:"Error Found"})
            }
        }
    
        //steps is used for call step 1 step2 and on...
        switch (this.state.step) {
			case 1:
				return (
                <Step1 saveAndContinue={this.saveAndContinue}></Step1>
                )
			case 2:
				return (
                 <h1>step2</h1> 
                )
			case 3:
                return(
                <h1>step3</h1> 
                )
            case 4: 
                return(
                <h1>step4</h1> 
                )
		    case 5:
                return(
                    <h1>step5</h1> 
                    )
            case 6:
                return(
                    <h1>redirect to result</h1>
                )    
		}
        
    }
}


export default RentCalculator
