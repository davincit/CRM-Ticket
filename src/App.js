import { Layout } from "./layout/Layout";
import { Entry } from "./pages/Entry";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
