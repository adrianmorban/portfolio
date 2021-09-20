import React from 'react';
import { BrowserRouter as Router, useHistory } from "react-router-dom";

function Modal(props){
    let history = useHistory();
    let back = e => {
        e.stopPropagation();
        history.goBack();
      };
    return (
        <Router>
            <div className="modal" onClick={back}>
                <div className="modal-content">
                    <div className="modalImage">
                        <img src={props.img}/>
                    </div>
                    <div className="modalInfo">
                        <h2>{props.Title}</h2>
                        <p>{props.Details}</p>
                    </div>
                </div>
            </div>
        </Router>
           );
}

export default Modal ;
