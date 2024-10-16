// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import MainLayout from './pages/layout';
import HomePage from './pages/home';
import ProductCreatePage from './pages/product/create/index';
import ProductDeletePage from './pages/product/delete/index';
import ProductEditPage from './pages/product/edit/index';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/create" element={<ProductCreatePage />} />
          <Route path="/product/delete/:id" element={<ProductDeletePage />} />
          <Route path="/product/edit/:id" element={<ProductEditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
