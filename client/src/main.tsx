import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set title and meta description
document.title = "V++ Technology | Innovation in Software & Gaming";
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "V++ Technology is a forward-thinking tech company specialized in software development and gaming innovation through our SixOps Development division.";
document.head.appendChild(metaDescription);

createRoot(document.getElementById("root")!).render(<App />);
