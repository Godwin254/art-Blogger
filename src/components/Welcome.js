import React, { Component } from 'react'

 class Welcome extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div className = "mypage">
               <h3>{this.props.title}</h3> 
               {this.props.children}
            </div>
        )
    }
}

export default Welcome
