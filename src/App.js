import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Hero";
import Coursedetils from "./Coursedetils";
import Perticularcourse from "./Perticularcourse";
import Modules from "./Modules";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Blogs from "./Blogs";
import PerticularBlogs from "./PerticularBlogs";
import AdminLayout from "./Admin/AdminLayout/AdminLayout";
import ContactUs from "./Admin/ContactUs/ContactUs";
import AdminBlogs from "./Admin/Blogs/Blogs";
import Auth from "./Admin/Auth";
import Addblogs from "./Admin/Blogs/Addblogs";

function App() {
  return (
    <>
      <div className="whatsapp-icon">
        <a
          href="https://wa.me/9822666114?text=Hello, I'm interested."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/allcourses" element={<Coursedetils />} />
        <Route path="/perticularcourse" element={<Perticularcourse />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/PerticularBlogs" element={<PerticularBlogs />} />
        <Route path="/admin-login" element={<Auth />} />

        {/* Admin Pages */}
        <Route element={<AdminLayout />}>
          <Route path="/admin-contact" element={<ContactUs />} />
          <Route path="/admin-blogs" element={<AdminBlogs />} />
          <Route path="/admin-addblogs" element={<Addblogs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
