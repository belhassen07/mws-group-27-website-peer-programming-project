import React, { Component } from 'react';
import './contributor.css'

class ContributorBox extends Component{
    constructor(){
        super();
        this.state = {
            contributor:{}
        }
    }

    componentWillMount(){
        this.setState({
            contributor:this.props.contributor
        })

        console.log(this.props.contributor.avatar);
    }

    render(){
        return(
            <div className="contributerContainer">
                <h2 className="contributorName">{this.state.contributor.name}</h2>
                <p className="contributorDescription">{this.state.contributor.description}</p>
                <ul>
                    <li className="social"><a href={this.state.contributor.facebook} target="_blank" className="link"><i className="fab fa-facebook-square"></i></a></li>
                    <li className="social"><a href={this.state.contributor.github} target="_blank" className="link"><i className="fab fa-github-square"></i></a></li>
                    <li className="social"><a href={this.state.contributor.linkedin} target="_blank" className="link"><i className="fab fa-linkedin"></i></a></li>
                </ul>
                <img className="avatar" src={this.state.contributor.avatar}/>
            </div>
        )
    }
}

export default ContributorBox;