
import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext'; 
import '../Shop.css';

const productsData = {
  Fruits: [
    { id:1, name: 'Apples', price: '2.99', image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/conversions/0a5ae820-7051-4495-bcca-61bf02897472-thumb.jpg' },
    { id:2, name: 'Banana Bunch', price: '1.69', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7ElBNPs-HbYJJOMHRu7lEmphTn8-52FYKw&s' },
    { id:3, name: 'Mangos', price: '9.49', image: 'https://mission-produce-static.sfo2.cdn.digitaloceanspaces.com/merchandising/mangos-group-honeys.jpg' },
    { id:4, name: 'Pineapple', price: '3.79', image: 'https://assets.wakefern.com/is/image/wakefern/4430-001?$Mi9Product_detail$' },
    { id:5, name: 'Strawberries', price: '6.99', image: 'https://i5.walmartimages.com/asr/373f0c0a-d976-4518-967c-9e8c626d1a10.fd992b4534c99ffa7bba91525be393cb.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' },
  ],
  Vegetables: [
    { id:11, name: 'Carrots', price: '1.99', image: 'https://cdn11.bigcommerce.com/s-kc25pb94dz/images/stencil/1280x1280/products/271/762/Carrot__40927.1634584458.jpg' },
    { id:12, name: 'Bell Pepper', price: '2.99', image: 'https://cdn.britannica.com/12/147312-050-BEC6A59E/Bell-peppers.jpg' },
    { id:13, name: 'Onions', price: '1.49', image: 'https://resources.markon.com/sites/default/files/styles/large/public/pi_photos/Onions_Yellow_No_2_Hero.jpg' },
    { id:14, name: 'Broccoli', price: '2.59', image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg' },
    { id:15, name: 'Tomatoes', price: '1.89', image: 'https://s7d5.scene7.com/is/image/CentralMarket/000318578-1?hei=124&wid=124&$large$' },
  ],
  Dairy: [
    { id:21, name: 'Milk', price: '2.19', image: 'https://i5.walmartimages.com/seo/Great-Value-Whole-Vitamin-D-Milk-Gallon-Plastic-Jug-128-Fl-Oz_6a7b09b4-f51d-4bea-a01c-85767f1b481a.86876244397d83ce6cdedb030abe6e4a.jpeg' },
    { id:22, name: 'Cheese', price: '3.99', image: 'https://gfsstore.com/wp-content/uploads/2025/04a/164216-RAW-6-1744289141.jpg' },
    { id:23, name: 'Yogurt', price: '2.49', image: 'https://i5.walmartimages.com/seo/Great-Value-Original-Vanilla-Lowfat-Yogurt-32-oz_f6e0c5f1-9738-484a-8ba7-604f5c89ae48.a2ab1714f3f104a7f1188ed87f9edcce.jpeg' },
    { id:24, name: 'Butter', price: '4.79', image: 'https://www.mehadrin.com/wp-content/uploads/2021/09/Butter-2-sticks.png' },
    { id:25, name: 'Ice Cream', price: '5.39', image: 'https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/oreo/packaging/OREO_Convocan_48oz_15.png' },
  ],
  Bakery: [
    { id:31, name: 'Bread Loaf', price: '1.99', image: 'https://i5.walmartimages.com/asr/b7d1b78e-2d49-4587-b1ec-cbbf56332577.b59ac37f531b8d19b7bde026909d5088.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' },
    { id:32, name: 'Croissant', price: '2.49', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Croissant-Petr_Kratochvil.jpg' },
    { id:33, name: 'Muffin', price: '2.29', image: 'https://www.tasteofhome.com/wp-content/uploads/2024/08/Brown-Sugar-Oat-Muffins_EXPS_TOHD24_17132_ChristineMa_10.jpg' },
    { id:34, name: 'Bagel', price: '3.89', image: 'https://boichikbagels.com/cdn/shop/files/ProductCloseUp_Sesame_1024x1024_102d79a0-68b6-4095-860d-b49bf352c8c1.png?v=1690384950' },
    { id:35, name: 'Donut', price: '9.99', image: 'https://m.media-amazon.com/images/I/71Bk3kBxF+L._UF894,1000_QL80_.jpg' },
  ],
  Beverages: [
    { id:41, name: 'Orange Juice', price: '3.49', image: 'https://cdn.gardengrocer.com/attachments/photos/high_res/6515.jpeg?9528' },
    { id:42, name: 'Apple Juice', price: '3.29', image: 'https://images.albertsons-media.com/is/image/ABS/960225420-ECOM?$ng-ecom-pdp-mobile$&defaultImage=Not_Available' },
    { id:43, name: 'Coca Cola', price: '2.99', image: 'https://www.coca-cola.com/content/dam/onexp/us/en/brands/coca-cola-original/coke-de-mexico.png' },
    { id:44,  name: 'Mango Juice', price: '6.19', image: 'https://images.wegmans.com/is/image/wegmanscsprod/758843_PrimaryImage?eTag=1743287925363' },
    { id:45, name: 'Cold Coffee', price: '5.59', image: 'https://www.kroger.com/product/images/large/back/0001200000452' },
  ]
};

const Shop = () => {
  const categories = Object.keys(productsData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const { addToCart } = useContext(CartContext); 

  return (
    <div className="shop-container">
      <h2 className="shop-title">Our Fresh Products</h2>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-list">
        {productsData[selectedCategory].map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}<span className="unit">/ea</span></p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;