import axios from "axios";
import { createContext } from "react";
import { useReducer } from "react";
import ToDoItem from "../models/todoitem";

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
            // const id = await axios.post('adsad', { ...action.payload }, {})
            // console.log([{ ...action.payload, id: id }, ...state])
            return [{ ...action.payload, id: id }, ...state]
        case 'INIT':
            for (let i = 0; i < state.length; i++) {
                const stateItem = state[i]
                if (stateItem.id == action.payload.id) {
                    return state
                }
            }
            return [{ ...action.payload.data, id: action.payload.id }, ...state]
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
    const [toDoItemsState, dispatch] = useReducer(toDoItemReducer, []);

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