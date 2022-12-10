/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import axios from 'axios';

const BACKEND_URL = 'https://easytodo.p-e.kr';

export async function storeToDoItem(toDoItemData, sid) {
  const response = await axios.post(`${BACKEND_URL}/todoitem`, toDoItemData, {
    headers: {
      Cookie: sid,
    },
  });
  // console.log(response.data);
  const id = response.data;
  return id;
}

// export function updateExpense(id, expenseData) {
//   return axios.put(BACKEND_URL + `/todoitem`, expenseData);
// }

export function deleteToDoItem(id, sid) {
  return axios.delete(`${BACKEND_URL}/todoitem?id=${id}`, {
    headers: {
      Cookie: sid,
    },
  });
}

export function updateToDoItem(id, toDoItemData, sid) {
  return axios.put(`${BACKEND_URL}/todoitem`, { ...toDoItemData, id }, {
    headers: {
      Cookie: sid,
    },
  });
}
