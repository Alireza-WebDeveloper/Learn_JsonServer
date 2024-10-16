import { ProductState } from '../../types/product';
import ProductItem from './product-item';

interface Props {
  data: ProductState[];
}
const ProductList: React.FC<Props> = ({ data }) => {
  const renderProductItem = () => {
    return data.map((item) => {
      return <ProductItem key={item.id} item={item} />;
    });
  };
  return (
    <section className="grid grid-cols-3  gap-4">{renderProductItem()}</section>
  );
};

export default ProductList;
