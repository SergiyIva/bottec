import {useState} from "react";
import {MainPage} from "pages/MainPage";
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider,} from "react-router-dom";
import {ChatBotsPage} from "pages/ChatBotsPage";
import {Header} from "components/Header";
import {Footer} from "components/Footer";
import {HeaderPageState} from "components/Header/Header.types";
import {urlPageStateMap} from "components/Header/Header";
import {WebApp} from "./pages/WebApp/WebApp.tsx";

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
        <Route path="webapps" element={<WebApp />} />
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
