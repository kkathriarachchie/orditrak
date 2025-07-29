"use client";
import { Home, AlignJustify, Icon, CircleEllipsis } from "lucide-react";
import { chairsTablePlatter, bellConcierge } from "@lucide/lab";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

const BottomNav = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface-darker p-2 h-16 flex justify-around">
      <button
        onClick={() => router.push("/")}
        className={`flex items-center justify-center font-bold  w-[300px] rounded-[20px] text-text-muted `}
      >
        <Home className="inline mr-2" size={20} />
        <p>Home</p>
      </button>
      <button
        onClick={() => router.push("/orders")}
        className={`flex items-center justify-center font-bold w-[300px] rounded-[20px] text-text-muted `}
      >
        <AlignJustify className="inline mr-2" size={20} /> <p>Orders</p>
      </button>
      <button
        onClick={() => router.push("/tables")}
        className={`flex items-center justify-center font-bold $ w-[300px] rounded-[20px] text-text-muted `}
      >
        <Icon iconNode={chairsTablePlatter} className="inline mr-2" size={24} />
        <p>Tables</p>
      </button>

      <button className="flex items-center justify-center font-bold text-text-muted w-[300px]">
        <CircleEllipsis className="inline mr-2" size={20} /> <p>More</p>
      </button>

      <button
        className="absolute bottom-6 bg-secondary text-text-primary rounded-full p-4 items-center"
        onClick={openModal}
      >
        <Icon iconNode={bellConcierge} size={40} />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className="block text-text-muted mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-surface-light">
            <input
              type="text"
              name=""
              placeholder="Enter customer name"
              id=""
              className="bg-transparent flex-1 text-text-contrast focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-text-muted mb-2 mt-3 text-sm font-medium">
            Customer Phone
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-surface-light">
            <input
              type="number"
              name=""
              placeholder="+91-9999999999"
              id=""
              className="bg-transparent flex-1 text-text-contrast focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-text-muted">
            Guest
          </label>
          <div className="flex items-center justify-between bg-surface-light px-4 py-3 rounded-lg">
            <button onClick={decrement} className="text-yellow-500 text-2xl">
              &minus;
            </button>
            <span className="text-text-contrast">{guestCount} Person</span>
            <button onClick={increment} className="text-yellow-500 text-2xl">
              &#43;
            </button>
          </div>
        </div>
        <button
          className="w-full bg-[#F6B100] text-text-contrast rounded-lg py-3 mt-8 hover:bg-yellow-700"
          onClick={() => {
            router.push("/tables");
          }}
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
