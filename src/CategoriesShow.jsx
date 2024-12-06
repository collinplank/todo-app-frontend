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

  const handleUpdate = (todo, params) => {
    axios.patch(`/todos/${todo.id}.json`, params).then(() => {
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

  const handleDestroy = (todo) => {
    console.log("handleDestroy", todo);
    axios.delete(`/todos/${todo.id}.json`).then(() => {
      setTodos(todos.filter((p) => p.id !== todo.id));
      setIsTodosShowVisible(false);
      navigate(`/categories/${category.id}`);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Category Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{category.name}</h1>

        {/* Content Wrapper */}
        <div className="bg-white shadow-md rounded-md p-6 space-y-8">
          {/* New Todo Form */}
          <section>
            <TodoNew defaultCategoryId={category.id} onCreate={handleCreate} />
          </section>

          {/* Todo List */}
          <section>
            <TodoIndex categoryId={category.id} todos={category.todos} onShow={handleShow} />
          </section>
        </div>
        <Modal show={isTodosShowVisible} onClose={() => setIsTodosShowVisible(false)}>
          <TodosShow todo={currentTodo} onUpdate={handleUpdate} onDestroy={handleDestroy} />
        </Modal>
      </div>
    </div>
  );
}
