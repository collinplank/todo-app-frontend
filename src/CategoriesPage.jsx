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

  useEffect(handleIndex, []);

  return (
    <main className="min-h-screen pt-32 bg-gradient-to-r from-[#1a1c2e] via-[#2d1b44] to-[#1a1c2e] relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-blue-500/5 to-transparent pointer-events-none" />

      {/* Content container */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white/90 rounded-xl p-8 shadow-2xl border border-white/10">
          <div className="relative space-y-6">
            <h1
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-gradient-x drop-shadow-[0_0_35px_rgba(168,85,247,0.6)] relative pb-2"
              style={{
                backgroundSize: "300% 300%",
                animation: "gradient 6s ease infinite",
                filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))",
                WebkitTextStroke: "1px rgba(255,255,255,0.1)",
              }}
            >
              Categories
            </h1>
            <CategoryNew onCreate={handleCreate} />
            <CategoryIndex categories={categories} onShow={handleShow} />
          </div>
        </div>
      </div>
    </main>
  );
}
