import React from 'react';
import ReactDOM from 'react-dom';

class EmployeeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          message: ''
        };
      }
      onCreateEmployee=()=>{
        let empInfo={
              Id:this.ref.Id.value,
              Name:this.ref.Name.value,
              Location:this.ref.Location.value,
              Salary:this.ref.Salary.value
        
            };
        }
  render(){
   
        return(
          <div>
            <h2>Please Enter Employee Details...</h2>
            <p>
              <label>Employee ID : <input type="text"  ref="Id"></input></label>
            </p>
            <p>
              <label>Employee Name : <input type="text" ref="Name"></input></label>
            </p>
            <p>
              <label>Employee Location : <input type="text" ref="Location"></input></label>
            </p>
            <p>
              <label>Employee Salary : <input type="text" ref="Salary"></input></label>
            </p>
            <br></br>
            <button onClick={this.onCreateEmployee}>Create</button>
                  </div>
        )
      }

     
  
};

const element=<EmployeeComponent></EmployeeComponent>

ReactDOM.render(element,document.getElementById("root"));

