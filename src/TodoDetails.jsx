import { useState } from "react";

export function TodoDetails({ todo, onUpdate, availableCategories }) {
  const categoryColors = {
    1: "#FDA4AF",
    2: "#93C5FD",
    3: "#86EFAC",
    4: "#FCD34D",
    5: "#C4B5FD",
  };

  const handleCategoryChange = (e) => {
    onUpdate(todo, {
      category_id: parseInt(e.target.value),
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{todo.title}</h2>
      <p className="text-gray-600 mb-4">{todo.description}</p>
      <div className="mb-4">
        <p className="font-semibold mb-2">
          Category: {todo.category_name} (ID: {todo.category_id})
        </p>
        <label className="font-semibold block mb-2">Category Color:</label>
        <select
          value={todo.category_id}
          onChange={handleCategoryChange}
          className="w-full p-2 border rounded-md mb-2"
          style={{ backgroundColor: categoryColors[todo.category_id] }}
        >
          {availableCategories.map((category) => (
            <option
              key={category.id}
              value={category.id}
              style={{ backgroundColor: categoryColors[category.id] }}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <p className="mb-2">
        <span className="font-semibold">Deadline:</span> {todo.deadline}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Status:</span>{" "}
        <span className={todo.completed ? "text-green-600" : "text-red-600"}>
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </p>
    </div>
  );
}
