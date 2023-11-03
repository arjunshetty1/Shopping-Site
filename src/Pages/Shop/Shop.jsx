import { PRODUCTS } from "../../Products";
import Product from "./Product";
const Shop = () => {
  return (
    <div className="shop max-w-full">
      <div className="shop_title flex justify-center">
        <h1 className="text-3xl font-semibold mt-6">Random Shop</h1>
      </div>

      <div className="products flex flex-wrap justify-between gap-4 mt-10 px-4">
        {PRODUCTS.map((item) => {
          return <Product item={item} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
