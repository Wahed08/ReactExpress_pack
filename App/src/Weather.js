import React, {Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = { 
            weather : "Not Yet"
         };
    }
        handleButtonClick = () =>{
        axios.get("/weather").then(response =>{
           // console.log(response.data);
            this.setState({
                weather : response.data.temperature
            });
        });
    }
    render() { 
        return (  
            <div>
                <button onClick={this.handleButtonClick}>Get the temperature in Bangladesh</button>
                <h1>The temperature in BD is : {this.state.weather}</h1>
            </div>
        );
    }
}
 
export default App;