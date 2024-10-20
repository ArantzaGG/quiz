import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
  imgHtml,
  imgCss,
  imgJavascript,
  // imgGeografia,
  // imgHistoria,
  // imgLiteratura,
  // imgTecnologia,
] = imgs;

export const CategoryList = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-10">
      <div className="max-w-xs w-full">  {/* Contenedor para limitar el ancho */}
        <CategoryCard
          category={categories.HTML}
          src={imgHtml}
          alt={`Categoría ${categories.HTML}`}
          gradientColor="from-orange-500 to-black-500"
        />
      </div>
      <div className="max-w-xs w-full">  {/* Contenedor para limitar el ancho */}
        <CategoryCard
          category={categories.CSS}
          src={imgCss}
          alt={`Categoría ${categories.CSS}`}
          gradientColor="from-blue-500 to-white-500"
        />
      </div>
      <div className="max-w-xs w-full">  {/* Contenedor para limitar el ancho */}
        <CategoryCard
          category={categories.JS}
          src={imgJavascript}
          alt={`Categoría ${categories.JS}`}
          gradientColor="from-yellow-600 to-white-200"
        />
      </div>
      {/* 
      <div className="max-w-xs w-full">
        <CategoryCard
          category={categories.geografia}
          src={imgGeografia}
          alt={`Categoría ${categories.geografia}`}
          gradientColor="from-cyan-200 to-lime-200"
        />
      </div>
      <div className="max-w-xs w-full">
        <CategoryCard
          category={categories.historia}
          src={imgHistoria}
          alt={`Categoría ${categories.historia}`}
          gradientColor="from-sky-300 to-indigo-900"
        />
      </div>
      <div className="max-w-xs w-full">
        <CategoryCard
          category={categories.literatura}
          src={imgLiteratura}
          alt={`Categoría ${categories.literatura}`}
          gradientColor="from-amber-500 to-emerald-500"
        />
      </div>
      <div className="max-w-xs w-full">
        <CategoryCard
          category={categories.tecnologia}
          src={imgTecnologia}
          alt={`Categoría ${categories.tecnologia}`}
          gradientColor="from-violet-900 to-rose-500"
        />
      </div> */}
    </div>
  );
};


