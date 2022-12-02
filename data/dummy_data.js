import ToDoItem from "../models/todoitem";

export const DUMMY_TODOITEMS = [
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