import axios from "axios";
import { useState, useEffect } from "react";
import { TodoIndex } from "./TodoIndex";
import { TodoNew } from "./TodoNew";
import { TodosShow } from "./TodosShow";
import { Modal } from "./Modal";

export function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [isTotosShowVisible, setIsTodosShowVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

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
    setCurrentTodo(todo);
  };

  const handleUpdate = (todo, params, successCallback) => {
    console.log("handleUpdate");
    axios.patch(`/todos/${todo.id}.json`, params).then((response) => {
      setTodos(
        todos.map((p) => {
          if (p.id === response.data.id) {
            return response.data;
          } else {
            return p;
          }
        })
      );
      successCallback();
      setIsTodosShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main className="min-h-screen pt-16">
      <TodoNew onCreate={handleCreate} />
      <TodoIndex todos={todos} onShow={handleShow} />
      <Modal
        show={isTotosShowVisible}
        onClose={() => setIsTodosShowVisible(false)}
      >
        <TodosShow todo={currentTodo} onUpdate={handleUpdate} />
      </Modal>
    </main>
  );
}
