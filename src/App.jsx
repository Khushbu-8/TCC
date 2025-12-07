import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import { MainLayout } from "./components/Layout";

// Pages
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUs";
import GalleryPage from "./Pages/Gallery";
import FAQs from "./Pages/FAQs";
import { ScrollUp } from "./components/UI";
import ProductsPage from "./Pages/Product";

// PRODUCT CATEGORY PAGES
import Cookware from "./Pages/Product/Cookware";
import Bakeware from "./Pages/Product/Bakeware";
import ElectricalAppliance from "./Pages/Product/ElectricalAppliance";
import SpecialtyCoatings from "./Pages/Product/SpecialtyCoatings";
import UVCoatings from "./Pages/Product/UVCoatings";
import IndustrialCoatings from "./Pages/Product/IndustrialCoatings";
import BlogPage from "./Pages/Blog";
import ContactUsPage from "./Pages/ConactUs";
import BlogDetail from "./components/Blog/BlogDetailsSection";
import PrivacyPolicyPage from "./Pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <ScrollUp />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* HOME */}
          <Route index element={<Home />} />
          {/* ABOUT */}
          <Route path="about" element={<AboutUsPage />} />
          {/* PRODUCTS MAIN PAGE */}
          <Route path="products">
            <Route index element={<ProductsPage />} />

            {/* PRODUCT CATEGORY ROUTES */}
            <Route path="cookware" element={<Cookware />} />
            <Route path="bakeware" element={<Bakeware />} />
            <Route
              path="electrical-appliance"
              element={<ElectricalAppliance />}
            />
            <Route path="specialty-coatings" element={<SpecialtyCoatings />} />
            <Route path="uv-coatings" element={<UVCoatings />} />
            <Route
              path="industrial-coatings"
              element={<IndustrialCoatings />}
            />
          </Route>
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogDetail />} /> {/* 👈 ADD THIS */}
          <Route path="contact" element={<ContactUsPage />} />
          {/* FAQS */}
          <Route path="faqs" element={<FAQs />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
