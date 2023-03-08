import React, {Component} from "react";
import axios from 'axios';
import './Create.css'


class Create extends Component {
    constructor(props) {
         super(props);
         this.state = {
            num_plate: '',
            model_year: '',
            brand:'',
            model: '',
            price:'',
            rto:'',
         };
        }

 handleaccidchange = (event) => {
     this.setState({num_plate:event.target.value});   
    };


 handleclientnamechange = (event) => {
     this.setState({model_year: event.target.value});
    };


 handlebanknamechange = (event) => {
     this.setState({brand: event.target.value});
     };


         handlebranchchange = (event) => {
        this.setState({model: event.target.value});
    };

         handlemobilechange = (event) => {
        this.setState({price: event.target.value});
    };


     handlemailidchange = (event) => {
        this.setState({rto: event.target.value});
     };




     handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            num_plate : this.state.num_plate,
             model_year: this.state.model_year,
             brand: this.state.brand,
             model: this.state.model,
             price: this.state.price,
             rto: this.state.rto
         };
        //  console.log(data);
          axios.post('http://127.0.0.1:2024/add', data)
     };
    render(){
     return(
        // console.log("CAR DB");
         <form onSubmit={this.handleSubmit} className="login-form" id="inputdata">
                <label className="login-label">Number Plate</label>
            <input 
                     className="login-input"
                        type="number"
                    value={this.state.num_plate}
                     onChange={this.handleaccidchange}
                     />
                <label className="login-label">Model Year</label>
                 <input 
                     className="login-input"
                     type="number"
                     value={this.state.model_year}
                    onChange={this.handleclientnamechange}
                />
                <label className="login-label">Brand</label>
                 <input 
                 className="login-input"
                 type="text"
                 value={this.state.brand}
                 onChange={this.handlebanknamechange}
                 />
                 <label className="login-label">Model</label>
                 <input 
                 className="login-input"
                 type="text"
                 value={this.state.model}
                 onChange={this.handlebranchchange}
                 />
                 <label className="login-label">On Road Price</label>
             <input 
                    className="login-input"
                    type="number"
                    value={this.state.price}
                    onChange={this.handlemobilechange}
                />
            <label className="login-label">RTO</label>
             <input 
                    className="login-input"
                    type="text"
                    value={this.state.rto}
                    onChange={this.handlemailidchange}
                />
 
                <button className="login-button" type="submit">Add</button>
    </form>
    )
}
}


export default Create;