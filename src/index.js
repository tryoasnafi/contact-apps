import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";
import "./styles.css";


const app = createRoot(document.getElementById("app"));

app.render(<ContactApp />);
