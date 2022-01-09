import React from "react";
import './Nav.scss';
import {
    Link,
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    {/* <Link to="/">Home</Link>
                    <Link to="/todo">ToDo</Link>
                    <Link to="/about">About</Link> */}

                    <NavLink to="/" activeClassName="active" exact={true}>
                        Home
                    </NavLink>
                    <NavLink to="/todo" activeClassName="active">
                        Todos
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                    <NavLink to="/user" activeClassName="active">
                        User
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Nav;
