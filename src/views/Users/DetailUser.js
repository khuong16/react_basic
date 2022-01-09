import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);

            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })

            console.log('>>>>>> check res user', res);
        }
    }

    handleBackButton = () => {
        this.props.history.push('/user');
    }


    render() {

        let { user } = this.state;
        // check Object user xem có null hay ko ?
        let isEmptyObj = Object.keys(user).length === 0;

        console.log('>>>>>> check props: ', this.props)
        return (
            <>
                <div>
                    Hello World from detail user {this.props.match.params.id}
                </div>

                {isEmptyObj === false &&
                    <>
                        <div>
                            User's name: {user.first_name} - {user.last_name}
                        </div>
                        <div>
                            User's email: {user.email}
                        </div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                        </div>
                    </>
                }
            </>
        );
    }
}

export default withRouter(DetailUser);