import React from 'react';
import catImg from '../images/icon.png';
import circlesImg from '../images/circles.png';
import './styles/Card.css'


class Card extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png'
        }
    }
    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                image: 'https://vignette.wikia.nocookie.net/pokemonreloaded/images/f/f1/Wigglytuff.png/revision/latest/scale-to-width-down/340?cb=20150825204600&path-prefix=es'
            })
        },5000)
    }



    render() {
        return (
            <div className="card mx-auto Fitness-Card"
                style={{ backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor}` }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="floar-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{this.props.title}</h1>
                            <p>{this.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card





