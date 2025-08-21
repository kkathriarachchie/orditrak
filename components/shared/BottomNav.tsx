import { AlignJustify, CircleEllipsis, Home, Icon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { chairsTablePlatter, bellConcierge } from "@lucide/lab";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 pt-4 p-2 h-16 flex justify-around shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
      <Button
        className={` flex items-center justify-center font-bold w-[300px]   rounded-3xl bg-!none text-muted-foreground shadow-none hover:bg-transparent hover:text-accent-foreground`}
      >
        <Home className="inline mr-2 !w-5 !h-5" />
        <p className="text-lg">Home</p>
      </Button>
      <Button
        className={`flex items-center justify-center font-bold w-[300px] rounded-3xl bg-!none text-muted-foreground shadow-none hover:bg-transparent hover:text-accent-foreground `}
      >
        <AlignJustify className="inline mr-2 !w-5 !h-5" />{" "}
        <p className="text-lg">Orders</p>
      </Button>
      <Button
        className={`flex items-center justify-center font-bold $ w-[300px]rounded-3xl bg-!none text-muted-foreground shadow-none hover:bg-transparent hover:text-accent-foreground `}
      >
        <Icon iconNode={chairsTablePlatter} className="inline mr-2 !w-6 !h-6" />
        <p className="text-lg">Tables</p>
      </Button>

      <Button className="flex items-center justify-center font-bold  w-[300px] rounded-3xl bg-!none text-muted-foreground shadow-none hover:bg-transparent hover:text-accent-foreground">
        <CircleEllipsis className="inline mr-2 !w-5 !h-5" />{" "}
        <p className="text-lg">More</p>
      </Button>

      <Button className="absolute bottom-6 rounded-full w-20 h-20 flex items-center justify-center p-0">
        <Icon iconNode={bellConcierge} className="!w-10 !h-10" />
      </Button>
    </div>
  );
};

export default BottomNav;
