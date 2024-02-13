import CurrencyComponent from "./CurrencyComponent";
import SearchComponent from "./SearchComponent";

const Header = () => {
  return (
    <div className="h-[30px] rounded-xl flex justify-around m-auto">
      <CurrencyComponent />
      <SearchComponent />
    </div>
  );
};

export default Header;
