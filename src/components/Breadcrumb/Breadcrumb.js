import { Breadcrumbs, Link, makeStyles, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyle = makeStyles(() => ({
  icon: {},
  link: {
    padding: "0px",
    marginLeft: "15px",
  },
}));
export default function Breadcrumb({ pagename }) {
  const classes = useStyle();
  const handleClick = () => {};
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator="-"
      style={{ marginTop: "100px" }}
    >
      <Link color="secondary" href="/" onClick={handleClick} underline="none">
        {/* <HomeIco     /> */}
        <Typography className={classes.link}>Home</Typography>
      </Link>
      <Link
        color={`${pagename ? "inherit" : "secondary"}`}
        underline="none"
        href="/"
        onClick={handleClick}
      >
        {pagename}
      </Link>
    </Breadcrumbs>
  );
}
