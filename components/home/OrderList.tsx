import { CheckCheck, CircleSmall } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const OrderList = () => {
  return (
    <Card className=" p-5">
      <CardContent className="flex items-center gap-5 p-0">
        <Button className="text-xl font-bold rounded-lg w-12 h-12 p-0">
          AM
        </Button>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-lg font-semibold tracking-wide">Amrit Raj</h1>
            <p className="text-muted-foreground text-sm">8 Items</p>
          </div>
          <h1 className=" font-semibold border rounded-lg p-2">Table {3}</h1>
          <div className="flex flex-col items-end gap-2">
            {"Readyq" === "Ready" ? (
              <p className=" bg-muted p-2 rounded-lg flex items-center">
                <CheckCheck className="inline mr-2" /> Ready
              </p>
            ) : (
              <p className=" bg-muted p-2  rounded-lg flex items-center">
                <CircleSmall className="inline mr-2 fill-primary" /> Ready to
                serve
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderList;
