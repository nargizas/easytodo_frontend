import ToDoItem from "../models/todoitem";

export const DUMMY_TODOITEMS = [
    new ToDoItem(
        "td1",
        "Do Homework",
        new Date(2022, 11, 10, 23, 30),
        false,
        "r1",
        ["university"]

    ),
    new ToDoItem(
        "td2",
        "Take a shower",
        new Date(2022, 11, 11, 23, 30),
        true,
        "r2"
    ),
    new ToDoItem(
        "td3",
        "Work Out",
        new Date(2022, 11, 10, 20, 30),
        false,
        "r3"
    ),
    new ToDoItem(
        "td4",
        "Do Homework 2",
        new Date(2022, 11, 10, 22, 30),
        false,
        "r4"
    )
]