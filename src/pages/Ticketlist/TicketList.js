import { Button, Grid } from "@material-ui/core";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import TicketListcomponent from "../../components/TicketListcomponent/TicketListcomponent";
import { useState, useEffect } from "react";
import ticket from "../../components/TicketTabel/DUMMY.json";

export default function TicketList() {
  const [str, setStr] = useState("");
  const [tickets, setTickets] = useState(ticket);

  useEffect(() => {}, [str, tickets]);
  const handleChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTickets(value);
  };

  const searchTickets = (str) => {
    const displayTicket = ticket.filter((t) =>
      t.Subject.toLowerCase().includes(str.toLowerCase())
    );

    setTickets(displayTicket);
  };

  return (
    <Grid container>
      <Breadcrumb page="TicketList" />

      <Grid xs={12}>
        <TicketListcomponent
          change={handleChange}
          data={str}
          tickets={tickets}
        />
      </Grid>
    </Grid>
  );
}
