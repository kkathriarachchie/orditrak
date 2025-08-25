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
        className="p-2 text-xl font-bold rounded-full bg-muted "
      >
        <ArrowLeft />
      </button>
    </div>
  );
};

export default BackButton;
