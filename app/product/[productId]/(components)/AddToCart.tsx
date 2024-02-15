"use client";
import Button from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/useCart";
import { MouseEventHandler } from "react";
import { Product } from "@/types";

interface AddToCartProps {
  data: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ data }) => {
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div className="mt-10 flex items-center gap-x-3">
      <Button onClick={onAddToCart} className="flex items-center gap-x-2">
        Add to Cart
        <ShoppingCart />
      </Button>
    </div>
  );
};
export default AddToCart;
