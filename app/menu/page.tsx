import MenuContainer from "@/components/menu/MenuContainer";
import BackButton from "@/components/shared/BackButton";
import BottomNav from "@/components/shared/BottomNav";
import { UtensilsCrossed } from "lucide-react";
import React from "react";

const Menu = () => {
  return (
    <section className="bg-surface-light h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Div */}
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-text-primary text-2xl font-bold tracking-wider">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <UtensilsCrossed className="text-text-primary text-4xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-text-primary font-semibold tracking-wide">
                  {0 || "Customer Name"}
                </h1>
                <p className="text-xs text-text-muted font-medium">
                  Table : {0 || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>
      {/* Right Div */}
      <div className="flex-[1] bg-background mt-4 mr-3 h-[730px] rounded-lg pt-2"></div>
      <BottomNav />
    </section>
  );
};

export default Menu;
