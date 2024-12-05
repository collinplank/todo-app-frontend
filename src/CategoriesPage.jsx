import axios from "axios";
import { useState, useEffect } from "react";
import { CategoryIndex } from "./CategoryIndex";
import { CategoryNew } from "./CategoryNew";
// import { CategoriesShow } from "./CategoriesShow";

export function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  //   const [isCategoriesShowVisible, setIsCategoriesShowVisible] = useState(false);
  //   const [currentCategory, setCurrentCategory] = useState({});

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

  //   const handleShow = (category) => {
  //     setIsCategoriesShowVisible(true);
  //     setCurrentCategory(category);
  //   };

  useEffect(handleIndex, []);

  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <CategoryNew onCreate={handleCreate} />
        <CategoryIndex categories={categories} />
      </div>
    </main>
  );
}
