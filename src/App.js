import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/common/loader/Loader";
import { useSelector } from "react-redux";
const HomePage = lazy(() => import("./pages/home/Home"));
const AboutPage = lazy(() => import("./pages/about/About"));

function App() {
  // const isLoading = true
  const {
    loading: { isLoading },
  } = useSelector((state) => state);

console.log({isLoading})

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {isLoading && <Loader loading={isLoading} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
