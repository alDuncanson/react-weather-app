import React from 'react';
import styles from '../styles';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather} style={ styles.form }>
                <input type='text' name='city' placeholder='city' style={ styles.form.input } placeholderTextColor={ styles.form.input.placeholder }/>
                <input type='text' name='country' placeholder='country' style={ styles.form.input }/>
                <button style={ styles.form.button }>Get Weather</button>
            </form>
        );
    }
}

export default Form;