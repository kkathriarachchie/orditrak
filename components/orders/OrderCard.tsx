import { CheckCheck, CircleSmall, MoveRight } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const OrderCard = () => {
  return (
    <Card className="p-5 ">
      <CardContent className="p-0">
        <div className="flex items-center gap-5">
          <Button className="text-xl font-bold w-12 h-12 p-0">AM</Button>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-lg font-semibold tracking-wide">Amrit Raj</h1>
              <p className="text-muted-foreground text-sm">#101 / Dine in</p>
              <p className="text-muted-foreground text-sm">
                Table{" "}
                <MoveRight className="text-muted-foreground ml-2 inline" />
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              {"Ready1" === "Ready" ? (
                <>
                  <p className="bg-muted px-2 py-1 rounded-lg flex items-center">
                    <CheckCheck className="inline mr-2" /> Ready
                  </p>
                  <p className="text-text-muted text-sm flex items-center">
                    <CircleSmall className="inline mr-2 fill-primary text-primary" />
                    Ready to serve
                  </p>
                </>
              ) : (
                <>
                  <p className="bg-muted px-2 py-1 rounded-lg flex items-center">
                    <CircleSmall className="inline mr-2" />
                  </p>
                  <p className="text-sm flex items-center">
                    <CircleSmall className="inline mr-2 fill-primary text-primary" />
                    Preparing your order
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 text-muted-foreground">
          <p>January 18, 2025 08:32 PM</p>
          <p>8 Items</p>
        </div>
        <hr className="w-full mt-4 border-t-1 " />
        <div className="flex items-center justify-between mt-4">
          <h1 className=" text-lg font-semibold">Total</h1>
          <p className=" text-lg font-semibold">Rs 2500.00</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
