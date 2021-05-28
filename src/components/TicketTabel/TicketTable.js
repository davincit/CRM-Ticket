import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
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
            <TableCell>#</TableCell>
            <TableCell align="center">Subjects</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">OpenedDate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.Subject}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.OpenedDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
