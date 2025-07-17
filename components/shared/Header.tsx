import { Bell, LogOut, Search, User } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center py-4 px-8 bg-background">
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img className="h-8 w-8" alt="OrdiTrak logo" />
          <h1 className="text-lg font-semibold text-text-primary tracking-wide">
            OrdiTrak
          </h1>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-4 bg-surface-light rounded-[15px] px-5 py-2 w-[500px]">
          <Search className="text-text-primary" />
          <input
            type="text"
            placeholder="Search"
            className="bg-surface-light outline-none text-text-contrast"
          />
        </div>

        {/* LOGGED USER DETAILS */}
        <div className="flex items-center gap-4">
          <div className="bg-surface-light rounded-[15px] p-3 cursor-pointer">
            <Bell className=" text-text-primary  text-2xl" />
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <User className="text-text-primary text-4xl" />
            <div className="flex flex-col items-start">
              <h1 className="text-md text-text-primary font-semibold tracking-wide">
                Kasun
              </h1>
              <p className="text-xs text-text-muted font-medium">Admin</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
