import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <label>
                <select onChange={this.props.displayOrder}>
                    <option value="">
                        --Select Order--
                    </option>
                    <option value="Ascending">
                        Ascending
                    </option>
                    <option value="Descending">
                        Descending
                    </option>
                </select>
            </label>
        )
    }
}
