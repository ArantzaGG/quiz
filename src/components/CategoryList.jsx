import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';

const [
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnología,
] = imgs;

export const CategoryList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
      <Link
        to={`/category/${categories.ciencia}`}
        className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105"
      >
        <div className="p-5 flex justify-center items-center">
          <img
            src={imgCiencia}
            alt={`Categoría ${categories.ciencia}`}
            className="w-36"
          />

          <h1 className="text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
            {categories.ciencia}
          </h1>
        </div>
      </Link>
    </div>
  );
};
