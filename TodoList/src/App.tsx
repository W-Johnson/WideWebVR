import React, {Dispatch, useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import TodoList from "./containers/todoList";
import {TodoResponse} from "./interface";
import AddTodo from './containers/addTodo';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#00BFFF',
        },
        secondary: {
            main: '#FF0000'
        },
    },
});


function App() {

    let todos: TodoResponse[], setTodos: Dispatch<any>;
    [todos, setTodos] = useState([]);
    useEffect(() => {
        async function asynchro() {
            const result = await axios.get("http://localhost:1337/todos");
            setTodos(result?.data);
        }
        asynchro();
    }, []);
    const addTodo = async () => {
        const newTodoText = prompt("Enter new todo task:");
        if (newTodoText != null) {
            console.log("The text input is:" + newTodoText + "#");
            if (newTodoText && newTodoText.length > 0) {
                console.log("before post")
                const result = await axios.post("http://localhost:1337/todos", {
                    todoText: newTodoText,
                });
                setTodos([todos, result?.data]);
                const result2 = await axios.get("http://localhost:1337/todos");
                setTodos(result2?.data);

            }
        }
    };
    const deleteTodoItem = async (todo: TodoResponse) => {
        if (window.confirm("Do you really want to delete this item?")) {
            await axios.delete("http://localhost:1337/todos/" + todo.id);
            const newTodos = todos.filter((_todo: TodoResponse) => _todo.id !== todo.id);
            console.log(newTodos);
            setTodos(newTodos);
        }
    };
    const editTodoItem = async (todo: TodoResponse) => {
        const newTodoText = prompt("Enter new todo text or description:");
        if (newTodoText != null) {
            const result = await axios.put("http://localhost:1337/todos/" + todo.id, {
                todoText: newTodoText,
            });
            const moddedTodos = todos.map((_todo: TodoResponse) => {
                if (_todo.id === todo.id) {
                    return result?.data;
                } else {
                    return _todo;
                }
            });
            setTodos(moddedTodos);
        }
    };

    return (
        <div className="App">
            <title>ToDo app</title>
            <Header/>
            <main className="main">
                <ThemeProvider theme={theme}>

                <AddTodo add={addTodo}/>
                <TodoList
                    todos={todos}
                    deleteTodoItem={deleteTodoItem}
                    editTodoItem={editTodoItem}
                />
                </ThemeProvider>
            </main>
        </div>
    );
}

export default App;
