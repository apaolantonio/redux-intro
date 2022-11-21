import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/slices/counter";
import { Navigate, useNavigate } from "react-router-dom";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleReduxSlices = () => {
    navigate("/redux-slice");
  };
  const handleRtkQuery = () => {
    navigate("/rtk-query");
  };

  return (
    <div className="App">
      <h3>REDUX</h3>
      <h1>Count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>

      <div className="card">
        <button onClick={handleReduxSlices}>REDUX SLICES</button>
        <button onClick={handleRtkQuery}>RTK QUERY</button>
      </div>
    </div>
  );
}

export default App;
