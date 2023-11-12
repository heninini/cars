import { useDispatch, useSelector } from "react-redux";
import { changeTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const handleSearchTerm = (event) => {
    dispatch(changeTerm(event.target.value));
  };
  const searchTerm = useSelector((state) => {
    return state.searchTerm;
  });
  return (
    <div className="list-header">
      <h3 className="title is-3"> My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </div>
    </div>
  );
}
export default CarSearch;
