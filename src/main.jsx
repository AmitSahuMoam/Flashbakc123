import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import CartProvider from "./context/CartProvider";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Photos from "./pages/Photos";

import "./sass/main.scss";
import PhotoStories from "./pages/PhotoStories";
import VideoStories from "./pages/VideoStories";
import VideoStoriesSingle from "./pages/VideoStoriesSingle";
import Photostoriessingle from "./pages/Photostoriessingle";
import Aboutus from "./pages/Aboutus";
import Testimonials from "./pages/Testimonials";
import AdminPhotoStories from "./pages/admin/PhotoStories";
import PhotoStoryCreate from "./pages/admin/PhotoStories/create";
import AdminVideoStories from "./pages/admin/VideoStories";
import CreateVideoStory from "./pages/admin/VideoStories/create";
import EditPhotoStory from "./pages/admin/PhotoStories/edit";
import EditVideoStory from "./pages/admin/VideoStories/edit";
import TestimonialsAdmin from "./pages/admin/Testimonials";
import TestimonialCreate from "./pages/admin/Testimonials/create";
import TestimonialEdit from "./pages/admin/Testimonials/edit";
import Blogs from "./pages/Blogs";
import AdminBlogs from "./pages/admin/Blogs";
import CreateBlogs from "./pages/admin/Blogs/create";
import EditBlog from "./pages/admin/Blogs/edit";
import QuestionsList from "./pages/admin/QuestionsList/QuestionsList";
import QuestionCreate from "./pages/admin/QuestionsList/QuestionsCreate";
import QuestionEdit from "./pages/admin/QuestionsList/QuestionsEdit";
import AdminPhotoStoriesSingle from "./pages/admin/PhotoStoriesSingle";
import EditPhotoStorySingle from "./pages/admin/PhotoStoriesSingle/edit";
import PhotoStorySingleCreate from "./pages/admin/PhotoStoriesSingle/create";
import AdminVideoStoriesSingle from "./pages/admin/VideoStoriesSingle";
import EditVideoStorySingle from "./pages/admin/VideoStoriesSingle/edit";
import VideoStorySingleCreate from "./pages/admin/VideoStoriesSingle/create";
import Login from "./pages/Login";

function Layout({ children }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}

function RouteSwitch() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/cart" element={<Photos />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/photostories" element={<PhotoStories />} />
      <Route path="/videostories" element={<VideoStories />} />
      <Route path="/videostories/:id" element={<VideoStoriesSingle />} />
      <Route path="/photostories/:id" element={<Photostoriessingle />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/admin/photostories" element={<AdminPhotoStories />} />
      <Route path="/admin/photostories/create" element={<PhotoStoryCreate />} />
      <Route path="/admin/videoStories" element={<AdminVideoStories />} />
      <Route path="/admin/videoStories/create" element={<CreateVideoStory />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/admin/testimonials" element={<TestimonialsAdmin />} />
      <Route
        path="/admin/testimonials/create"
        element={<TestimonialCreate />}
      />
      <Route
        path="/admin/testimonials/edit/:id"
        element={<TestimonialEdit />}
      />
      <Route path="/admin/photostories/edit/:id" element={<EditPhotoStory />} />
      <Route path="/admin/videostories/edit/:id" element={<EditVideoStory />} />
      <Route path="/admin/blogs" element={<AdminBlogs />} />
      <Route path="/admin/blogs/create" element={<CreateBlogs />} />
      <Route path="/admin/blogs/edit/:id" element={<EditBlog />} />

      <Route path="/admin/questions" element={<QuestionsList />} />
      <Route path="/admin/questions/create" element={<QuestionCreate />} />
      <Route path="/admin/questions/edit/:id" element={<QuestionEdit />} />

      <Route path="/admin/photostoriessingle" element={<AdminPhotoStoriesSingle />} />
      <Route path="/admin/photostoriessingle/create" element={<PhotoStorySingleCreate />} />
      <Route path="/admin/photostoriessingle/edit/:id" element={<EditPhotoStorySingle />} />

      <Route path="/admin/videostoriessingle" element={<AdminVideoStoriesSingle />} />
      <Route path="/admin/videostoriessingle/create" element={<VideoStorySingleCreate />} />
      <Route path="/admin/videostoriessingle/edit/:id" element={<EditVideoStorySingle />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <RouteSwitch />
        </Layout>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
