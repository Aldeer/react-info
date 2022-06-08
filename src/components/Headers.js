import React,{Component, Fragment} from 'react';
import '../styles/Headers.css'


class Headers extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Fragment>
                <div className='block'>
                    <p className='header'>React &amp; Material-UI Sample Application </p>
                </div>
            </Fragment>
        );
    }
}

export default Headers;