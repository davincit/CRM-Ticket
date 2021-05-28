import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import tickets from "../../components/TicketTabel/DUMMY.json";
import MessageHistory from "../../components/MessageHistory/MessageHistory";
import UpdateTicket from "../../components/UpdateTicket/UpdateTicket";

const useStyle = makeStyles(() => ({
  info: {
    marginTop: "150px",
    marginLeft: "0px",
    maxWidth: "300px",
  },
  btn: { marginTop: "150px" },
  buttonstyle: {
    position: "relative",
    color: "primary",
  },
}));
export default function Ticket() {
  const classes = useStyle();
  const ticket = tickets[0];

  const handleOnChange = (e) => {};
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Grid container spacing={3}>
      <Breadcrumb page="Ticket" />
      <Grid xs={6} className={classes.info}>
        <Typography variant="h6">
          Subject: <Typography> {ticket.Subject}</Typography>
        </Typography>
        <Typography variant="h6">
          Status: <Typography> {ticket.status}</Typography>
        </Typography>
        <Typography variant="h6">
          Date: <Typography> {ticket.OpenedDate}</Typography>
        </Typography>
      </Grid>
      <Grid xs={6} className={classes.btn}>
        <Button
          className={classes.buttonstyle}
          variant="contained"
          color="primary"
        >
          Close Ticket
        </Button>
      </Grid>
      <Grid xs={12} sm={6} style={{ width: "300px" }}>
        <MessageHistory msg={ticket.History} />
      </Grid>
      <Grid sm={6}>
        <UpdateTicket change={handleOnChange} submit={handleOnSubmit} />
      </Grid>
    </Grid>
  );
}
