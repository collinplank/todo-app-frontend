import { TodoIndex } from "./TodoIndex";
import { TodoNew } from "./TodoNew";

export function TodoPage() {
  const todos = [
    {
      user_id: 1,
      category_id: 1,
      title: "Make my bed",
      desctiption: "Make bed look nice",
      deadline: "After I wake up",
      completed: true,
    },

    {
      user_id: 2,
      category_id: 2,
      title: "Wash the dishes",
      desctiption: "Put dishes in dishwasher",
      deadline: "After lunch",
      completed: true,
    },
  ];

  const handleCreate = () => {
    console.log("handleCreate");
  };

  return (
    <main>
      <TodoNew onCreate={handleCreate} />
      <TodoIndex todos={todos} />
    </main>
  );
}
