import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/ServicePage";
// import Service from "./pages/Service";
// import ServicePage from "./pages/Service";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import SchoolPage from "./pages/SchoolPage";
import ResourcesPage from "./pages/ResourcesPage";
import HighSchoolPage from './pages/HighSchoolPage';
import AesculaPage from './pages/AesculaPage';
// import About from "./pages/About";
// import Service from "./pages/Service";
// import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <AnimatePresence mode="wait" ease="easeInOut">
      <Analytics />
      <Router>
        <div>
          <ScrollToTop />
          <div className="sticky top-0 z-50 w-full">
            <Navbar />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              }
            />
            <Route
              path="/service/:id"
              element={
                <PageTransition>
                  <ServicePage />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="/uni"
              element={
                <PageTransition>
                  <SchoolPage />
                </PageTransition>
              }
            />
            <Route
              path="/resources"
              element={
                <PageTransition>
                  <ResourcesPage />
                </PageTransition>
              }
            />
            <Route path="/high-school" element={<HighSchoolPage />} />
            <Route
              path="/aescula"
              element={
                <PageTransition>
                  <AesculaPage />
                </PageTransition>
              }
            />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
          <Footer classData="bg-footer" />
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;