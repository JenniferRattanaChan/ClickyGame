import React from 'react';
import Card from './Card'
import './style.css'

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: props.list, clicked: [], highestScore: 0 }
    }

    handleClick = (name) => {
        if (this.state.clicked.includes(name)) {
            this.gameOver();
        } else {
            this.setState({clicked: [...this.state.clicked, name]},()=>{ 
                if(this.state.list.length===this.state.clicked.length){
                    this.gameWin();
                }else{
                    this.shuffle();
                } 
            });
        }
    }

    shuffle = () =>{
        let newList = [...this.state.list];
        for (let i = newList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newList[i], newList[j]] = [newList[j], newList[i]];
        }
        this.setState({ list: newList });
    }

    startGame = () => {
        let score = this.state.clicked.length;
        if (score > this.state.highestScore) this.setState({ highestScore: score })
        this.setState({ clicked: [] }) 
    }

    gameOver = () =>{
        this.startGame();
        this.shuffle();
    }

    gameWin = () =>{
        alert("You did it!")
        this.startGame();
        this.shuffle();
    }

    render() {
        return (
            <div>
                <div className="row justify-content-md-center">
                    <div className="col-2">Score <span>{this.state.clicked.length}/{this.state.list.length}</span></div>
                    <div className="col-2">Best Score <span>{this.state.highestScore}</span></div>
                </div>
                <br></br>
                <div className="row">
                    {this.state.list.map(x => <Card key={x} image={x} handleClick={this.handleClick}></Card>)}
                </div>
            </div>
        )
    }
}

export default CardList;