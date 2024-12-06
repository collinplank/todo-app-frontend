import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { TodosShow } from "./TodosShow";
import { TodoIndex } from "./TodoIndex";
import { TodoNew } from "./TodoNew";
import { Modal } from "./Modal";

export function CategoriesShow() {
  const category = useLoaderData();
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [isTodosShowVisible, setIsTodosShowVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleCreate = (params) => {
    axios.post("/todos.json", params).then(() => {
      //   setTodos([...todos, response.data]);
      //   successCallback();
      navigate(`/categories/${category.id}`);
    });
  };

  const handleShow = (todo) => {
    console.log("handleShow");
    setIsTodosShowVisible(true);
    setCurrentTodo(todo);
  };

  const handleUpdate = (todo, params, successCallback) => {
    axios.patch(`/todos/${todo.id}.json`, params).then((response) => {
      //   setTodos(
      //     todos.map((p) => {
      //       return p.id === response.data.id ? response.data : p;
      //     })
      //   );
      //   successCallback();
      navigate(`/categories/${category.id}`);
      setIsTodosShowVisible(false);
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-r from-[#1a1c2e] via-[#2d1b44] to-[#1a1c2e] relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-blue-500/5 to-transparent pointer-events-none" />

      {/* Content container */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Category Title */}
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-300 pb-2">
          {category.name}
        </h1>

        {/* Content Wrapper */}
        <div className="bg-white/90 rounded-xl p-8 shadow-2xl border border-white/10">
          {/* New Todo Form */}
          <section className="mb-8">
            <TodoNew defaultCategoryId={category.id} onCreate={handleCreate} />
          </section>

          {/* Todo List */}
          <section>
            <TodoIndex todos={category.todos} onShow={handleShow} />
          </section>
        </div>

        <Modal
          show={isTodosShowVisible}
          onClose={() => setIsTodosShowVisible(false)}
        >
          <TodosShow todo={currentTodo} onUpdate={handleUpdate} />
        </Modal>
      </div>
    </div>
  );
}
