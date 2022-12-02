import { createContext } from "react";

export const ToDoItemsContext = createContext({
    todoitems: [],
    addToDoItem: ({ title, deadline, isRepeated, repetition_id, tags, memo, item_status }) => { },
    deleteToDoItem: (id) => { },
    updateExpense: (id, { title, deadline, isRepeated, repetition_id, tags, memo, item_status }) => { },
})

// function ToDoItemsContextProvider