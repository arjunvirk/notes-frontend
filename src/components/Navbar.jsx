import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-black z-100">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl lg:text-3xl text-green-500">IdeaVault</h1>
          <div>
            <Link to="/create" className="flex items-center gap-4 text-2xl">
              <PlusIcon className="text-green-500 size-5" />
              <span className="text-green-500 mt-1">New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
