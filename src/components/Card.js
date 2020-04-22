import React from 'react';
import './style.css'

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {image:props.image}
    }

    render() {
        return <img className="click-item" src={require(`../img/${this.state.image}`)} onClick = {()=> this.props.handleClick(this.state.image)} alt=""></img>;
    }
}

export default Card;