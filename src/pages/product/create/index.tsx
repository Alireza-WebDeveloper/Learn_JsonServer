import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Page = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [brand, setBrand] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const data = {
        name,
        description,
        price,
        category,
        brand,
        img: 'https://loremflickr.com/375/812?random',
      };
      await axios.post('http://localhost:5007/product', data);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <section className="flex flex-col gap-2">
        <label>نام محصول</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-6 py-3 rounded-lg"
          placeholder="نام محصول را وارد کنید"
        />
      </section>
      <section className="flex flex-col gap-2">
        <label>توضیحات محصول</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border px-6 py-3 rounded-lg"
          placeholder="توضیحات را وارد کنید"
        />
      </section>
      <section className="flex flex-col gap-2">
        <label>قیمت محصول</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border px-6 py-3 rounded-lg"
          placeholder="قیمت محصول را وارد کنید"
        />
      </section>
      <section className="flex flex-col gap-2">
        <label>دسته بندی محصول</label>
        <select
          className="px-6 py-3 rounded-lg border"
          defaultValue={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>دسته بندی 1</option>
          <option>دسته بندی 2</option>
          <option>دسته بندی 3</option>
          <option>دسته بندی 4</option>
        </select>
      </section>
      <section className="flex flex-col gap-2">
        <label>برند محصول</label>
        <select
          className="px-6 py-3 rounded-lg border"
          defaultValue={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option>برند محصول 1</option>
          <option>برند محصول 2</option>
          <option>برند محصول 3</option>
          <option>برند محصول 4</option>
        </select>
      </section>
      <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl">
        ایجاد محصول
      </button>
    </form>
  );
};

export default Page;
