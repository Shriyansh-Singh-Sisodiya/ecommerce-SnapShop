import { useState, useEffect } from "react";
import React from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    console.log(form);
  };

  useEffect(() => {
    document.title = "Contact | Snap-Shop";
  }, []);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <div className="mb-3">
              <input
                name="name"
                onChange={handleChange}
                value={form.name}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                onChange={handleChange}
                value={form.message}
                className="form-control"
                placeholder="Type your message"
                rows="4"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
