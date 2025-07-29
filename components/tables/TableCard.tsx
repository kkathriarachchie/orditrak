import { MoveRight } from "lucide-react";
import React from "react";
import { getAvatarName, getBgColor } from "@/util";
import { useRouter } from "next/navigation";

const TableCard = ({
  id,
  name,
  status,
  initials,
  seats,
}: {
  id: number;
  name: string;
  status: string;
  initials: string;
  seats: number;
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (status === "Booked") return;
    router.push("/menu");
  };

  return (
    <div
      onClick={handleClick}
      key={id}
      className="w-[300px] hover:bg-surface-darker-hover bg-surface-darker p-4 rounded-lg cursor-pointer"
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-text-primary text-xl font-semibold">{name}</h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-accent-green2"
              : "bg-accent-brown3 text-text-contrast"
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-8">
        <div
          className={`rounded-full  w-20 h-20 flex items-center justify-center`}
          style={{ backgroundColor: initials ? getBgColor() : "#1f1f1f" }}
        >
          <h1 className="text-text-contrast text-xl">
            {getAvatarName(initials) || "N/A"}
          </h1>
        </div>
      </div>
      <p className="text-text-muted text-xs">
        Seats: <span className="text-text-primary">{seats}</span>
      </p>
    </div>
  );
};

export default TableCard;
