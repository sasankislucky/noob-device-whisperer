
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cpu as ChipIcon, ZapIcon, HomeIcon, InfoIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-device-dark border-b border-border/40 py-3">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-device p-2 rounded-lg">
            <ChipIcon className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold gradient-text">Device Whisperer</h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
            <HomeIcon className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
            <InfoIcon className="w-4 h-4" />
            <span>About</span>
          </Link>
        </nav>

        <Button variant="secondary" size="sm" className="gap-2">
          <ZapIcon className="w-4 h-4" /> Quick Connect
        </Button>
      </div>
    </header>
  );
};

export default Header;
