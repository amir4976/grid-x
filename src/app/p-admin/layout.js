import Menu from "@/components/Templates/p-admin/Menu";
import React from "react";

function layout({ children }) {
  return (
    <div className="w-full h-fit grid grid-cols-1 gap-0 sm:grid-cols-4 sm:gap-5 max-sm:mb-5 ">
      <Menu />
      {children}
    </div>
  );
}

export default layout;
