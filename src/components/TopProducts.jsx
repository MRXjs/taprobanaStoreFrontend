import axios from "axios";
import { useEffect, useState } from "react";

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("https://taprobanastore.ytdonline.com/api/v1/products?keyword")
        .then((res) => {
          setProducts(res.data.products);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <section className="w-full max-h-[20vh] flex flex-col p-10">
      <h1 className="text-3xl text-white text-left mx-12 my-8 font-aquire">
        Featured Products{" "}
        <span className="w-24 h-2 bg-gradient-to-tr from-yellow-400 to-blue-800 block"></span>
      </h1>
      <div className="flex flex-row justify-center items-center flex-wrap mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            id={product.id}
            className="w-[300px] h-[340px] text-center m-2 bg-black rounded-md"
          >
            <img
              className="w-36 mx-auto"
              key={product.id}
              src={product.images[0].url}
              alt={`product id: ${product.id} image`}
            />
            <h1 key={product.id}>{product.name}</h1>
            <h3 key={product.id}>{product.numOfReviews} / 5</h3>
            <h4 key={product.id}>{`$${product.price}`}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProducts;
