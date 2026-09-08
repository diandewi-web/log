import Hero from './Hero';
import Categories from './Categories';
import Products from './Products';
import Sidebar from './Sidebar';

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 animate-in fade-in duration-500">
      <div className="flex flex-col xl:flex-row gap-8 lg:gap-12">
        {/* Main Content Area (Left Side) */}
        <div className="flex-1 xl:w-3/4 flex flex-col gap-14 lg:gap-20">
          <Hero />
          <Categories />
          <Products />
        </div>
        
        {/* Sidebar Area (Right Side) */}
        <aside className="w-full xl:w-[350px] shrink-0">
          <Sidebar />
        </aside>
      </div>
    </main>
  );
}
