"use client";

import Button from "@/components/ui/Button";
import useCart from "@/hooks/useCart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarActionsProps {}

export const NavbarActions: React.FC<NavbarActionsProps> = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const onClick = () => {
    router.push("/cart");
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={onClick}
        className="px-4 py-2 flex items-center justify-center rounded-full bg-black space-x-2 "
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-md font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};
export default NavbarActions;
