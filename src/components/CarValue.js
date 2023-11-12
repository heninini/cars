import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );

  return <div className="car-value">TotalCost ${totalCost}</div>;
}
export default CarValue;
