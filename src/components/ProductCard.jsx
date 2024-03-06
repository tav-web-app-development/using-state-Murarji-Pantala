import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [productCount, setProductCount] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const numImages = product.imageUrls.length;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % numImages);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + numImages) % numImages);
  };

  const handleAddToCartClick = () => {
    const newProductCount = productCount + 1;
    setProductCount(newProductCount);
    alert(`You have ${newProductCount} item(s) added to your cart`);
  };

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex]}
          alt={product.name}
        />
        <button onClick={handleNextImage} disabled={numImages === 1}>
          Next
        </button>
        <button onClick={handlePreviousImage} disabled={numImages === 1}>
          Previous
        </button>
      </div>

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button>Show Description</button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      {!product.isInStock && <p>The product is out of stock</p>}
    </>
  );
}
