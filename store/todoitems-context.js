import { createContext } from "react";
import { useReducer } from "react";
import ToDoItem from "../models/todoitem";

const DUMMY_TODOITEMS = [
    new ToDoItem(
        "td1",
        "Do Homework",
        new Date(2022, 11, 2, 23, 30),
        false,
        "r1",
        ["university"],
        "important",
        "DONE"

    ),
    new ToDoItem(
        "td2",
        "Take a shower",
        new Date(2022, 11, 3, 23, 30),
        true,
        "r2"
    ),
    new ToDoItem(
        "td3",
        "Work Out",
        new Date(2022, 11, 2, 20, 30),
        false,
        "r3"
    ),
    new ToDoItem(
        "td4",
        "Do Homework 2",
        new Date(2022, 11, 4, 22, 30),
        false,
        "r4"
    ),
    new ToDoItem(
        "td5",
        "Do Homework 3",
        new Date(2022, 11, 5, 22, 30),
        false,
        "r4"
    ),
    new ToDoItem(
        "td6",
        "Do Homework 6",
        new Date(2022, 11, 10, 22, 30),
        false,
        "r4"
    ),

    new ToDoItem(
        "td7",
        "BlahBlah",
        new Date(2022, 11, 11, 22, 30),
        false,
        "r4"
    ),

    new ToDoItem(
        "td8",
        "BlahBlahBkjbolajbv",
        new Date(2022, 11, 7, 22, 30),
        false,
        "r4",
    )
]

export const ToDoItemsContext = createContext({
    todoitems: [],
    addToDoItem: ({ title, deadline, item_status }) => { },
    deleteToDoItem: (id) => { },
    updateExpense: (id, { title, deadline, item_status }) => { },
})

function toDoItemReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            // console.log([{ ...action.payload, id: id }, ...state])
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updatableToDoItemIndex = state.findIndex((toDoItem) => toDoItem.id === action.payload.id);
            const updatableToDoItem = state[updatableToDoItemIndex];
            const updatedItem = { ...updatableToDoItem, ...action.payload.data };
            const updatedList = [...state];
            updatedList[updatableToDoItemIndex] = updatedItem;
            return updatedList;
        case 'DELETE':
            // console.log("reducer");
            // console.log(action.payload)
            const newState = state.filter((toDoItem) => toDoItem.id !== action.payload);
            // console.log(newState);
            return newState;
        default:
            return state;
    }
}

function ToDoItemsContextProvider({ children }) {
    const [toDoItemsState, dispatch] = useReducer(toDoItemReducer, DUMMY_TODOITEMS);

    function addToDoItem(toDoItemData) {
        dispatch({ type: 'ADD', payload: toDoItemData });
    }

    function deleteToDoItem(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateToDoItem(id, toDoItemData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: toDoItemData } });
    }

    const value = {
        todoitems: toDoItemsState,
        addToDoItem: addToDoItem,
        deleteToDoItem: deleteToDoItem,
        updateToDoItem: updateToDoItem
    };
    return <ToDoItemsContext.Provider value={value}>{children}</ToDoItemsContext.Provider>

}

export default ToDoItemsContextProvider;