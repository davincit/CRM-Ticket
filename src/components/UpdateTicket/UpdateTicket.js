import { Button, TextareaAutosize, Typography } from "@material-ui/core";
export default function UpdateTicket({ handleOnChange, handleOnSubmit }) {
  return (
    <div style={{ padding: "10px", marginTop: "0px" }}>
      <form onSubmit={handleOnSubmit}>
        <Typography variant="h6">Reply</Typography>
        <Typography variant="subtitle1">
          Pleasereply your message here or update your ticket
        </Typography>
        <TextareaAutosize
          rowsMax={5}
          aria-label="maximum height"
          style={{ width: "600px", height: "110px" }}
          onChange={handleOnChange}
          //  value={ticket.detail}
          name="detail"
        />
        <Button variant="contained" color="primary">
          Reply
        </Button>
      </form>
    </div>
  );
}
