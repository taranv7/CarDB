import axios from 'axios';
import React, { Component } from 'react';


class Table extends Component {
    state = {
        data: []
    }


    componentDidMount() {
    axios.get('http://127.0.0.1:2024/show').then(response =>{this.setState({data: response.data});
})
.catch(error => {console.log(error);
});
}

deleteData(num_plate, e){
    axios.delete(`http://127.0.0.1:2024/del/${num_plate}`).then(response => {console.log(response);
    
    const data = this.state.data.filter(item => item.num_plate !== num_plate);
    this.setState({ data });
})
}

updateData(num_plate, e){
    axios.put(`http://127.0.0.1:2024/update/${num_plate}`).then(response => {console.log(response);
    
    
})
}   


    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>Num_Plate</th>
                        <th>Model_year</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>RTO</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(ticket => (
                        <tr key={ticket.num_plate}>
                            <td>{ticket.num_plate}</td>
                            <td>{ticket.model_year}</td>
                            <td>{ticket.brand}</td>
                            <td>{ticket.model}</td>
                            <td>{ticket.price}</td>
                            <td>{ticket.rto}</td>
                            
                            <td>
                                <button className='btn btn-danger' onClick={(e) => this.deleteData(ticket.num_plate, e)}>Delete</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={(e) => this.updateData(ticket.num_plate, e)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}


export default Table;