import { Provider } from "react-redux";

import { ShoppingList } from "./ShoppingList/ShoppingList";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ShoppingList />
      </PersistGate>
    </Provider>
  );
}

export default App;
