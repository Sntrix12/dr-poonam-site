import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { areas } from "./data/areas.js";
import { resolveLegacyHash } from "./seo/routes.js";
import { BookingProvider } from "./components/Booking.jsx";
import Seo from "./components/Seo.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";
import AreaPage from "./pages/AreaPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

/**
 * The site used to run on hash URLs (#services-page, #service/pcos-management).
 * Anyone who bookmarked or linked one of those gets redirected to the real path
 * rather than a 404 — old inbound links keep whatever authority they have.
 */
function LegacyHashRedirect() {
  const navigate = useNavigate();
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = resolveLegacyHash(hash);
    if (target && target !== pathname) navigate(target, { replace: true });
  }, [hash, pathname, navigate]);

  return null;
}

/** New page, top of the page — except when following an in-page anchor. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BookingProvider>
      <Seo />
      <LegacyHashRedirect />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog" element={<BlogPage />} />

        {areas.map((area) => (
          <Route key={area.slug} path={`/${area.slug}`} element={<AreaPage slug={area.slug} />} />
        ))}

        {/* Tidy aliases for URLs people are likely to type or link. */}
        <Route path="/faq" element={<Navigate to="/faqs" replace />} />
        <Route path="/reviews" element={<Navigate to="/testimonials" replace />} />
        <Route path="/sitemap" element={<Navigate to="/services" replace />} />

        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BookingProvider>
  );
}
