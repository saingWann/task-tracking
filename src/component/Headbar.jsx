<AlignLeft />;
import { Plus, Search, AlignLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleFormState } from "../redux/formSlice";
import { toggleSideBar } from "../redux/showMenu";

const Headbar = () => {
  const dispatch = useDispatch();

  const handleSideBar = () => {
    dispatch(toggleSideBar());
  };
  const handleMenu = () => {
    dispatch(toggleFormState());
  };

  return (
    <div className="lg:w-[85%] md:w-[75%] w-full ms-auto  p-4 bg-white shadow-md max-sm:sticky top-0">
      <form className="flex justify-between items-center gap-5 w-full">
        <button type="button" className="lg:hidden md:hidden sm:block">
          <AlignLeft onClick={handleSideBar} size={25} strokeWidth={2} />
        </button>
        <div
          className="p-3 flex
            bg-gray-200 rounded-full flex-grow"
        >
          <label htmlFor="search">
            <Search />
          </label>
          <input
            type="text"
            id="search"
            className="bg-transparent focus:outline-none pl-2 flex-grow max-sm:w-[40px]"
            placeholder="Search"
          />
        </div>
        <button
          type="button"
          onClick={handleMenu}
          className="px-4 py-2 bg-green-500 text-white rounded-full font-bold flex items-center gap-2 active:scale-95 hover:bg-green-600"
        >
          <p className="max-sm:hidden block">Add</p>
          <Plus size={20} strokeWidth={2} />
        </button>
      </form>
    </div>
  );
};

export default Headbar;
