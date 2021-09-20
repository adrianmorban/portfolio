import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from './modalProject';

const renderBoton = (img) => {
    if(img != null) return <Link to="/project"><button>Ver proyecto</button></Link>
}

function Project(props){
    return (
        <Router>
            <div className="project">
                <h3>{props.title}</h3>
                <i class={props.icon}></i>
                <p>{props.description}</p>
                {renderBoton(props.img)}
            </div>
            
            <Switch>
                <Route path="/project">
                    <Modal img={props.img} Title={props.title} Details={props.description} />
                </Route>
            </Switch>
        </Router>
           );
}

export default Project;
