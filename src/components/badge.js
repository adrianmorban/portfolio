import React from 'react';

function Badge(props){
    return (
        <div className="Badge">
            <div className="circle">
                <i class={props.icon}></i>
            </div>
            <p className="badgeTitle">{props.title}</p>
        </div>
           );
}

export default Badge;
