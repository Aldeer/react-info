import React,{Component, Fragment} from 'react';
import NavBar from '../components/NavBar';
import Noticia from '../components/Noticia'


class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <Fragment>
                <NavBar></NavBar>
                <Noticia></Noticia>
            </Fragment>
        );
    }
}

export default HomePage;