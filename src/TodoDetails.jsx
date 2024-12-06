export function TodoDetails({ todo, availableCategories }) {
  const categoryColors = {
    1: "#FDA4AF", // Soft Red
    2: "#93C5FD", // Light Blue
    3: "#86EFAC", // Light Green
    4: "#FCD34D", // Yellow
    5: "#C4B5FD", // Purple
    6: "#F87171", // Salmon Red
    7: "#60A5FA", // Bright Blue
    8: "#4ADE80", // Bright Green
    9: "#FBBF24", // Orange Yellow
    10: "#A78BFA", // Medium Purple
    11: "#FB7185", // Pink
    12: "#38BDF8", // Sky Blue
    13: "#34D399", // Emerald
    14: "#F59E0B", // Amber
    15: "#8B5CF6", // Violet
    16: "#EC4899", // Hot Pink
    17: "#0EA5E9", // Deep Sky Blue
    18: "#10B981", // Teal
    19: "#D97706", // Dark Orange
    20: "#6366F1", // Indigo
  };

  const backgroundColor = categoryColors[todo.category_id] || "#CBD5E1"; // Fallback color

  // Find category name from availableCategories
  const categoryName =
    availableCategories?.find((cat) => cat.id === todo.category_id)?.name ||
    "Uncategorized";

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{todo.title}</h2>
      <p className="text-gray-600 mb-4">{todo.description}</p>
      <div className="mb-4">
        <div className="p-2 rounded-md mb-2" style={{ backgroundColor }}>
          <p className="font-semibold">Category: {categoryName}</p>
        </div>
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
