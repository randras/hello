import * as React from "react";
import profilePicture from "../me.png";
import { Dictionary } from "../content/Dictionary";


export default class AppHeader extends React.Component {

    render(): React.ReactNode {
        return (
            <header>
                <div className="container-fluid">
                    <div className="jumbotron">
                        <div className="container">
                            <div className="heading">
                                <img className="img rounded-circle" src={profilePicture} alt="Profile picture"/>
                            </div>
                            <div className="heading">
                                <h1 className="display-4">{Dictionary.get("hello")}</h1>
                            </div>
                            <p className="lead">
                                {Dictionary.get("aboutMe")}
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}


