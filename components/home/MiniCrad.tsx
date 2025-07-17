import React from "react";

interface MiniCradProps {
  title: string;
  icon: React.ReactNode;
  number: string | number;
  footerNum: string | number;
}

const MiniCrad = ({ title, icon, number, footerNum }: MiniCradProps) => {
  return (
    <div className="bg-background py-5 px-5 rounded-lg w-[50%]">
      <div className="flex items-start justify-between">
        <h1 className="text-text-primary text-lg font-semibold tracking-wide">
          {title}
        </h1>
        <button
          className={`${
            title === "Total Earnings" ? "bg-success" : "bg-secondary"
          } p-3 rounded-lg text-text-primary text-2xl`}
        >
          {icon}
        </button>
      </div>
      <div>
        <h1 className="text-text-primary text-4xl font-bold mt-5">
          {title === "Total Earnings" ? `Rs.${number}` : number}
        </h1>
        <h1 className="text-text-primary text-lg mt-2">
          <span className="text-success">{footerNum}%</span> than yesterday
        </h1>
      </div>
    </div>
  );
};

export default MiniCrad;
