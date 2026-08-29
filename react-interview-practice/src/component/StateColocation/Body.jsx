import UseMemoImp from "../useMemoHook/UseMemoImp";
import Search from "./Search";
import Parent from "../CallbackvsMemo/Parent"

const Body = () => {
  return (
    <div>
        <Parent/>
       <UseMemoImp/>
       const [search,setSearch] = useState()
      <Search />
    </div>
  );
};

export default Body;
