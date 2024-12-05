import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { Modal } from "./Modal";
import { TodoDetails } from "./TodoDetails";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US"; // Import locale directly
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import parseISO from "date-fns/parseISO"; // Add this import

const locales = {
  "en-US": enUS, // Use imported locale
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const categoryColors = {
  1: "#FDA4AF", // Personal
  2: "#93C5FD", // Work
  3: "#86EFAC", // Shopping
  4: "#FCD34D", // Health
  5: "#C4B5FD", // Other
};

export function CalendarPage() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [categories, setCategories] = useState([
    { id: 1, name: "Red" },
    { id: 2, name: "Blue" },
    { id: 3, name: "Green" },
    { id: 4, name: "Yellow" },
    { id: 5, name: "Purple" },
  ]);

  useEffect(() => {
    axios.get("/todos.json").then((response) => {
      console.log("API Response:", response.data); // Debug response format
      setTodos(response.data);
    });
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedTodo(event.resource);
    setIsModalOpen(true);
  };

  const handleUpdate = (todo, params) => {
    // Add todo.user_id to params if needed by backend
    const updatedParams = {
      ...params,
      user_id: todo.user_id,
    };

    axios
      .patch(`/todos/${todo.id || todo.user_id}.json`, updatedParams)
      .then((response) => {
        console.log("Update Response:", response.data); // Debug update response
        setTodos(
          todos.map((t) => (t.id === response.data.id ? response.data : t))
        );
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error updating todo:", error.response?.data || error);
      });
  };

  const events = todos.map((todo) => {
    return {
      title: todo.title,
      start: parseISO(todo.deadline),
      end: parseISO(todo.deadline),
      allDay: true,
      resource: {
        ...todo,
        id: todo.id || todo.user_id,
      },
      backgroundColor: categoryColors[todo.category_id] || "#CBD5E1",
    };
  });

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Calendar View</h1>
        <div
          className="bg-white p-6 rounded-lg shadow-lg"
          style={{ height: "80vh" }}
        >
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={handleSelectEvent}
            views={["month", "week", "day"]}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: event.backgroundColor,
                border: "none",
              },
            })}
          />
        </div>
      </div>

      {isModalOpen && selectedTodo && (
        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <TodoDetails
            todo={selectedTodo}
            onUpdate={handleUpdate}
            availableCategories={categories}
          />
        </Modal>
      )}
    </div>
  );
}
