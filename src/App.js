import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";

export default function () {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}
