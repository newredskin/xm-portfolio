// third-party library imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// local imports
import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDtails from "./pages/ProjectDetails";

function App() {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/projects/:projectName"
                element={<ProjectDtails />}
              />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 4000,
            iconTheme: {
              primary: "rgb(4, 47, 46)",
              secondary: "rgba(231 229 228)",
            },
          },
          error: {
            duration: 8000,
          },
          style: {
            fontSize: "14px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "rgba(255 247 237 / 0.9)",
            color: "rgb(4, 47, 46)",
          },
        }}
      />
    </>
  );
}

export default App;
