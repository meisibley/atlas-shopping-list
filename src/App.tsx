import { Provider } from "react-redux";
import { store } from "./ShoppingList/store";
import { ShoppingList } from "./ShoppingList/ShoppingList";

function App() {
  return (
    <Provider store={store}>
      <ShoppingList />
    </Provider>
  );
}

export default App;
