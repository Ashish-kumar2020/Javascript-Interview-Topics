import { useState } from "react";


const Search = () => {
  const [search,setSearch] = useState("");
  console.log(search,setSearch)
  return (
    <div>Search</div>
  )
}

export default Search