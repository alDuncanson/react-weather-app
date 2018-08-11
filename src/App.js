// Import React
import React from 'react';

// Import components and constants
import Form from './components/Form';
import Weather from './components/Weather';
import key from './constants';

// Import styles
import styles from './styles';

// Create api key variable
const API_KEY = key;

// Create our main react component to be rendered at root
class App extends React.Component {

  // Define our initial state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // Get weather and display it
  getWeather = async (e) => {

    // 
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // Fetch our weather information and convert the data to json format
    // using the city and country variables we created
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();

    // If city and country were entered, set new state
    // else, display an error message
    if ( city && country ) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Enter a city and a country'
      });
    }
  }

  // Style the body tag
  componentDidMount = () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
  }

  componentWillUnmount = () => {
      document.body.style.backgroundColor = null;
  }

  // Render what will be displayed on screen from the Titles,
  // Form, and Weather components
  render() {
    return (
      <div style={ styles.app.container }>
        <div style={ styles.app.left }>
          <Form getWeather={ this.getWeather }/>
        </div>
        <div style={ styles.app.right }>
          <Weather 
            temperature={ this.state.temperature }
            city={ this.state.city }
            country={ this.state.country }
            humidity={ this.state.humidity }
            description={ this.state.description }
            error={ this.state.error }
          />
        </div>
      </div>
    );
  }
}

export default App;