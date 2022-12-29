import Home from "./components/home/home";
import DataProvider from "./components/Context/DataContext";

function App() {
  return (
    <DataProvider>
  <Home />
  </DataProvider>
  );
}


export default App;
