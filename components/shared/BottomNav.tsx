"use client";
import { AlignJustify, CircleEllipsis, Home, Icon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { chairsTablePlatter, bellConcierge } from "@lucide/lab";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { setCustomer } from "@/redux/slice/customerSlice";

const BottomNav = () => {
  const router = useRouter();
  const routerPath = usePathname();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  };

  const isActive = (path: string) => {
    console.log("routerPath", routerPath, path);
    return routerPath === path;
  };

  const handleCreateOrder = () => {
    // send the data to store
    dispatch(setCustomer({ name, phone, guests: guestCount }));
    router.push("/tables");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-2 h-16 flex justify-around shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
      <button
        onClick={() => router.push("/")}
        className={`${
          isActive("/") ? "text-secondary bg-primary" : "text-muted-foreground"
        } flex items-center justify-center font-bold  w-[300px] rounded-[20px]  `}
      >
        <Home className="inline mr-2" size={20} />
        <p>Home</p>
      </button>
      <button
        onClick={() => router.push("/orders")}
        className={`${
          isActive("/orders")
            ? "text-secondary bg-primary"
            : "text-muted-foreground"
        } flex items-center justify-center font-bold w-[300px] rounded-[20px]  `}
      >
        <AlignJustify className="inline mr-2" size={20} /> <p>Orders</p>
      </button>
      <button
        onClick={() => router.push("/tables")}
        className={`${
          isActive("/tables")
            ? "text-secondary bg-primary"
            : "text-muted-foreground"
        } flex items-center justify-center font-bold $ w-[300px] rounded-[20px]  `}
      >
        <Icon iconNode={chairsTablePlatter} className="inline mr-2" size={24} />
        <p>Tables</p>
      </button>

      <button
        className={`${
          isActive("/more")
            ? "text-secondary bg-primary"
            : "text-muted-foreground"
        } flex items-center justify-center font-bold w-[300px] rounded-[20px]`}
      >
        <CircleEllipsis className="inline mr-2" size={20} /> <p>More</p>
      </button>

      <button
        disabled={isActive("/tables") || isActive("/menu")}
        onClick={() => setOpen(true)}
        className="absolute bottom-6 bg-foreground text-background  rounded-full p-4 items-center"
      >
        <Icon iconNode={bellConcierge} size={40} />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Create Order</DialogTitle>
          </DialogHeader>
          <div>
            <label className="block text-muted-foreground mb-2 text-sm font-medium">
              Customer Name
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter customer name"
              className="rounded-lg py-6 "
            />
          </div>
          <div>
            <label className="block text-muted-foreground mb-2 mt-3 text-sm font-medium">
              Customer Phone
            </label>

            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="+91-9999999999"
              className="rounded-lg py-6"
            />
          </div>
          <div>
            <label className="block mb-2 mt-3 text-sm font-medium text-muted-foreground">
              Guest
            </label>
            <div className="flex items-center justify-between bg-muted px-4 py-3 rounded-lg">
              <Button
                variant="ghost"
                onClick={decrement}
                className="text-2xl px-3 py-0"
              >
                −
              </Button>
              <span className="">{guestCount} Person</span>
              <Button
                variant="ghost"
                onClick={increment}
                className="text-2xl px-3 py-0"
              >
                +
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button
              className="w-full rounded-lg p-6 mt-8 "
              onClick={() => {
                handleCreateOrder();
              }}
            >
              Create Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BottomNav;
