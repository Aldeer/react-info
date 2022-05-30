import React, { Component, Fragment } from 'react';
import CardComponent from '../components/CardComponent';
import CreateForm from '../components/CreateForm';
import Header from '../components/Header';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            form:{
                titulo:"Emanuel"
            }
        }
    }
    render(){
        return(
            <Fragment>
                <Header></Header>
                <CreateForm></CreateForm>
                <CardComponent titulo={this.state.form.titulo}></CardComponent>
            </Fragment>
        );
    }
}

export default HomePage;