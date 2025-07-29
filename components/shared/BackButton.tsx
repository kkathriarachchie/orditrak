"use client";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="bg-info p-2 text-xl font-bold rounded-full text-text-contrast "
      >
        <ArrowLeft />
      </button>
    </div>
  );
};

export default BackButton;
