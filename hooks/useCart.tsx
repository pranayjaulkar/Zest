import { create } from "zustand";
import { Product } from "@/types";
import toast from "react-hot-toast";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  addItem: (data: Product) => void;
  items: Product[];
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItems = currentItems.find(
          (item: Product) => item.id === data.id
        );

        if (existingItems) {
          return toast("Item already added to cart");
        }
        set({ items: [...get().items, data] });
        toast.success("Item added to cart");
      },
      removeItem: (id: string) => {
        set({
          items: [...get().items.filter((item: Product) => item.id !== id)],
        });
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
