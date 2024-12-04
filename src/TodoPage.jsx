import axios from "axios";
import { useState, useEffect } from "react";
import { TodoIndex } from "./TodoIndex";
import { TodoNew } from "./TodoNew";
import { TodosShow } from "./TodosShow";
import { Modal } from "./Modal";

export function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [isTodosShowVisible, setIsTodosShowVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleIndex = () => {
    axios.get("/todos.json").then((response) => {
      setTodos(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    axios.post("/todos.json", params).then((response) => {
      setTodos([...todos, response.data]);
      successCallback();
    });
  };

  const handleShow = (todo) => {
    setIsTodosShowVisible(true);
    setCurrentTodo(todo);
  };

  const handleUpdate = (todo, params, successCallback) => {
    axios.patch(`/todos/${todo.id}.json`, params).then((response) => {
      setTodos(
        todos.map((p) => {
          return p.id === response.data.id ? response.data : p;
        })
      );
      successCallback();
      setIsTodosShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <TodoNew onCreate={handleCreate} />
        <TodoIndex todos={todos} onShow={handleShow} />
      </div>
      {isTodosShowVisible && (
        <Modal onClose={() => setIsTodosShowVisible(false)}>
          <TodosShow todo={currentTodo} onUpdate={handleUpdate} />
        </Modal>
      )}
    </main>
  );
}
