import React from "react";

import './App.css';

export default class App extends React.Component {

  render() {
    return (
        <div className={"window"}>
            <div className={"content"}>
                <h1>Achille Bourgault</h1>
                <p>Developpeur - Etudiant à <span>Epitech Lille</span></p>
                <div className={"links-section"}>
                    <div className={"links"}><span>Linkedin</span></div>
                    <div className={"links"}><span>Github</span></div>
                    <div className={"links"}><span>Contact</span></div>
                </div>
            </div>

            <svg className={"svg"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#156ec6" fill-opacity="1" d="M0,0L80,37.3C160,75,320,149,480,176C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    )
  }
}
