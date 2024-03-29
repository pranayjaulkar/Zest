import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";
import getColors from "@/actions/getColors";
import getCategory from "@/actions/getCategory";
import Container from "@/components/ui/Container";
import Billboard from "@/components/Billboard";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import Filter from "@/app/category/[categoryId]/components/Filter";
import MobileFilter from "@/app/category/[categoryId]/components/MobileFilter";

interface CategoryProps {
  params: { categoryId: string };
  searchParams: { colorId: string; sizeId: string };
}
export const revalidate = 0;

const Category: React.FC<CategoryProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <MobileFilter sizes={sizes} colors={colors} />
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Category;
