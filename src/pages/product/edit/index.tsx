import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductState } from '../../../types/product';
const Page = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const { id } = useParams();

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
      };
      await axios.patch(`http://localhost:5007/product/${id}`, data);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axios
      .get<ProductState>(`http://localhost:5007/product/${id}`)
      .then((response) => {
        const { name, description, price, category, brand } = response.data;
        setName(name);
        setDescription(description);
        setPrice(String(price));
        setCategory(category);
        setBrand(brand);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
          value={category}
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
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option>برند محصول 1</option>
          <option>برند محصول 2</option>
          <option>برند محصول 3</option>
          <option>برند محصول 4</option>
        </select>
      </section>
      <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl">
        ویرایش محصول
      </button>
    </form>
  );
};

export default Page;
