import React from "react";
import "./MenPage.css"; // Import the CSS file

const MenPage = () => {
  const dishes = [
    {
      name: "M Jaiswal Special Paneer Curry",
      description: "Rich and creamy paneer curry with authentic spices.",
      price: "₹250",
      img: "https://images.pexels.com/photos/9609842/pexels-photo-9609842.jpeg"
    },
    {
      name: "Jaiswal Thali",
      description: "A complete meal with rice, dal, vegetables, roti, and dessert.",
      price: "₹350",
      img: "https://images.pexels.com/photos/7351635/pexels-photo-7351635.jpeg"
    },
    {
      name: "M Jaiswal Sweet Lassi",
      description: "Refreshing yogurt-based sweet drink, chilled and tasty.",
      price: "₹120",
      img: "https://images.pexels.com/photos/2110927/pexels-photo-2110927.jpeg"
    },
    {
      name: "Crispy Samosas & Spicy Chaat",
      description: "Golden fried samosas served with tangy, spicy chaat.",
      price: "₹80",
      img: "https://images.pexels.com/photos/10648394/pexels-photo-10648394.jpeg"
    },
    {
      name: "Pan Seared Sea Bass",
      description: "Tender fish, perfectly seasoned and cooked to golden perfection.",
      price: "₹600",
      img: "https://images.pexels.com/photos/3645127/pexels-photo-3645127.jpeg"
    },
    {
  name: "Garlic Butter Grilled Prawns",
  description: "Succulent prawns grilled to perfection with garlic butter and herbs.",
  price: "₹580",
  img: "https://images.pexels.com/photos/6378664/pexels-photo-6378664.jpeg"
}

  ];

  return (
    <div className="menu-page">
      <h1 className="menu-title">M Jaiswal Restaurant Menu</h1>
      <div className="menu-grid">
        {dishes.map((dish, index) => (
          <div className="menu-card" key={index}>
            <img src={dish.img} alt={dish.name} className="menu-image" />
            <div className="menu-content">
              <h2 className="dish-name">{dish.name}</h2>
              <p className="dish-description">{dish.description}</p>
              <p className="dish-price">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenPage;
