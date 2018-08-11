import React from 'react';
import styles from '../styles';

class Weather extends React.Component {
    render() {
        return (
            <div style={ styles.weather }>
                { this.props.description && <p style={ styles.weather.description }>{ this.props.description }</p> }
                { this.props.city && this.props.country && <p>{ this.props.city }, { this.props.country }</p> }
                { this.props.temperature && <p style={ styles.weather.temp }>{ this.props.temperature } F &deg;</p> }
                { this.props.error && <p>{ this.props.error }</p> }
            </div>
        );
    }
}

export default Weather;