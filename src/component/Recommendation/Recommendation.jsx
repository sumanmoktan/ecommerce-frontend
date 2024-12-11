import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from "../../server"; 
import { useParams } from 'react-router-dom';

const Recommendation = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { userId } = useParams(); // Correctly calling useParams
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(
          `${server}/api/v1/product/${userId}`
        ); // Replace with your API endpoint
        setRecommendations(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) { // Ensure userId exists before making the API call
      fetchRecommendations();
    }
  }, [userId]); // Add userId as a dependency to re-run when it changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="recommendations">
      <h2>Recommended for You</h2>
      <ul>
        {recommendations.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
