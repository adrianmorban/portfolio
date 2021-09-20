import React from 'react';
import Badge from './badge';

function Badges(){
    return (
        <div className="badges">
            <Badge icon="fas fa-users" title="Liderazgo" />
            <Badge icon="fas fa-chart-line" title="Capacidades analíticas" />
            <Badge icon="fas fa-lightbulb" title="Resolución de problemas" />
            <Badge icon="fas fa-user-friends" title="Trabajo en equipo" />
        </div>
           );
}

export default Badges;
