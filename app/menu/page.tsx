"use client";
import Bill from "@/components/menu/Bill";
import CartInfo from "@/components/menu/CartInfo";
import CustomerInfo from "@/components/menu/CustomerInfo";
import MenuContainer from "@/components/menu/MenuContainer";
import BackButton from "@/components/shared/BackButton";
import BottomNav from "@/components/shared/BottomNav";
import { Card, CardContent } from "@/components/ui/card";
import { RootState } from "@/redux/store";
import { UtensilsCrossed } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const customerData = useSelector((state: RootState) => state.customer);

  return (
    <div>
      <section className="h-[calc(100vh-6rem)] overflow-hidden flex gap-3">
        {/* Left Div */}
        <div className="flex-[3]">
          <div className="flex items-center justify-between px-10 py-4">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-2xl font-bold tracking-wider">Menu</h1>
            </div>
            <div className="flex items-center justify-around gap-4">
              <div className="flex items-center gap-3 cursor-pointer">
                <UtensilsCrossed className="text-4xl" />
                <div className="flex flex-col items-start">
                  <h1 className="text-md font-semibold tracking-wide">
                    {customerData.customerName || "Customer Name"}
                  </h1>
                  <p className="text-xs text-muted-foreground font-medium">
                    Table : {customerData.table || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MenuContainer />
        </div>
        {/* Right Div */}
        <Card className="flex-[1]  mt-4 mr-3 h-[760px] rounded-lg p-5">
          <CardContent className="p-0">
            {/* Customer Info */}
            <CustomerInfo />
            <hr className="border-t-2" />
            {/* Cart Items */}
            <CartInfo />
            <hr className="border-t-2" />
            {/* Bills */}
            <Bill />
          </CardContent>
        </Card>
        <BottomNav />
      </section>
    </div>
  );
};

export default Page;
