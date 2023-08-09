import React, { useState } from "react";
import { MainPage } from "pages/MainPage";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ChatBotsPage } from "pages/ChatBotsPage";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { HeaderPageState } from "components/Header/Header.types";
import { urlPageStateMap } from "components/Header/Header";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        // path={"/" + getBasename(window.location.pathname)}
        path="/"
        element={<Root />}
      >
        <Route index element={<MainPage />} />
        <Route path="chatbots" element={<ChatBotsPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

const Root = () => {
  const [selectedPage, setSelectedPage] = useState<HeaderPageState>(
    urlPageStateMap[location.pathname as keyof typeof urlPageStateMap]
  );

  const onPageChange = (newPage: HeaderPageState) => {
    setSelectedPage(newPage);
  };
  return (
    <>
      <Header onPageChange={onPageChange} selectedPage={selectedPage} />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
