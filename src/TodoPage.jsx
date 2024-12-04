import { TodoIndex } from "./TodoIndex";

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

  return (
    <main>
      <TodoIndex todos={todos} />
    </main>
  );
}
