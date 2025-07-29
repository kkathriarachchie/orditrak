import { CheckCheck, CircleSmall } from "lucide-react";
import React from "react";

const OrderList = () => {
  return (
    <div className="flex items-center gap-5 mb-3">
      <button className="bg-secondary p-3 text-xl font-bold rounded-lg">
        AM
      </button>
      <div className="flex items-center justify-between w-[100%]">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-text-primary text-lg font-semibold tracking-wide">
            Amrit Raj
          </h1>
          <p className="text-text-muted text-sm">8 Items</p>
        </div>

        <h1 className="text-secondary font-semibold border border-secondary rounded-lg p-1">
          Table {3}
        </h1>

        <div className="flex flex-col items-end gap-2">
          {"Ready3" === "Ready" ? (
            <>
              <p className="text-green-600 bg-accent-green2 px-2 py-1 rounded-lg">
                <CheckCheck className="inline mr-2" /> Ready
              </p>
            </>
          ) : (
            <>
              <p className="text-yellow-600  bg-accent-brown2 px-2 py-1 rounded-lg">
                <CircleSmall className="inline mr-2 fill-yellow-600" /> Ready to
                serve
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
