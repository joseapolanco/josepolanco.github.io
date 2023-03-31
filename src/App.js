import "./App.css";
import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";

import HomePage from "./components/Pages/HomePage/HomePage";
import LoadingPage from "./components/Pages/LoadingPage/LoadingPage";

const pages = [
  ({ style }) => (
    <animated.div className="div-anim" style={{ ...style }}>
      <LoadingPage />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="div-anim" style={{ ...style }}>
      <HomePage />
    </animated.div>
  ),
];

function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage((state) => state + 1);
    }, 3000);

    // return a cleanup function to clear the timer
    return () => {
      clearTimeout(timer);
    };
  }, []); // empty dependency array to only run once

  const transRef = useSpringRef();
  const transitions = useTransition(page, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [page]);

  return (
    <div className="app">
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
    </div>
  );
}

export default App;
