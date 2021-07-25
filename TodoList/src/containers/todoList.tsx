import {TodoList} from "../interface";

import TodoItem from "../components/todoItem"

function todoList(todoList: TodoList){
    return (
        <div className="todoListContainer">
            {todoList.todos
                .map((todo, i) => (
                    <TodoItem
                        todo={todo}
                        key={i}
                        deleteTodoItem={todoList.deleteTodoItem}
                        editTodoItem={todoList.editTodoItem}
                    />
                ))}
        </div>
    );
}

export default todoList;