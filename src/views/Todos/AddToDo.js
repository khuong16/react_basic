import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {

    state = {
        title: ''
    }

    handleOnChangedTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClickAddToDo = () => {
        if (!this.state.title) {
            //if(undefined/null/empty) => false
            toast.error(`Mising Title's Title To do `);
            return;

        }
        let toDo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewToDo(toDo);

        this.setState({
            title: ''
        })
    }


    render() {

        let { title } = this.state;

        return (
            <div>
                <div className="add-todo">
                    <input type='text'
                        value={title}
                        onChange={(event) => this.handleOnChangedTitle(event)} />
                    <button type="button" className="add" onClick={() => this.handleClickAddToDo()}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddToDo;