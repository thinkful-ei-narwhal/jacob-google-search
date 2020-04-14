import React from 'react'

class Book extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                clicked: false
            }
    }
    expand = (e) => {
        if (this.state.clicked === false)
        this.setState({
            clicked: true
        })
        else if (this.state.clicked === true) {
            this.setState({
                clicked: false
            })
        }
    }
    render(){
        return(
            <div className = 'book'>

                <h2 className = 'book-header'> {this.props.title} </h2>
                <img src = {this.props.image} alt = 'photo' />
                <p>{this.props.author}</p>
                <p>{this.props.price}</p>
                <div className = 'description' >
                    <button id = 'desc-button' onClick = {(e) => this.expand(e)}> {this.state.clicked ? 'Hide' : 'Show'} Description</button>
                    {this.state.clicked ? this.props.description : null}

                </div>
            </div>

        )
    }
}

export default Book