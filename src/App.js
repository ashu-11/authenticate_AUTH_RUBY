import "./styles.css";
import { Navbar } from "./components/Navbar";
import RoutePath from "./routes/RoutePath";
export default function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <RoutePath />
      </>
    </div>
  );
}
