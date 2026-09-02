import { useEffect, useState } from "react";

const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController()
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/recipes",{
        signal: controller.signal
      });
      const data = await response.json();
      setData(data.recipes);
    }
    fetchData();

    return () => {
        controller.abort()
    }
  }, []);

  return (
    <div>
      {data.map((recipe) => (
        <div key={recipe.id}>{recipe.cuisine}</div>
      ))}
    </div>
  );
};

export default Recipes;
