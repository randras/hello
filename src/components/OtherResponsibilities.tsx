import * as React from 'react';
import { Dictionary } from "../content/Dictionary";

interface OtherResponsibilityProps {
    task: string;
    description: string;
    company?: string;
    period?: string;
}

class OtherResponsibility extends React.Component<OtherResponsibilityProps> {

    render(): React.ReactNode {
        const {task, description, company, period} = this.props;

        return(
            <div className="container project">
                <h4 className="project-title">{task}</h4>
                <p className="project-description">{description}</p>
                <div className="project-period-and-company">{period} <span>// {company}</span></div>
            </div>
        );
    }
}


export default class OtherResponsibilities extends React.Component {

    render(): React.ReactNode {
        return (
            <div className="projects">

                <h2>Other responsibilities</h2>
                <OtherResponsibility task={Dictionary.get("interviewing")}
                         description={Dictionary.get("interviewingDescription")}
                         company={Dictionary.get("appello")}
                         period={Dictionary.get("interviewingPeriod")} />

                <OtherResponsibility task={Dictionary.get("performanceEvaluation")}
                                     description={Dictionary.get("performanceEvaluationDescription")}
                                     company={Dictionary.get("appello")}
                                     period={Dictionary.get("performanceEvaluationPeriod")} />

            </div>
        );
    }
}