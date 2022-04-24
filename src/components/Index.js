// import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Style.css';
import DisplayTodos from "./todos/DisplayTodos";
// import TodoItem from "./todos/TodoItem";


function Index(props) {

    // const [sort, setSort] = useState("active");

    return (
        <div className="container">
            <div className="index-nav-button d-flex flex-direction-row">
                <Link className="index-nav-menu" to="/calculator">Calculator</Link> <br />
                <Link className="index-nav-menu" to="/currencyconvertor">Currency Convertor</Link>
                <Link className="index-nav-menu" to="/todo">Todos List</Link>
                <Link className="index-nav-menu" to="/get-api">Get API</Link>
            </div>

            
            <div className="mt-2">
            <h1 style={{ textAlign: "center", fontSize:"24px" }}>
                My Todos
            </h1>
                <DisplayTodos />
            </div>



            {/* <div className="displaytodos">
                <div className="buttons">
                    <button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSort("active")}
                    >
                        Active
                    </button>
                </div>
                <ul>
                    {props.todos.length > 0 && sort === "active"
                        ? props.todos.map((item) => {
                            return (
                                item.completed === false && (
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo}
                                    />
                                )
                            );
                        })
                        : null}
                </ul>
            </div> */}
        </div>
    )
}

export default Index