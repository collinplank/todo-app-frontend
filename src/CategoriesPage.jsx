import axios from "axios";
import { useState, useEffect } from "react";
import { CategoryIndex } from "./CategoryIndex";
import { CategoryNew } from "./CategoryNew";
import { useNavigate } from "react-router-dom";

export function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleIndex = () => {
    axios.get("/categories.json").then((response) => {
      setCategories(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    axios.post("/categories.json", params).then((response) => {
      setCategories([...categories, response.data]);
      successCallback();
    });
  };

  const handleShow = (category) => {
    navigate(`/categories/${category.id}`);
  };

  const handleUpdate = (category, params) => {
    axios.patch(`/categories/${category.id}.json`, params).then((response) => {
      setCategories(
        categories.map((c) => (c.id === response.data.id ? response.data : c))
      );
    });
  };

  const handleDelete = (category) => {
    axios.delete(`/categories/${category.id}.json`).then(() => {
      setCategories(categories.filter((c) => c.id !== category.id));
    });
  };

  useEffect(handleIndex, []);

  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <CategoryNew onCreate={handleCreate} />
        <CategoryIndex
          categories={categories}
          onShow={handleShow}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
}
