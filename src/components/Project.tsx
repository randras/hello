import * as React from 'react';
import { Dictionary } from "../content/Dictionary";

interface ProjectProps {
    projectName: string;
    role: string;
    mainResponsibilities: string;
    description: string;
    technologies: string[];
    company?: string;
    period: string;
}

class Project extends React.Component<ProjectProps> {

    render(): React.ReactNode {
        const {projectName, description, technologies, mainResponsibilities, role, company, period} = this.props;

        return(
            <div className="container project">
                <h4 className="project-title">{projectName}</h4>
                <h4><span className="badge badge-primary">{role}</span></h4>
                <p className="project-description">{description}</p>
                <p className="project-main-responsibilites">{mainResponsibilities}</p>
                <div className="project-period-and-company">{period} <span>// {company}</span></div>
                <div className="project-technologies">
                    {technologies.map((d, idx) => <span key={idx} className="ml-1 badge badge-secondary">{d}</span>)}
                </div>
            </div>
        );
    }
}


export default class Projects extends React.Component {

    render(): React.ReactNode {
        return (
            <div className="projects">
                <h2>Projects</h2>

                <Project projectName={Dictionary.get("khProjectName")}
                         role={Dictionary.get("khRole")}
                         mainResponsibilities={Dictionary.get("khMainResponsibilities")}
                         description={Dictionary.get("khDescription")}
                         technologies={["Integration architecture", "Team and task management", "JavaEE", "Spring batch", "JMS", "Performance optimization", "Oracle"]}
                         company={Dictionary.get("appello")}
                         period={Dictionary.get("khPeriod")} />

                <Project projectName={Dictionary.get("fundamentaProjectName")}
                         role={Dictionary.get("fundamentaRole")}
                         mainResponsibilities={Dictionary.get("fundamentaMainResponsibilities")}
                         description={Dictionary.get("fundamentaDescription")}
                         technologies={["Integration architecture", "Team and task management", "JavaEE", "SOAP over JMS", "Apache CXF"]}
                         company={Dictionary.get("appello")}
                         period={Dictionary.get("fundamentaPeriod")} />

                <Project projectName={Dictionary.get("ebhProjectName")}
                         role={Dictionary.get("ebhRole")}
                         mainResponsibilities={Dictionary.get("ebhMainResponsibilities")}
                         description={Dictionary.get("ebhDescription")}
                         technologies={["Client communication", "Team management", "JavaEE", "YourKit profiler", "Spring batch"]}
                         company={Dictionary.get("appello")}
                         period={Dictionary.get("ebhPeriod")} />

                <Project projectName={Dictionary.get("bcrProjectName")}
                         role={Dictionary.get("bcrRole")}
                         mainResponsibilities={Dictionary.get("bcrMainResponsibilities")}
                         description={Dictionary.get("bcrDescription")}
                         technologies={["Client communication", "Team management", "JavaEE", "JavaScript", "Spring batch", "UML"]}
                         company={Dictionary.get("appello")}
                         period={Dictionary.get("bcrPeriod")} />

                <Project projectName={Dictionary.get("ceskaProjectName")}
                         role={Dictionary.get("ceskaRole")}
                         mainResponsibilities={Dictionary.get("ceskaMainResponsibilities")}
                         description={Dictionary.get("ceskaDescription")}
                         technologies={["Java", "JavaEE", "JavaScript", "Spring batch"]}
                         company={Dictionary.get("appello")}
                         period={Dictionary.get("ceskaPeriod")} />

                <Project projectName={Dictionary.get("erfProjectName")}
                         role={Dictionary.get("erfRole")}
                         mainResponsibilities={Dictionary.get("erfMainResponsibilities")}
                         description={Dictionary.get("erfDescription")}
                         technologies={["Java", "Spring", "GWT", "JPA/Hibernate", "CSS"]}
                         company={Dictionary.get("kodInformatika")}
                         period={Dictionary.get("erfPeriod")} />

                <Project projectName={Dictionary.get("somProjectName")}
                         role={Dictionary.get("somRole")}
                         mainResponsibilities={Dictionary.get("somMainResponsibilities")}
                         description={Dictionary.get("somDescription")}
                         technologies={["Project management", "Client communication", "Java", "Spring", "JSP", "JPA/Hibernate", "HTML", "CSS"]}
                         company=""
                         period={Dictionary.get("somPeriod")} />

                <Project projectName={Dictionary.get("wdpProjectName")}
                         role={Dictionary.get("wdpRole")}
                         mainResponsibilities={Dictionary.get("wdpMainResponsibilities")}
                         description={Dictionary.get("wdpDescription")}
                         technologies={["JavaEE", "Vaadin", "Spring", "GWT", "JPA/Hibernate", "UML"]}
                         company={Dictionary.get("appello")}
                         period={Dictionary.get("wdpPeriod")} />

            </div>
        );
    }
}