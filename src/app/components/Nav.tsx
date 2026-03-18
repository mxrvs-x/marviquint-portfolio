"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Sun, Moon, Briefcase} from "lucide-react";

interface NavProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Nav: React.FC<NavProps> = ({ toggleDarkMode, isDarkMode }) => {
  const pathname = usePathname(); // Get the current route

  return (
    <nav className="nav-container mt-8">
      {/* Home Link */}
      <Link href="/" className={`nav-item ${pathname === "/" ? "active" : ""}`}>
        <Home className="icon" />
      </Link>

      {/* Dark Mode Toggle */}
      <button onClick={toggleDarkMode} className="nav-item">
        {isDarkMode ? <Moon className="icon" /> : <Sun className="icon" />}
      </button>

       {/* Tech Stack */}
       <Link href="/tech-stack" className={`nav-item ${pathname === "/tech-stack" ? "active" : ""}`}>
        <Briefcase className="icon" />
      </Link>

    </nav>
  );
};

export default Nav;
