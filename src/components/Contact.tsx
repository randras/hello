import * as React from 'react';

export default class Contact extends React.Component {

    render(): React.ReactNode {

        return (
            <div className="container">
                <h2>Contact me</h2>
                <ul className="ml-2 list-unstyled contact">
                    <li><i className="mr-2 mdi mdi-18px mdi-email" />me@romhanyia.com</li>
                    <li><i className="mr-2 mdi mdi-18px mdi-phone" />+36 30 863 40 55</li>
                    <li><i className="mr-2 mdi mdi-18px mdi-linkedin-box" /><a href="https://www.linkedin.com/in/andras-romhanyi-3bbb4541/">https://linkedin.com</a></li>
                    <li><i className="mr-2 mdi mdi-18px mdi-skype" />live:andris.romhanyi</li>
                    <li><i className="mr-2 mdi mdi-18px mdi-github-box" /><a href="https://github.com/randras/">https://github.com/randras</a></li>
                    <li><i className="mr-2 mdi mdi-18px mdi-map-marker" />1094 HU Budapest</li>
                </ul>
            </div>
        );
    }
}