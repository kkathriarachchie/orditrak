import { Bell, ChefHat, Search, User } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center py-4 px-8 bg-background shadow-md">
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <ChefHat />
          {/*<img className="h-8 w-8" alt="OrdiTrak logo" />*/}
          <h1 className="text-lg font-semibold tracking-wide">OrdiTrak</h1>
        </div>

        {/* SEARCH */}
        <div className="relative w-[500px]">
          <Input
            type="text"
            placeholder="Search"
            className="rounded-full py-6 px-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>

        {/* LOGGED USER DETAILS */}
        <div className="flex items-center gap-4">
          <div className="bg-muted rounded-2xl p-3 cursor-pointer">
            <Bell className="text-2xl" />
          </div>
          <div className="flex items-center gap-3 cursor-pointer ">
            <User className="text-4xl" />
            <div className="flex flex-col items-start">
              <h1 className="text-md font-semibold tracking-wide">Kasun</h1>
              <p className="text-xs text-muted-foreground font-medium">Admin</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
