import React from 'react';
import HeaderText from './headertext';
import SubheaderText from './subheadertext';
import Badges from './badges';
import Techs from './technologies';
import Knowledge from './knowledge';
import Proficiency from './proficiency';

function AboutMe(){
    return (
        <div className="aboutMe" id="about">
            <HeaderText Texto="Acerca de mís"/>
            <Badges/>
            <SubheaderText Texto="Habilidades"/>
            <div className="twoRow">
                <Techs/>
                <Knowledge/>
            </div>
            <SubheaderText Texto="Competencias"/>
            <Proficiency/>
        </div>
           );
}

export default AboutMe;
