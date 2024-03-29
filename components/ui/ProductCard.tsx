"use client";
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/usePreviewModal";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/useCart";
import Link from "next/link";
interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div className="bg-white group rounded-xl border p-3 space-y-4">
      <Link href={`/product/${data?.id}`}>
        <div className="aspect-square cursor-pointer rounded-xl bg-white relative">
          <Image
            className=" object-contain"
            src={data?.images?.[0]?.url}
            alt=""
            fill
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconButton
                onClick={onPreview}
                icon={<Expand size={20} className="text-gray-600" />}
              />
              <IconButton
                onClick={onAddToCart}
                icon={<ShoppingCart size={20} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
      </Link>
      {/* Description */}
      <Link href={`/product/${data?.id}`}>
        
        <div>
          <p className="cursor-pointer font-semibold text-lg">{data.name}</p>
          <p className="text-sm text-gray-500">{data.category?.name}</p>
        </div>
      </Link>
      {/* Price  */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};
export default ProductCard;
