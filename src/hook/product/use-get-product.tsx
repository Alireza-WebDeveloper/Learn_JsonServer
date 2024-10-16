import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetProduct = ({ page, limit }: { page: number; limit: number }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`http://localhost:5007/product?_page=${page}&_limit=${limit}`)
      .then((response) => {
        setProducts(response.data);
        setisLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setisLoading(false);
      });
  }, [page, limit]);
  return { products, setProducts, isLoading, error };
};

export default useGetProduct;
