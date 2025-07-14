import React, { useState } from "react";
import "../components/FeedbackForm.css"
import Header from '../components/Header'
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    rating: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.rating) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Submitted Data:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      course: "",
      rating: "",
      comments: "",
    });
  };

  return (
    <>
    <Header />
    <div className="feedback-container">
      <h2 className="form-title">📋 Student Feedback Form</h2>

      {submitted && (
        <div className="success-message">✅ Thank you for your feedback!</div>
      )}

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            name="course"
            placeholder="React, JavaScript, etc."
            value={formData.course}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Rating *</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Needs Improvement</option>
            <option value="1">⭐ Poor</option>
          </select>
        </div>

        <div className="form-group">
          <label>Additional Comments</label>
          <textarea
            name="comments"
            placeholder="Your suggestions or feedback..."
            value={formData.comments}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div className="form-actions">
          <button type="submit">Submit Feedback</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default FeedbackForm;

