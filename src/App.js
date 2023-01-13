import React from "react";
import WeatherDisplay from "./WeatherDisplay";


class App extends React.Component{
  
  constructor(props){
    super(props); 

    this.state = {lat: null, errrorMessage: ''};

    navigator.geolocation.getCurrentPosition(position => {
      this.setState({lat: position.coords.latitude})
    }, err => {
      this.setState({errrorMessage: err.message})
    });
  }
  
  
  render() { 

    return (
    <div>
      <WeatherDisplay />
      <h1>Hello Abdul Rehman</h1>
      <div>
        Latitude: {this.state.lat}
      </div>

    </div>
  );
}

}

export default App;