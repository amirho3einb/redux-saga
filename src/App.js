import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import PostSaga from "./components/postSaga";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostSaga />
      </div>
    </Provider>
  );
}

export default App;
