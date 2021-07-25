export interface TodoResponse{
    id: number,
    todoText: string,
    published_at: string,
    created_at: string,
    updated_at: string,
    isCompleted: boolean
}

export interface TodoItem {
    todo: TodoResponse;
    editTodoItem: (todo: TodoResponse) => void;
    deleteTodoItem: (todo: TodoResponse) => void;

}

export interface TodoList{
    todos: TodoResponse[];
    editTodoItem: (todo: TodoResponse) => void;
    deleteTodoItem: (todo: TodoResponse) => void;
}