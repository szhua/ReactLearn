


import React from 'react'

class Square extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    let current = this.state.value + 1;
                    this.setState({ value: current })
                }}>Setting</button>
                <h2>{this.state.value}</h2>
            </div>

        )
    };
}


export default Square;