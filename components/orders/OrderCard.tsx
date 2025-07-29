import { CheckCheck, CircleSmall, MoveRight } from "lucide-react";
import React from "react";

const OrderCard = () => {
  return (
    <div className="w-[500px] bg-surface-darker p-4 rounded-lg mb-4">
      <div className="flex items-center gap-5">
        <button className="bg-secondary p-3 text-xl font-bold rounded-lg">
          AM
        </button>
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-text-primary text-lg font-semibold tracking-wide">
              Amrit Raj
            </h1>
            <p className="text-text-muted text-sm">#101 / Dine in</p>
            <p className="text-text-muted text-sm">
              Table <MoveRight className="text-text-muted ml-2 inline" />{" "}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {"Ready" === "Ready" ? (
              <>
                <p className="text-green-600 bg-accent-green2 px-2 py-1 rounded-lg">
                  <CheckCheck className="inline mr-2" /> Ready
                </p>
                <p className="text-text-muted text-sm">
                  <CircleSmall className="inline mr-2 fill-green-600 text-green-600" />{" "}
                  Ready to serve
                </p>
              </>
            ) : (
              <>
                <p className="text-yellow-600 bg-accent-brown2 px-2 py-1 rounded-lg">
                  <CircleSmall className="inline mr-2" />
                </p>
                <p className="text-text-muted text-sm">
                  <CircleSmall className="inline mr-2 fill-yellow-600 text-yellow-600" />{" "}
                  Preparing your order
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 text-text-muted">
        <p>January 18, 2025 08:32 PM</p>
        <p>8 Items</p>
      </div>
      <hr className="w-full mt-4 border-t-1 border-gray-500" />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-text-primary text-lg font-semibold">Total</h1>
        <p className="text-text-primary text-lg font-semibold">Rs 2500.00</p>
      </div>
    </div>
  );
};

export default OrderCard;
