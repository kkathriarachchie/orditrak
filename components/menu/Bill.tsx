import React from "react";
import { Button } from "../ui/button";

const Bill = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs  font-medium mt-2">Items 3</p>
        <h1 className=" text-md font-bold">₹ 300.00</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs  font-medium mt-2">Tax(5.25%)</p>
        <h1 className=" text-md font-bold">₹ 300.00</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs font-medium mt-2">Total With Tax</p>
        <h1 className=" text-md font-bold">₹ 300.00</h1>
      </div>
      <div className="gap-3 px-4 mt-4 grid grid-cols-2">
        <Button className=" p-6  w-full font-semibold text-lg" variant="ghost">
          Cash
        </Button>
        <Button className="p-6  w-full font-semibold text-lg" variant="ghost">
          Online
        </Button>
      </div>

      <div className=" items-center gap-3 px-5 mt-4 grid grid-cols-2">
        <Button className="p-6 w-full  font-semibold text-lg">
          Print Receipt
        </Button>
        <Button className=" p-6 w-full font-semibold text-lg">
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Bill;
