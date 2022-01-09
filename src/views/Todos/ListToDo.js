import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import Color from "../HOC/Color";
import { toast } from 'react-toastify';

class ListToDo extends React.Component {

    state = {
        listToDos: [
            { id: 'todo1', title: 'Doing HomeWork' },
            { id: 'todo2', title: 'Fixing Bug' },
            { id: 'todo3', title: 'Play Games' },
            { id: 'todo4', title: 'Clean House' },
        ],
        //Objects
        editToDo: {

        }
    }

    addNewToDo = (todo) => {
        // let currentListToDo = this.state.listToDos;
        // currentListToDo.push(todo);

        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })

        toast.success('Wow so easy!');
    }

    handleDeleteJob = (todo) => {
        let currentToDos = this.state.listToDos;
        currentToDos = currentToDos.filter(item => item.id !== todo.id)

        this.setState({
            listToDos: currentToDos
        })
        toast.success('Delete success!');
    }

    handleEditTodo = (todo) => {
        let { editToDo, listToDos } = this.state;

        let isEmptyObj = Object.keys(editToDo).length === 0;
        // save
        if (isEmptyObj === false && editToDo.id === todo.id) {
            let listToDosCopy = [...listToDos];

            let objIndex = listToDosCopy.findIndex(item => item.id === todo.id);

            listToDosCopy[objIndex].title = editToDo.title;

            this.setState({
                ListToDo: listToDosCopy,
                editToDo: {
                }
            })
            toast.success('Update To Do Successfullt');
            return;
        }
        //edit
        this.setState({
            editToDo: todo

        })

    }

    handleOnChangeEditToDo = (event) => {
        let editToDoCopy = { ...this.state.editToDo };
        editToDoCopy.title = event.target.value;
        this.setState({
            editToDo: editToDoCopy
        })
    }

    render() {

        let { listToDos, editToDo } = this.state;
        // let listToDos = this.state.listToDos;
        let isEmptyObj = Object.keys(editToDo).length === 0;
        //console.log(">>> check empty object, ", isEmptyObj);
        return (
            <>
                <p>
                    Simple To Do Apps with ReactJS
                </p>
                <div className="list-todo-container">
                    <AddToDo
                        addNewToDo={this.addNewToDo}
                    />
                    <div className="list-todo-content">

                        {listToDos && listToDos.length > 0 &&
                            listToDos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editToDo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editToDo.title} onChange={(event) => this.handleOnChangeEditToDo(event)} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editToDo.id === item.id ? 'Save' : 'Edit'}
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteJob(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Color(ListToDo);
