import { Layout } from "./layout/Layout";
import { Entry } from "./pages/Entry";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddTicketPage from "./pages/AddTicket/AddTicketPage";
import "./App.css";
import TicketList from "./pages/Ticketlist/TicketList";
import Ticket from "./pages/Ticket/Ticket";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Dashboard /> */}
        {/* <Entry /> */}
        {/* <AddTicketPage /> */}
        {/* <TicketList /> */}
        <Ticket />
      </Layout>
    </div>
  );
}

export default App;
