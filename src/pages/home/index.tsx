import { useState } from 'react';
import ProductList from '../../components/product/product-list';
import Alert from '../../components/shared/alert';
import Spinner from '../../components/shared/spinner';
import useGetProduct from '../../hook/product/use-get-product';
import { NotFoundIcon } from '../../components/shared/icon';

const Page = () => {
  const [page, setPage] = useState<number>(1);
  const { products, isLoading, error } = useGetProduct({ page, limit: 3 });

  if (isLoading) return <Spinner />;

  if (error) return <Alert message={error} />;

  const handleNextPagination = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPagination = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-4">
      {products.length > 0 ? (
        <ProductList data={products} />
      ) : (
        <div className="flex justify-center">
          <NotFoundIcon />
        </div>
      )}
      <section className="flex gap-1 justify-center">
        <button
          onClick={handlePrevPagination}
          disabled={page === 1 && true}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white"
        >
          قبلی
        </button>
        <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white">
          {page}
        </button>
        <button
          disabled={products.length === 0 && true}
          onClick={handleNextPagination}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white"
        >
          بعدی
        </button>
      </section>
    </div>
  );
};

export default Page;
