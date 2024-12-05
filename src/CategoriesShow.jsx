import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { TodoIndex } from "./TodoIndex";
import { TodoNew } from "./TodoNew";

export function CategoriesShow() {
  const category = useLoaderData();
  const navigate = useNavigate();

  const handleCreate = (params, successCallback) => {
    axios.post("/todos.json", params).then((response) => {
      //   setTodos([...todos, response.data]);
      //   successCallback();
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
            <TodoIndex todos={category.todos} />
          </section>
        </div>
      </div>
    </div>
  );
}
