import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const LoadMore = ({ url, limit }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const [skip, setSkip] = useState(0);

  const fetchProducts = async () => {
    const endpoint = `${url}?limit=${limit}&skip=${skip}`;
    console.log(endpoint);
    try {
      setIsLoading(true);
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw Error("Products could not be loaded from endpoint: " + endpoint);
      }
      const data = await response.json();
      setProducts([...products, ...data.products]);
      setSkip(skip + limit);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLoadMore = () => {
    fetchProducts();
  };

  if (error) {
    return <div className="container error">{error}</div>;
  }

  return (
    <div className="container">
      {products.length>0 && products.map((product, index) => (
        <div key={index}>{product.title}</div>
      ))}
      {isLoading && <div>Loading...</div>}
      <button className="load-more" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
};

LoadMore.propTypes = {
  url: PropTypes.string,
  limit: PropTypes.number,
};

export default LoadMore;
