import React from 'react';
import { ProductState } from '../../types/product';
import { Link } from 'react-router-dom';

interface Props {
  item: ProductState;
}

const ProductItem: React.FC<Props> = ({ item }) => {
  return (
    <section
      className="flex flex-col gap-4 border rounded px-4 py-2"
      key={item.id}
    >
      <img className="w-full h-[260px] rounded" src={item.img} />
      <h1 className="font-bold text-xl">{item.name}</h1>
      <p className="text-sm text-gray-800">{item.description}</p>
      <section className="flex gap-2">
        <span>دسته بندی : </span>
        <span>{item.category}</span>
      </section>{' '}
      <section className="flex gap-2">
        <span> برند : </span>
        <span>{item.brand}</span>
      </section>
      <section className="flex gap-2">
        <span> قیمت : </span>
        <span>{item.price}</span>
      </section>
      <section className="flex gap-4">
        <Link
          to={`/product/delete/${item.id}`}
          className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded w-fit  text-white"
        >
          حذف
        </Link>
        <Link
          to={`/product/edit/${item.id}`}
          className="bg-orange-500 hover:bg-orange-700 px-4 py-2 rounded w-fit  text-white"
        >
          ویرایش
        </Link>
      </section>
    </section>
  );
};

export default ProductItem;
