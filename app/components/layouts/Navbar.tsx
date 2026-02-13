import { Input } from '~/components/ui/input';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-2 justify-between px-6 py-4 border-b">
      {/* logo */}
      <h2 className="text-2xl font-semibold">iMovie</h2>
      {/* search */}
      <Input
        placeholder="Search Title Here..."
        className="max-w-sm text-center"
      />
      {/* menu */}
      <div className=" hidden md:flex gap-4 px-2 text-sm">
        <a href="#">Home</a>
        <a href="#">Genre</a>
        <a href="#">Populer</a>
        <a href="#">Series</a>
        <a href="#">Favorit</a>
      </div>
      <button className="md:hidden">
        <Menu />
      </button>
    </nav>
  );
};
