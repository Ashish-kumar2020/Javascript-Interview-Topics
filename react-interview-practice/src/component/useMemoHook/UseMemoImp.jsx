import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 },
];

const UseMemoImp = () => {
  const [productList, setProductList] = useState(products);
  const [discount, setDiscount] = useState(40);
  const [theme, setTheme] = useState("dark");

  const totalCost = useMemo(() => {
    const totalPrice = productList.reduce(
      (acc, curr) => acc + curr.price,
      0
    );

    return totalPrice - (totalPrice * discount) / 100;
  }, [productList, discount]);

  return (
    <div>
      <ul>
        {productList.map((ele) => (
          <li key={ele.id}>
            {ele.name} - ${ele.price}
          </li>
        ))}
      </ul>

      <p>Discount: {discount}%</p>
      <p>Total Cost: ${totalCost}</p>

      <button onClick={() => setDiscount((prev) => prev + 10)}>
        Increase Discount
      </button>

      <button onClick={() => setTheme((prev) =>
        prev === "dark" ? "light" : "dark"
      )}>
        Toggle Theme
      </button>
    </div>
  );
};

export default UseMemoImp;