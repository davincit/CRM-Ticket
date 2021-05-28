import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TicketTabel from "../../components/TicketTabel/TicketTable";
import React from "react";

const useStyle = makeStyles(() => ({
  buttonstyle: {
    position: "relative",
    color: "primary",
  },
}));
export default function TicketListcomponent({ change, tickets, data }) {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={6}
        style={{ margin: "auto", justifyItems: "center" }}
      >
        <Button
          className={classes.buttonstyle}
          variant="outlined"
          color="primary"
        >
          Add New Ticket
        </Button>
      </Grid>
      <Grid xs={12} sm={6}>
        <Typography>Search</Typography>
        <TextField
          type="search"
          variant="outlined"
          onChange={change}
          style={{ width: "400px" }}
        />
      </Grid>
      <Grid xs={12} style={{ margin: "auto" }}>
        <TicketTabel tickets={tickets} />
      </Grid>
    </Grid>
  );
}
