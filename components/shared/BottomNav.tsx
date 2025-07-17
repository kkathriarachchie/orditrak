import { Home, AlignJustify, Icon, CircleEllipsis } from "lucide-react";
import { chairsTablePlatter, bellConcierge } from "@lucide/lab";
import React from "react";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface-darker p-2 h-16 flex justify-around">
      <button
        className={`flex items-center justify-center font-bold  w-[300px] rounded-[20px] text-text-muted `}
      >
        <Home className="inline mr-2" size={20} />
        <p>Home</p>
      </button>
      <button
        className={`flex items-center justify-center font-bold w-[300px] rounded-[20px] text-text-muted `}
      >
        <AlignJustify className="inline mr-2" size={20} /> <p>Orders</p>
      </button>
      <button
        className={`flex items-center justify-center font-bold $ w-[300px] rounded-[20px] text-text-muted `}
      >
        <Icon iconNode={chairsTablePlatter} className="inline mr-2" size={24} />
        <p>Tables</p>
      </button>

      <button className="flex items-center justify-center font-bold text-text-muted w-[300px]">
        <CircleEllipsis className="inline mr-2" size={20} /> <p>More</p>
      </button>

      <button className="absolute bottom-6 bg-secondary text-text-primary rounded-full p-4 items-center">
        <Icon iconNode={bellConcierge} size={40} />
      </button>
    </div>
  );
};

export default BottomNav;
