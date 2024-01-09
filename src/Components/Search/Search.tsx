import { ChangeEvent, useContext } from "react";
import Context, { ContextType } from "../../Context/Context";
import { ReactSVG } from "react-svg";
import "./Search.scss";

const Search = () => {
  const { searchValue, updateSearchValue } = useContext(Context) as ContextType;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e.target.value);
  };

  return (
    <>
      <div className="input-wrapper">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleChange}
          name="searchInput"
        />
        <div className="input-icon">
          <ReactSVG
            src="/images/search.svg"
            style={{ fill: '#ffffff' }}
            className="icon"
          />
        </div>
      </div>
    </>
  );
};

export default Search;
