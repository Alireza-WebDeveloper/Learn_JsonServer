import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="p-4 shadow">
      <Link className="hover:bg-slate-200 px-4 py-2 rounded text-lg" to={'/'}>
        صفحه اصلی
      </Link>
      <Link
        className="hover:bg-slate-200 px-4 py-2 rounded text-lg"
        to={'/product/create'}
      >
        ایجاد محصول
      </Link>
    </section>
  );
};

export default Header;
