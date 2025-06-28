import React, { useState } from 'react';


import '../App.css';

function Formrating() {
  const [reviews, setReviews] = useState([]);
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !text || !rating || !category) {
      alert('Please fill all fields');
      return;
    }

    const newReview = {
      username,
      text,
      rating: parseInt(rating),
      category, 
    };

    setReviews([newReview, ...reviews]);

    
    setUsername('');
    setText('');
    setRating('');
    setCategory('');
    setEmail('');
  };

  return (
    <div className="app-container">
      <h1> Review Form</h1>
      <form className="review-form" onSubmit={handleSubmit}>

        <input type="text" placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="Enter category (e.g. Electronics, workers)"value={category}onChange={(e) => setCategory(e.target.value)}/>
        <textarea placeholder="Write your review"value={text}onChange={(e) => setText(e.target.value)}
        ></textarea>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select Rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Star{num > 1 ? 's' : ''}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>

      <div className="review-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3>{review.username}</h3>
            <p><strong>Category:</strong> {review.category}</p>
            <p>{review.text}</p>
            <p className="rating">Rating: {'⭐'.repeat(review.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formrating;