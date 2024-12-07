import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-lg font-bold">NEXTJS Blog</h1>

        <div className="hidden md:flex space-x-4">
          <Link href="#" className="px-4">Home</Link>
          <Link href="/Blog" className="px-4">Blogs</Link>
          <Link href="/Contact" className="px-4">Contact</Link>
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div className="md:hidden bg-gray-700 flex flex-col items-center py-4">
        <Link href="#" className="px-4 py-2">Home</Link>
        <Link href="/Blog" className="px-4 py-2">Blogs</Link>
        <Link href="/Contact" className="px-4 py-2">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
