import * as React from "react";
import { Dictionary } from "../content/Dictionary";

export default class Education extends React.Component {

    render(): React.ReactNode {
        return(
            <div className="container education">
                <h2>Education and certificate</h2>
                <ul>
                    <li>{Dictionary.get("elte")}</li>
                    <li>Oracle Java Certified Programmer</li>
                </ul>
            </div>
        );
    }

}