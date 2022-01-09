import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangedTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangedSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // check xem ô nhập có rỗng hay không thì thông báo.
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return;
        }
        console.log('>> Check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        // đưa tất về trạng thái của ô nhập là rỗng.
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Title Jobs:</label><br />
                    <input type="text" value={this.state.title} onChange={(event) => this.handleChangedTitleJob(event)} /><br />
                    <label htmlFor="lname">Salary :</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleChangedSalary(event)} /><br /><br />
                    <input type="submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        );
    }
}

export default AddComponent;
