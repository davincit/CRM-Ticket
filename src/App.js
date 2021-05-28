import { Layout } from "./layout/Layout";
import { Entry } from "./pages/Entry";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddTicketPage from "./pages/AddTicket/AddTicketPage";
import "./App.css";
import TicketList from "./pages/Ticketlist/TicketList";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Dashboard /> */}
        {/* <Entry /> */}
        {/* <AddTicketPage /> */}
        <TicketList />
      </Layout>
    </div>
  );
}

export default App;
