import axios from "axios";
import { useState, useEffect } from "react";
import { TodoIndex } from "./TodoIndex";
import { TodoNew } from "./TodoNew";
import { Modal } from "./Modal";

export function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [isTotosShowVisible, setIsTodosShowVisible] = useState(false);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/todos.json").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/todos.json", params).then((response) => {
      setTodos([...todos, response.data]);
      successCallback();
    });
  };

  const handleShow = (todo) => {
    console.log("handleShow", todo);
    setIsTodosShowVisible(true);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <TodoNew onCreate={handleCreate} />
      <TodoIndex todos={todos} onShow={handleShow} />
      <Modal show={isTotosShowVisible} onClose={() => setIsTodosShowVisible}>
        <h1>Test</h1>
      </Modal>
    </main>
  );
}

// {
//   user_id: 1,
//   category_id: 1,
//   title: "Make my bed",
//   desctiption: "Make bed look nice",
//   deadline: "After I wake up",
//   completed: true,
// },

// {
//   user_id: 2,
//   category_id: 2,
//   title: "Wash the dishes",
//   desctiption: "Put dishes in dishwasher",
//   deadline: "After lunch",
//   completed: true,
// },
