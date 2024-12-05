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

export function CalendarPage() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    axios.get("/todos.json").then((response) => {
      setTodos(response.data);
    });
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedTodo(event.resource);
    setIsModalOpen(true);
  };

  const events = todos.map((todo) => {
    const date = parseISO(todo.deadline);
    return {
      title: todo.title,
      start: date,
      end: date,
      allDay: true,
      resource: todo,
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
          />
        </div>
      </div>

      {isModalOpen && selectedTodo && (
        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <TodoDetails todo={selectedTodo} />
        </Modal>
      )}
    </div>
  );
}
