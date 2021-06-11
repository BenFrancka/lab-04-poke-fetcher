import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <label>
                <select onChange={this.props.displayOrder}>
                    <option value="">
                        --Select Order--
                    </option>
                    <option value="asc">
                        asc
                    </option>
                    <option value= "desc">
                        desc
                    </option>
                </select>
            </label>
        )
    }
}
