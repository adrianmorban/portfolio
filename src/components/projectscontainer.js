import React from 'react';
import Project from './project';
import inventario from "../resources/projects/inventario.png"
import klinorix from "../resources/projects/klinorix.png"
import webserver from "../resources/projects/webserver.png"
import todo from "../resources/projects/todolist.png"

function ProjectsContainer(props){
    return (
        <div className="projectsContainer">
            <Project icon="fas fa-database" img={inventario} title="Control de inventario" description="Aplicación de escritorio para el control de inventario de pequeños negocios creada usando C# y SQL Server."/>
            <Project icon="fas fa-music" title="MusicInfo" description="Aplicación web que consume la API de Spotify para ver informaciones de canciones tales como el tempo, tono y compás."/>
            <Project icon="fas fa-basketball-ball" title="NBA H2H" description="Aplicación para comparar estadísticas de jugadores básicas y avanzadas de jugadores y equipos de la NBA. En desarrollo."/>
            <Project icon="fas fa-server" img={webserver} title="Mini web server" description="Mini servidor web realizada con NodeJS y Express con API consumible que responde a peticiones HTTP."/>
            <Project icon="fas fa-check-square" img={todo} title="To Do List" description="Backend y Frontend de aplicación web tipo ToDo utilizando MongoDB, NodeJs, Express y Bootstrap."/>
            <Project icon="fas fa-flask" img={klinorix} title="KLINORIX.COM" description="Diseño web y parte del diseño gráfico de la página Web de productos químicos Klinorix usando WordPress."/>
        </div>
           );
}

export default ProjectsContainer;
