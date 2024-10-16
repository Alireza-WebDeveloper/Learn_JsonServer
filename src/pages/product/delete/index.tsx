import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5007/product/${id}`);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <div className="flex gap-6 bg-gray-100 rounded p-4 items-center">
        <p>آیا از حذف محصول مطمن هستید ؟ </p>
        <section className="flex gap-2">
          <button
            onClick={handleDelete}
            className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded w-fit  text-white"
          >
            تایید
          </button>
          <Link
            to={'/'}
            className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded w-fit  text-white"
          >
            انصراف
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Page;
