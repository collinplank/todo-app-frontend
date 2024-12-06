import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export function CategoryIndex({ categories: initialCategories, onShow, onUpdate, onDelete }) {
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");

  // Load order from local storage and apply it to initialCategories
  useEffect(() => {
    const savedOrder = localStorage.getItem("categoriesOrder");
    if (savedOrder) {
      const savedIds = JSON.parse(savedOrder);
      // Rebuild categories in the saved order
      const ordered = savedIds.map((id) => initialCategories.find((cat) => cat.id === id)).filter(Boolean); // remove any that no longer exist

      // Append any new categories that aren't in savedIds
      const missing = initialCategories.filter((cat) => !ordered.some((o) => o.id === cat.id));

      setCategories([...ordered, ...missing]);
    } else {
      // No saved order, just use initialCategories
      setCategories(initialCategories);
    }
  }, [initialCategories]);

  const handleEdit = (category) => {
    setEditingId(category.id);
    setEditName(category.name);
  };

  const handleSubmit = (category) => {
    onUpdate(category, { name: editName });
    setEditingId(null);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    // If dropped outside the list or no actual change in position
    if (!destination || destination.index === source.index) return;

    const reordered = reorder(categories, source.index, destination.index);
    setCategories(reordered);
    // Save order to local storage
    const ids = reordered.map((cat) => cat.id);
    localStorage.setItem("categoriesOrder", JSON.stringify(ids));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Categories ({categories.length})</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="category-list">
          {(provided) => (
            <div className="grid grid-cols-1 gap-6" ref={provided.innerRef} {...provided.droppableProps}>
              {categories.map((category, index) => (
                <Draggable key={category.id} draggableId={String(category.id)} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={`bg-white shadow-md rounded-md p-6 ${snapshot.isDragging ? "bg-blue-50" : ""}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {editingId === category.id ? (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                          />
                          <button
                            onClick={() => handleSubmit(category)}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <h2 className="text-xl font-semibold">{category.name}</h2>
                          <div className="mt-4 flex gap-2">
                            <button
                              onClick={() => onShow(category)}
                              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                            >
                              Todos
                            </button>
                            <button
                              onClick={() => handleEdit(category)}
                              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm("Are you sure you want to delete this category?")) {
                                  onDelete(category);
                                }
                              }}
                              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                            >
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
