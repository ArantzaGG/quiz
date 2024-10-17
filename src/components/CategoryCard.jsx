import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CategoryCard = ({ category, alt, src, gradientColor }) => {
  return (
    <Link
      to={`/category/${category}`}
      className={`flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r ${gradientColor} transition-all hover:scale-105 border-4 border-white-600 shadow-lg transform hover:-translate-y-1`}
    >
      <div className='p-5 flex justify-center items-center'>
        <img src={src} alt={alt} className='w-36' />
      </div>
      <h1 className='text-2xl font-bold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5 text-center' style={{ fontFamily: 'Bungee, cursive' }}>
        {category}
      </h1>
    </Link>
  );
};

// Definición de propTypes
CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  gradientColor: PropTypes.string,
};
