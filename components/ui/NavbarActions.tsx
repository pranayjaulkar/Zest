"use client";

import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarActionsProps {}

export const NavbarActions: React.FC<NavbarActionsProps> = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="px-4 py-2 flex items-center justify-center rounded-full bg-black space-x-2 ">
        <ShoppingBag size={20} color="white" />
        <span className="text-md font-medium text-white">2</span>
      </Button>
    </div>
  );
};
export default NavbarActions;
