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

export function CalendarPage() {
  const [todos, setTodos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    // Fetch todos
    axios.get("/todos.json").then((response) => {
      setTodos(response.data);
    });

    // Fetch categories
    axios.get("/categories.json").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedTodo(event.resource);
    setIsModalOpen(true);
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
    <div className="min-h-screen pt-24 bg-gradient-to-r from-[#1a1c2e] via-[#2d1b44] to-[#1a1c2e] relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-blue-500/5 to-transparent pointer-events-none" />

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-300 pb-2">
          Calendar
        </h1>
        <div
          className="bg-white/90 backdrop-filter rounded-xl p-8 shadow-2xl border border-white/10"
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
          <TodoDetails todo={selectedTodo} availableCategories={categories} />
        </Modal>
      )}
    </div>
  );
}
