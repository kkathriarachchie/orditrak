"use client";
import { CirclePlus, Trash2 } from "lucide-react";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CartInfo = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  return (
    <div className="px-4 py-2">
      <h1 className="text-lg font-semibold tracking-wide">Order Details</h1>
      <ScrollArea className="mt-4 h-[300px]">
        <div className="flex flex-col gap-3 px-4">
          {cartData.length === 0 ? (
            <div className="flex items-center justify-center h-full min-h-[200px]">
              <p className="text-muted-foreground text-center">
                Your cart is empty. Start adding items!
              </p>
            </div>
          ) : (
            cartData.map((item) => (
              <Card className="p-5" key={item.id}>
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold tracking-wide text-md">
                      {item.name}
                    </h1>
                    <p className="font-semibold">x {item.quantity ?? 1}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="icon">
                        <Trash2 className="!h-[20px] !w-[20px]" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <CirclePlus className="!h-[20px] !w-[20px]" />
                      </Button>
                    </div>
                    <p className="text-md font-bold">
                      ₹ {item.price.toFixed(2)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CartInfo;
