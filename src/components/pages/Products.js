import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../App";

import "../../styles/products.scss";

const Products = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const { cartItems, setCartItems } = useContext(CartContext);
  console.log(cartItems);
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilterProducts(data);
        setAllProducts(data);
      });
  };

  const handleProductFilter = (e) => {
    if (e.target.value === "all products") setFilterProducts(allProducts);
    else {
      setFilterProducts(
        allProducts.filter((product) => product.category === e.target.value)
      );
    }
  };

  const addToCart = (product) => {
    const sameItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (sameItemIndex === -1) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      const cartCopy = [...cartItems];
      const product = cartCopy[sameItemIndex];
      const quantity = product.quantity;
      product.quantity = quantity + 1;
      cartCopy[sameItemIndex] = product;
      setCartItems(cartCopy);
    }
  };

  const sortAlphabetical = () => {
    const sortedProducts = [...filterProducts].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setFilterProducts(sortedProducts);
  };

  const sortNumerical = () => {
    const sortedProducts = [...filterProducts].sort(
      (a, b) => a.price - b.price
    );
    setFilterProducts(sortedProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <select onChange={(e) => handleProductFilter(e)}>
        <option value={"all products"}>All products</option>
        <option value={"men's clothing"}>Men's clothing</option>
        <option value={"women's clothing"}>Women's clothing</option>
        <option value={"jewelery"}>Jewelery</option>
        <option value={"electronics"}>Electronics</option>
      </select>
      <label>A - Z</label>
      <input type="radio" onClick={sortAlphabetical} />
      <label>least to greatest</label>
      <input type="radio" onClick={sortNumerical} />
      <div className="single-products">
        {filterProducts.map((product) => {
          return (
            <div className="product" key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image}></img>
              <h5>${product.price.toFixed(2)}</h5>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
