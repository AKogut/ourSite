import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class headMenu extends React.Component {
    render() {
        return (
            <h1>Hello</h1>
        );
    }
}
ReactDOM.render(
    <headMenu />, document.getElementById("root")
);
