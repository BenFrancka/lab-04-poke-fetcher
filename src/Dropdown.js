import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <label>
                <select onChange={this.props.displayOrder}>
                    <option value="">
                        --Select Order--
                    </option>
                    <option value={this.props.display}>
                        Ascending
                    </option>
                    <option value={this.props.display}>
                        Descending
                    </option>
                </select>
            </label>
        )
    }
}
