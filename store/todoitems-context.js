/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React, createContext, useReducer } from 'react';

export const ToDoItemsContext = createContext({
  todoitems: [],
  addToDoItem: ({ title, deadline, status }) => { },
  deleteToDoItem: (id) => { },
  updateToDoItem: (id, { title, deadline, status }) => { },
  setToDoItem: () => {},
});

function toDoItemReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
      for (let i = 0; i < state.length; i += 1) {
        const stateItem = state[i];
        if (stateItem.id === action.payload.id) {
          return state;
        }
      }
      return [{ ...action.payload.data, id: action.payload.id }, ...state];
    case 'UPDATE':
    { const updatableToDoItemIndex = state.findIndex((toDoItem) => toDoItem.id === action.payload.id);
      const updatableToDoItem = state[updatableToDoItemIndex];
      const updatedItem = { ...updatableToDoItem, ...action.payload.data };
      const updatedList = [...state];
      updatedList[updatableToDoItemIndex] = updatedItem;
      return updatedList; }
    case 'DELETE':
    { const newState = state.filter((toDoItem) => toDoItem.id !== action.payload);
      return newState; }
    default:
      return state;
  }
}

function ToDoItemsContextProvider({ children }) {
  const [toDoItemsState, dispatch] = useReducer(toDoItemReducer, []);

  function addToDoItem(toDoItemData) {
    dispatch({ type: 'ADD', payload: toDoItemData });
  }

  function setToDoItem(id, toDoItemData) {
    dispatch({ type: 'SET', payload: { id, data: toDoItemData } });
  }

  function deleteToDoItem(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateToDoItem(id, toDoItemData) {
    dispatch({ type: 'UPDATE', payload: { id, data: toDoItemData } });
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    todoitems: toDoItemsState,
    addToDoItem,
    deleteToDoItem,
    updateToDoItem,
    setToDoItem,
  };
  return <ToDoItemsContext.Provider value={value}>{children}</ToDoItemsContext.Provider>;
}

export default ToDoItemsContextProvider;
