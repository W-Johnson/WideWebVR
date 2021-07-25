import * as React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {TodoItem} from '../interface';
import'./todoItem.scss'
import {Button} from "@material-ui/core";
import {Edit} from "@material-ui/icons";


function todoItem(TodoItem: TodoItem) {
return(
    <div className="todoItem">
        <div className="todoItemText"><h5 className={"text"}>{TodoItem.todo.todoText}</h5></div>
        <div className="todoItemControls">
            <i className="todoItemControlEdit">
                <Button className="edit"
                        variant="contained"
                        size="small"
                        startIcon={<Edit/>}
                        onClick={() => TodoItem.editTodoItem(TodoItem.todo)}>
                    Edit
                </Button>
            </i>
            <i className="todoItemControlDelete">
                <Button className="delete"
                        variant="contained"
                        size="small"
                        color={"secondary"}
                        startIcon={<DeleteIcon/>}
                        onClick={() => TodoItem.deleteTodoItem(TodoItem.todo)}>
                    Delete
                </Button>
            </i>
        </div>
    </div>
);
}

export default todoItem;