import * as React from "react";


interface HobbiesProps {
    hobbies: string[];
}

export default class Hobbies extends React.Component<HobbiesProps> {
    render(): React.ReactNode {

        return (
            <div className="container hobbies">
                <h2>Leisure activities</h2>
                <ul className="list-unstyled">
                    {this.props.hobbies.map((e, idx) => <li key={idx}>{e}</li>)}
                </ul>
            </div>
        );
    }
}