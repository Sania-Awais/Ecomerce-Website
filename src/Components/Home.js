import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1 style={{ textAlign: 'center'}}>Welcome to Our ECommerce Store</h1>
      <p style={{ textAlign: 'justify', margin: '0 auto', maxWidth: '400px' }}> Enjoy a seamless shopping experience with our responsive design and modern UI/UX. Explore a wide range of products displayed dynamically, ensuring you have the latest and best choices. Navigate effortlessly between pages and experience the future of online shopping today!</p>
      <p style={{ textAlign: 'center'}}>Find the best products here.</p>
    </div>
  );
}

export default Home;
