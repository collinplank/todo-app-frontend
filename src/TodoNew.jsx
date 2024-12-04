export function TodoNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Todo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Deadline: <input name="deadline" type="text" />
        </div>
        <div>
          Completed: <input name="completed" type="boolean" />
        </div>
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
}
