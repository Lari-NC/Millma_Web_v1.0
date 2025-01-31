import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageTemplate from "./pages/template/PageTemplate";
// import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
        </Route>
      </Routes>
      {/* <ToastContainer />  */}
    </BrowserRouter>
  );
}

export default App;
