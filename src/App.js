import { Layout } from "./layout/Layout";
import { Entry } from "./pages/Entry";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddTicketPage from "./pages/AddTicket/AddTicketPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Dashboard /> */}
        {/* <Entry /> */}
        <AddTicketPage />
      </Layout>
    </div>
  );
}

export default App;
