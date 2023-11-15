"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
  const router = useRouter();
  const token = localStorage.getItem('token');


  return (
    <div className="space-x-2">
      {token !== undefined ? (
        <>
        <Button
        onClick={() => {
          router.push("/signup");
        }}
        className="bg-blue-300 hover:text-white text-black px-7 rounded-lg"
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          router.push("/signin");
        }}
        className="bg-red-300 px-7 text-white rounded-lg"
        variant={"destructive"}
      >
        Sign In
          </Button>
          </>
      ) : (
          "hello there" 
      )}
    </div>
  );
};

export default AuthButtons;
