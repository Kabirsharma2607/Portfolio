import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar-comp";
import MobileNavbar from "./mobile-navbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Kabir<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
