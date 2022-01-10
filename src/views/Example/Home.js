import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/anhmeo.png';

// sử dụng để thằng Home.js để có thể kết nối tới thằng Redux.
import { connect } from 'react-redux';
class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     console.log('Check timeout');
        //     this.props.history.push('/todo');
        // }, 3000);
    }

    handleDeleteUser = (user) => {
        console.log('>>> chekc user delete', user.id)
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('>>>>>> check props: ', this.props);

        let listUsers = this.props.dataRedux;


        return (
            <>
                <div>
                    Hello World from Home Page with MK29
                </div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&

                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} &nbsp;
                                    <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    //trả về thằng props khi mà đã lấy state của thằng redux.
    return { dataRedux: state.users };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE_USER', payload: userDelete
        }),

        addUserRedux: () => dispatch({
            type: 'CREATE_USER'
        })
    }
}

// cần phải có connect và truyền vào hàm mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
