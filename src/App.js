import React from "react";
import WeatherDisplay from "./WeatherDisplay";


class App extends React.Component{
  
  state = {lat: null, errrorMessage: ''};
  

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => this.setState({lat: position.coords.latitude}), err =>  this.setState({errrorMessage: err.message}));
  }
  
  
  render() { 


    if(this.state.errrorMessage && !this.state.lat){
      return <div>Erorr : {this.state.lat}</div>
    }

    if(!this.state.errrorMessage && this.state.lat){
      return <div>
      <div><WeatherDisplay lat={this.state.lat} /></div>
      <div> Latiude : {this.state.lat}</div>
      </div>
    }

    return <div>LOADING!</div>
    
  }

}

export default App;