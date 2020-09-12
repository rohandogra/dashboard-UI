import React from "react";
import "./Navbar.scss";
import { Divider } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      //   marginLeft: theme.spacing(-4),
      width: "auto",
    },
    [theme.breakpoints.up("md")]: {
      //   marginLeft: theme.spacing(-4),
      width: "auto",
    },
  },
  searchIcon: {
    marginTop: "0.25rem",
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    color: "#AFB0B8",
  },

  inputInput: {
    marginTop: "0.5rem",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  MuiAccordionRounded: {
    boxShadow: "none",
    height: "50vh",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  getAppBtn: {
    marginTop: "2rem",
    padding: "14px",
  },
}));

function MainNav() {
  const classes = useStyles();
  return (
    <div className="asdsad d-flex align-content-end ">
      <div>
        <div className="mr-auto">
          <h5 className="p-3 ">Workspaces</h5>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Filter boards.."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.root}>
            <Accordion className={classes.MuiAccordionRounded}>
              <AccordionSummary
                expandIcon={
                  <AddCircleOutlineSharpIcon
                    onClick={(event) => event.stopPropagation()}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.AccordionSummary}
              >
                <FormControlLabel
                  aria-label="Acknowledge"
                  onClick={(event) => console.log(event)}
                  onFocus={(event) => event.stopPropagation()}
                  control={<ExpandMoreIcon />}
                  label="Main"
                />
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>Web design</li>
                  <li>bvghbhj</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="">
          <Divider />
          <h4 className="py-2">Dashboards</h4>
          <Divider />

          <Button
            color="inherit"
            variant="outlined"
            className={classes.getAppBtn}
          >
            Get the mobile app
          </Button>
        </div>
      </div>

      <Divider orientation="vertical" />
    </div>
  );
}

export default MainNav;
