/**
 * tool
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * pages
 */
import Document from './pages/document';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/document" element={<Document />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
