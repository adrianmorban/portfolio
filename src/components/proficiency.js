import React from 'react';

function Proficiency(){
    return (
        <div className="proficiency">  
            <p>Desarrollo frontend</p>
            <div id="progressbar">
                <div id="frontend"></div>
            </div>
            <p>Desarrollo backend</p>
            <div id="progressbar">
                <div id="backend"></div>
            </div>
            <p>Administración de bases de datos</p>
            <div id="progressbar">
                <div id="database"></div>
            </div>
        </div>
           );
}

export default Proficiency ;
