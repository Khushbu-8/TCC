import { useParams } from "react-router-dom";
import { HeroSection } from "../../components/UI";

const ProductsPage = () => {
  const { category } = useParams();

  return (
    <main className="pt-0">
      <h1 className="text-3xl font-bold">
        {category ? category.replace(/-/g, " ") : "All Products"}
      </h1>

     
    </main>
  );
};

export default ProductsPage;
