import { Provider } from "react-redux";
import "./App.css";
import DashBoard from "./Components/DashBoard";
import store from "./Data/Store";

const App = () => {
  return (
    <Provider store={store}>
      <DashBoard />
    </Provider>
  );
};

export default App;
