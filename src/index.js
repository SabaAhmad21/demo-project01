import React from 'react';
import ReactDOM from 'react-dom';

class EmployeeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          message: ''
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

      onCreateEmployee=()=>{
        let empInfo={
              Id:this.refs.Id.value,
              Name:this.refs.Name.value,
              Location:this.refs.Location.value,
              Salary:this.refs.Salary.value
        
            };
        }
  
};

const element=<EmployeeComponent></EmployeeComponent>

ReactDOM.render(element,document.getElementById("root"));

