import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/anhmeo.png';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     console.log('Check timeout');
        //     this.props.history.push('/todo');
        // }, 3000);
    }

    render() {
        console.log('>>>>>> check props: ', this.props);
        return (
            <>
                <div>
                    Hello World from Home Page with MK29
                </div>
                <div>
                    <img src={logo} />
                </div>
            </>
        );
    }
}

export default Color(Home);
