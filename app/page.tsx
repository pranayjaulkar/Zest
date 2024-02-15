import Container from "@/components/ui/Container";
import Billboard from "@/components/Billboard";
import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("0ad33a60-a3a5-47ec-ba29-2c07cc297046");
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
        </div>
        <div className="flex flex-col gap-y-6 px-4 sm:px-6 lg:px-78">
          <ProductList title="Featured Products" items={products} />
        </div>
      </Container>
    </div>
  );
};
export default HomePage;
