import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PublicLayout from "./layouts/PublicLayout";
import NewVideoPage from "./pages/NewVideoPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/new-video" element={<NewVideoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
