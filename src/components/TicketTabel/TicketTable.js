import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    maxWidth: 800,
    margin: "auto",
    marginBottom: "35px",
    backgroundColor: "",
  },
  Paper: {
    boxShadow: "#137986",
  },
});
export default function TicketTabel({ tickets }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              {" "}
              <Typography variant="h6" color="">
                #{" "}
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" color="primary">
                Subject
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" color="primary">
                Status
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" color="primary">
                OpenedDate
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Typography variant="subtitle1" color="inherit">
                  {row.id}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle1" color="inherit">
                  {row.Subject}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle1" color="inherit">
                  {row.status}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle1" color="inherit">
                  {row.OpenedDate}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
