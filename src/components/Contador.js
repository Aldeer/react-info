import React,{Component, Fragment} from 'react';
import '../style/Contador.css'

class Contador extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: 0
        };
        this.decrement=this.decrement.bind(this);
        this.increment=this.increment.bind(this);
    }
    decrement(){
        this.setState({
            valor: this.state.valor - 1
        })
    }
    increment(){
        this.setState({
            valor: this.state.valor + 1
        })
    }

    render(){
        return(
            <Fragment>
                <div className='contador-flex'>
                    <button 
                        className='btn'
                        onClick={this.decrement}
                    >-</button>
                    <p className='valor'>{this.state.valor}</p>
                    <button 
                        className='btn'
                        onClick={this.increment}
                    >+</button>
                </div> 
            </Fragment>
        )
    }
}

export default Contador;