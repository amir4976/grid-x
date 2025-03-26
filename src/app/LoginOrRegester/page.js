"use client";
import React from "react";
import { useState } from "react";
import Login from "@/components/Templates/LoginOrRegester/Login";
import Regester from "@/components/Templates/LoginOrRegester/Regester";
function Page() {
  const [authType, setAuthType] = useState("Regester");
  const ShowRegester = () => setAuthType("Regester");
  const ShowLogin = () => setAuthType("Login");
  return (
    <div className="w-full flex items-center justify-center">
      {authType === "Login" ? (
        <Login ShowRegester={ShowRegester} />
      ) : (
        <Regester ShowLogin={ShowLogin} />
      )}
    </div>
  );
}

export default Page;
