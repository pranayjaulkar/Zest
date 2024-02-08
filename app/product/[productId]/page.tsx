import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import Gallery from "@/components/gallery/index";
import Info from "@/components/ui/Info";
import Button from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/useCart";
import { MouseEventHandler } from "react";

interface ProductPageProps {
  params: { productId: string };
}
export const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const cart = useCart();
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.stopPropagation();
    cart.addItem(product);
  };
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
              <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2">
                  Add to Cart
                  <ShoppingCart />
                </Button>
              </div>
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};
export default ProductPage;
