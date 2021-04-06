import './sass/styles.css';
import Projects from "./components/Project";
import * as React from "react";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AppHeader from "./components/AppHeader";
import Hobbies from "./components/Hobbies";
import { Dictionary } from "./content/Dictionary";
import Education from "./components/Education";
import OtherResponsibilities from "./components/OtherResponsibilities";

class App extends React.Component {

  render(): React.ReactNode {
      return (
        <div className="container-fluid app">
            <AppHeader/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Projects/>
                        <OtherResponsibilities/>
                        <Education/>
                    </div>
                    <div className="col-lg-4">
                        <Contact/>
                        <Skills skills={[
                            {name: "JavaEE (EJB, JPA)", percentage: 95},
                            {name: "ORACLE (Sql)", percentage: 90},
                            {name: "Spring (spring-boot, MVC, spring-data)", percentage: 75},
                            {name: "Vaadin", percentage: 70},
                            {name: "JavaScript / TypeScript (jQuery, React)", percentage: 60},
                            {name: "CSS / HTML", percentage: 55},
                            {name: "Hibernate", percentage: 80},
                            {name: "Team managment", percentage: 57},
                            {name: "Communication", percentage: 70},
                        ]}/>

                        <Hobbies hobbies={[
                            Dictionary.get("fishing"),
                            Dictionary.get("skiing"),
                            Dictionary.get("readingAboutNewTechnologies"),
                            Dictionary.get("hangOutWithFriends"),
                            Dictionary.get("playingChess"),
                        ]}/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;