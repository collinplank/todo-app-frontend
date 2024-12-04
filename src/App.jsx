import axios from "axios";
import { Header } from "./Header";
import { TodoPage } from "./TodoPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <TodoPage />
      <Footer />
    </div>
  );
}

export default App;
