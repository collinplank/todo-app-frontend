import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TodosShow } from "./TodosShow";
import { TodoIndex } from "./TodoIndex";
import { TodoNew } from "./TodoNew";
import { Modal } from "./Modal";
import { useEffect } from "react";

export function TodoPage() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [isTodosShowVisible, setIsTodosShowVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    axios.get("/todos.json").then((response) => {
      setAllTodos(response.data);
    });
  }, []);

  const handleCreate = (params) => {
    axios.post("/todos.json", params).then((response) => {
      console.log(response.data);
      setAllTodos([...allTodos, response.data]);
    });
  };

  const handleShow = (todo) => {
    console.log("handleShow");
    setIsTodosShowVisible(true);
    setCurrentTodo(todo);
  };

  const handleUpdate = (todo) => {
    console.log("handleUpdate", todo);
    axios.patch(`/todos/${todo.id}.json`).then((response) => {
      setAllTodos([...allTodos, response.data]);
      setIsTodosShowVisible(false);
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
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-r from-[#1a1c2e] via-[#2d1b44] to-[#1a1c2e] relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-blue-500/5 to-transparent pointer-events-none" />

      {/* Content container */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Content Wrapper */}
        <div className="bg-white/90 rounded-xl p-8 shadow-2xl border border-white/10">
          {/* New Todo Form */}
          <section className="mb-8">
            <TodoNew onCreate={handleCreate} />
          </section>

          {/* Todo List */}
          <section>
            <TodoIndex todos={allTodos} onShow={handleShow} />
          </section>
        </div>
        <Modal show={isTodosShowVisible} onClose={() => setIsTodosShowVisible(false)}>
          <TodosShow todo={currentTodo} onUpdate={handleUpdate} onDestroy={handleDestroy} />
        </Modal>
      </div>
    </div>
  );
}
