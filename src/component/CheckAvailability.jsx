import useOnline from "../customHooks/useOnline";
import useCounter from "../customHooks/useCounter";
const CheckAvailability = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={increment} className="btn btn-success m-2">
        Increment
      </button>
      <button onClick={decrement} className="btn btn-danger m-1">
        Decrement
      </button>
      <span className="badge text-bg-light m-2">Counter:: {count}</span>
      <br />
      <br />
      <br />
      {useOnline() ? "Status: 🟢 - Online" : "Status: 🔴 - Offline"}
    </div>
  );
};

export default CheckAvailability;
