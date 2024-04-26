import { Link } from 'react-router-dom';

export const CategoryList = () => {
  return (
    <div>
      <Link
        to={`/category/${algo}`}
        className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2x1 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105'
      >
        <div className="p-5 flex justify-center items-center"><img src="" alt="" /></div>
      </Link>
    </div>
  );
};
