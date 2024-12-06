import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      window.location.href = "/";
    });
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
    >
      Logout
    </a>
  );
}
