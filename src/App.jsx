import { AppContextProvider } from "./contexts/AppContext";
import Home from "./Home";

function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App;
