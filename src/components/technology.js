import React from 'react';

function Tech(props){
    return (
        <div className="tech">
            <div className="iconShape">
                <i class={props.icon}></i>
                <span className="tooltip">{props.title}</span>
            </div>
        </div>
           );
}

export default Tech;
