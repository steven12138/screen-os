import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';

class PageCtrl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Home",
        }
    }
    render() {
        let element = undefined;
        if (this.state.page === "Home") {
            element = <Home />;
        }
        else if (this.state.page === "View") {
            element = <div>View Page</div>;
        }
        else if (this.state.page === "admin") {
            element = <div>Admin Page</div>;
        }
        return element;
    }
}


ReactDOM.render(
    <React.StrictMode>
        <PageCtrl />
    </React.StrictMode>,
    document.getElementById('root')
);

