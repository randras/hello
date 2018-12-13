import * as React from "react";

interface SkillProps {
    name: string;
    percentage: number;
}

interface SkillsProps {
    skills: SkillProps[];
}

class Skill extends React.Component<SkillProps> {

    render(): React.ReactNode {

        const {name, percentage} = this.props;

        return(
            <li className="skill">
                {name}
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: percentage + "%"}} aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100} />
                </div>
            </li>
        );
    }

}

export default class Skills extends React.Component<SkillsProps> {

    render(): React.ReactNode {
        return (
            <div className="container">
                <h2>Skills</h2>
                <ul className="list-unstyled skills-container">
                    {this.props.skills.map((e, idx) =>
                        <Skill key={idx} name={e.name} percentage={e.percentage} />)}
                </ul>
            </div>
        );
    }

}





