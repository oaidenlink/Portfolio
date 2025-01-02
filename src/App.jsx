import "./App.scss";

import Fre from "./assets/TxtFre.json";
import Eng from "./assets/TxtEng.json";

import Layout from "./composantes/Layout";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Accueil.jsx";
import Projects from "./pages/Projects.jsx";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { useState } from "react";

const App = () => {
  const [isEng, setIsEng] = useState(false); 
  var language;
  
  if(isEng == false) {
    language = Fre;
  } else if(isEng == true) {
    language = Eng;
  }

  console.log(language.Home);

  const routes = [
    {
      path: "",
      element: <Layout setLangue={setIsEng} lang={isEng} language={language}/>,
      children: [
        {
          index: true,
          element: <Navigate to="/accueil" replace />,
        },
        {
          path: "accueil",
          element: <Home lang={language.Home}/>,
        },
        {
          path: "projects",
          element: <Projects lang={language.Projects}/>,
        },
        {
          path: "about",
          element: <About lang={language.About}/>,
        },
        {
          path: "contact",
          element: <Contact lang={language.Contact}/>,
        },
        {
          path: "*",
          element: <Navigate to="/accueil" replace />,
        },
      ]
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
