import { CategoryList } from '../components/CategoryList';


export const HomePage = () => {
  return (
    <div className="relative w-full h-screen bg-blue-100 pt-4 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/src/assets/fondoN.jpg)' }} />
      <div className="relative z-10">
        <CategoryList />
      </div>
    </div>
  );
};
