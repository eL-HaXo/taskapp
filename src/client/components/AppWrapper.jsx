import "!style!css!../styles/css/normalize.css";
import "!style!css!../styles/css/style.css";

import React from 'react';

class AppWrapper extends React.Component{
    render() {
        return (
            <div className="app">
                <div className="header">
                    <div className="header-logo">tasks</div>
                </div>
                <div className="content">{this.props.children}</div>
                <div className="footer" />
            </div>
        );
    }
};

export default AppWrapper;