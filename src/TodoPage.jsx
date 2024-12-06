import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TodoIndex } from "./TodoIndex";
import { TodoNew } from "./TodoNew";
import { TodosShow } from "./TodosShow";
import { Modal } from "./Modal";

export function TodoPage() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [isTodosShowVisible, setIsTodosShowVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleIndex = () => {
    axios.get("/todos.json").then((response) => {
      setTodos(response.data);
    });
  };

  useEffect(handleIndex, []);

  const handleCreate = (params) => {
    axios.post("/todos.json", params).then(() => {
      navigate("/todos");
    });
  };

  const handleShow = (todo) => {
    setIsTodosShowVisible(true);
    setCurrentTodo(todo);
  };

  const handleUpdate = (todo, params, successCallback) => {
    axios.patch(`/todos/${todo.id}.json`, params).then((response) => {
      setTodos(todos.map((p) => (p.id === response.data.id ? response.data : p)));
      if (successCallback) successCallback();
      setIsTodosShowVisible(false);
      navigate("/todos");
    });
  };

  const handleDestroy = (todo) => {
    axios.delete(`/todos/${todo.id}.json`).then(() => {
      setTodos(todos.filter((p) => p.id !== todo.id));
      setIsTodosShowVisible(false);
      navigate("/todos");
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">All Todos</h1>
        <div className="bg-white shadow-md rounded-md p-6 space-y-8">
          <section>
            <TodoNew onCreate={handleCreate} />
          </section>
          <section>
            <TodoIndex categoryId="all" todos={todos} onShow={handleShow} />
          </section>
        </div>

        <Modal show={isTodosShowVisible} onClose={() => setIsTodosShowVisible(false)}>
          <TodosShow todo={currentTodo} onUpdate={handleUpdate} onDestroy={handleDestroy} />
        </Modal>
      </div>
    </div>
  );
}
