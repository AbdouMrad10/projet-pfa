import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import DashboardRoutes from "./routes/DashboardRoutes";
function App() {


  return (
    <>
    
     <Router>
      <DashboardRoutes /> {/* Use the AppRoutes component here */}
    </Router>
    </>
  )
}

export default App
