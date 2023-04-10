import React from "react";
import HeroSection from "../component/herosection/HeroSection";
import Chapter from "../component/chapter/Chapter";
import Feature from "../component/feature/Feature";

const Blog = () => {
  return (
    <div style={{ backgroundImage: "none" }}>
      <HeroSection />
      <Chapter />
      <Feature />
    </div>
  );
};

export default Blog;
