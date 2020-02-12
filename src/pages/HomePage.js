import React, { Component } from 'react';
import { genLuhn10Checksum } from '../luhn/modulo10';

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputNumber: null,
            checksum: undefined
        }
    }

    handleInput = (e) => {
        let checksum = genLuhn10Checksum(e.target.value)
        this.setState({
            checksum: checksum
        })
    }

    render() {
        return(
            <React.Fragment>
                <input type="text" placeholder="type your number here..." onChange={this.handleInput} value={this.state.inputNumber} />
                {this.state.checksum ? <p style={{ color: "green" }}>Luhn10 Checksum: {this.state.checksum}</p> : null}
            </React.Fragment>
        )
    }
}