import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <label>
                <select>
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
