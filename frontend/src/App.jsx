import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import DashboardRoutes from "./routes/DashboardRoutes";
import WebRoutes from "./routes/WebRoutes";
import { ConfigProvider } from "antd";
function App() {


  return (
    <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9254de', 
          colorBgBase: '#ffffff',
          colorSiderBg: 'blue',// Changer la couleur principale
          colorBgContainer: "#fff", // Couleur de fond
          borderRadius: 15, // Bordures arrondies
          colorText: "#384551", // Texte
          colorSiderBg :'#9254de', 
          colorbg : '#9254de', 
          // fontFamily: ['BlinkMacSystemFont' ,'Arial'] // Police
          
          },
      }}
    >

        <Router>
            <DashboardRoutes /> 
            <WebRoutes />
        </Router>
    </ConfigProvider>
    </>
  )
}

export default App
