import React from "react";
import './addTodo.scss'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Button} from "@material-ui/core";

interface addTodo {
    add: () => Promise<void>
}

function addText(addTodo: addTodo) {
    // console.log("In addTodo text enter = " +text.accessKey  + "#")
    addTodo.add();

}

function AddTodo(addTodo: addTodo) {
    console.log("In addTodo")

    return (
        <>
            <div className="addTodoContainer">
                <Button
                    className="todoInputButton"
                    variant="contained"
                    size="large"
                    color={"primary"}
                    startIcon={<AddCircleIcon/>}
                    onClick={() => {
                        console.log("Button press");
                        addText(addTodo);
                    }
                    }
                 > ADD A TASK
                </Button>
            </div>
        </>
    );
}

export default AddTodo;