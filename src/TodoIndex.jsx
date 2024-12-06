import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export function TodoIndex({ categoryId, todos: initialTodos, onShow }) {
  const [todos, setTodos] = useState([]);

  // On mount or when initialTodos/categoryId changes, load the saved order for this category if available
  useEffect(() => {
    const savedOrder = localStorage.getItem(`todosOrder_${categoryId}`);
    if (savedOrder) {
      // savedOrder is an array of todo IDs
      const savedIds = JSON.parse(savedOrder);

      // Rebuild the todos array from initialTodos using the saved order
      const ordered = savedIds.map((id) => initialTodos.find((todo) => todo.id === id)).filter(Boolean); // filter out any todos that might no longer exist

      // If there are any new todos not in savedIds (e.g., newly created), append them
      const missing = initialTodos.filter((t) => !ordered.some((o) => o.id === t.id));

      setTodos([...ordered, ...missing]);
    } else {
      // If no saved order, just use the initialTodos
      setTodos(initialTodos);
    }
  }, [initialTodos, categoryId]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside the list or in the same spot
    if (!destination || destination.index === source.index) {
      return;
    }

    const reorderedTodos = reorder(todos, source.index, destination.index);
    setTodos(reorderedTodos);

    // Save only the IDs in localStorage for order persistence
    const ids = reorderedTodos.map((todo) => todo.id);
    localStorage.setItem(`todosOrder_${categoryId}`, JSON.stringify(ids));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Todos ({todos.length})</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo-list">
          {(provided) => (
            <div className="grid grid-cols-1 gap-6" ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={`bg-white shadow-md rounded-md p-6 ${snapshot.isDragging ? "bg-blue-50" : ""}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <h2 className="text-xl font-semibold">{todo.title}</h2>
                      <p className="mt-2 text-gray-600">{todo.description}</p>
                      <p className="mt-2 text-gray-500">
                        Deadline: <span className="font-medium">{todo.deadline}</span>
                      </p>
                      <p className="mt-2 text-gray-500">{todo.category_id}</p>
                      <p className="mt-2">
                        Status:{" "}
                        <span className={`${todo.completed ? "text-green-600" : "text-red-600"} font-medium`}>
                          {todo.completed ? "Completed" : "Pending"}
                        </span>
                      </p>
                      <button
                        onClick={() => onShow(todo)}
                        className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        More Information
                      </button>
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
