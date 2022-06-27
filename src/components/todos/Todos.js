import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../redux/reducers/todo/reducer";
import { GoPlus } from "react-icons/go";
import "../../css/main.css";
import DisplayTodos from "./DisplayTodos";
import Navbar from '../Navbar';

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const add = () => {
        if (todo === "") {
            alert("Input is Empty");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    };

    return (
        <div className="container">
            <Navbar />
            <div className="App">
                <h1>
                    Todo App
                </h1>
            </div>
            <div className="addTodos">
                <div className="d-flex flex-direction-row justify-content-center">
                    <input
                        type="text"
                        onChange={(e) => handleChange(e)}
                        className="todo-input"
                        value={todo}
                    />

                    <button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="add-btn"
                        onClick={() => add()}
                    >
                        <GoPlus />
                    </button>
                </div>
                <br />
                <div>
                    <DisplayTodos />
                </div>

            </div>
        </div>

    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
