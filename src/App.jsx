import { AppContextProvider } from "./Contexts/AppContext";
import Home from "./Home";

function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App;
