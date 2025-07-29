"use client";
import { CircleDot, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { menus } from "@/constants/index";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState<number>();

  const increment = (id: number) => {
    setItemId(id);
    if (itemCount >= 4) return;
    setItemCount((prev) => prev + 1);
  };

  const decrement = (id: number) => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemId(0);
                setItemCount(0);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-text-primary text-lg font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <CircleDot className="text-text-contrast" size={20} />
                )}
              </div>
              <p className="text-text-muted text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>
      <hr className="border-[#2a2a2a] border-t-2 mt-4" />
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selected?.items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer hover:bg-[#2a2a2a] bg-background"
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-text-primary text-lg font-semibold">
                  {item.name}
                </h1>
                <button className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg">
                  <ShoppingCart size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-text-primary text-xl font-bold">
                  ₹{item.price}
                </p>
                <div className="flex items-center justify-between bg-surface-light px-4 py-3 rounded-lg gap-6 w-[50%]">
                  <button
                    onClick={() => decrement(item.id)}
                    className="text-yellow-500 text-2xl"
                  >
                    &minus;
                  </button>
                  <span className="text-text-contrast">
                    {itemId == item.id ? itemCount : "0"}
                  </span>
                  <button
                    onClick={() => increment(item.id)}
                    className="text-yellow-500 text-2xl"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuContainer;
