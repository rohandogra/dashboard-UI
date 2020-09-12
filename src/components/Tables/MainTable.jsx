import React, { useState } from "react";
import { forwardRef } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import MaterialTable, { MTableBodyRow } from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import Toolbar from "@material-ui/core/Toolbar";

import Search from "@material-ui/icons/Search";

import Button from "@material-ui/core/Button";
import StarSharpIcon from "@material-ui/icons/StarSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import PowerOutlinedIcon from "@material-ui/icons/PowerOutlined";
import SportsMotorsportsOutlinedIcon from "@material-ui/icons/SportsMotorsportsOutlined";
import DuoOutlinedIcon from "@material-ui/icons/DuoOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import { Divider } from "@material-ui/core";
import ClearAllSharpIcon from "@material-ui/icons/ClearAllSharp";

const ITEM_HEIGHT = 100;

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },
  btn1: {
    width: "70px",
    marginRight: "15px",
    padding: "0",
  },
  btn2: {
    width: "80px",
    marginRight: "15px",
    borderColor: "#ECECEC",
    color: "#B2B2B2",
  },
  btn3: {
    marginRight: "15px",
    color: "#B2B2B2",
  },
  btn4Divider: {
    borderLeft: "1px solid #EBEBEB",
    height: "80%",
    position: "absolute",
    left: "35%",
  },
  MoreHorizIcon: {
    cursor: "pointer",
  },
}));

function MainTable() {
  const columns = [
    { title: "Things to do", field: "name" },
    {
      title: "Owner",
      field: "owner",
      lookup: { true: "Active", false: "Not Active" },
      render: (rowData) => (
        <AccountCircleSharpIcon
          fontSize="large"
          style={
            rowData.owner === "true" ? { color: "#000000" } : { color: "gray" }
          }
        />
      ),
    },
    {
      title: "Status",
      field: "status",
      lookup: {
        1: (
          <div
            style={{
              backgroundColor: "#FDAB3D",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Working on it
          </div>
        ),
        2: (
          <div
            style={{
              backgroundColor: "#E2445B",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Stuck
          </div>
        ),
        3: (
          <div
            style={{
              backgroundColor: "#01C875",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Done
          </div>
        ),
        4: (
          <div
            style={{
              backgroundColor: "#579BFB",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Waiting for review
          </div>
        ),
      },
      headerStyle: {
        backgroundColor: "#F5F6F8",
      },
    },
    {
      title: "Due date",
      field: "date",
      type: "date",
      headerStyle: {
        backgroundColor: "#F5F6F8",
      },
    },
    {
      title: "Priority",
      field: "priority",
      lookup: {
        1: (
          <div
            style={{
              backgroundColor: "#333333",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Urgent
          </div>
        ),
        2: (
          <div
            style={{
              backgroundColor: "#E2445B",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            High
          </div>
        ),
        3: (
          <div
            style={{
              backgroundColor: "#794CCB",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Medium
          </div>
        ),
        4: (
          <div
            style={{
              backgroundColor: "#579BFC",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Low
          </div>
        ),
      },
    },
  ];
  const data = [
    {
      name: "Mehmet",
      owner: "true",
      status: "1",
      date: "15.01.1970",
      priority: "2",
    },
    {
      name: "Mehmet",
      owner: "false",
      status: "3",
      date: "15.01.1970",
      priority: "4",
    },
  ];

  const columnsDone = [
    { title: "Done", field: "name" },
    {
      title: "Owner",
      field: "owner",
      lookup: { true: "Active", false: "Not Active" },
      render: (rowData) => (
        <AccountCircleSharpIcon
          fontSize="large"
          style={
            rowData.owner === "true" ? { color: "#000000" } : { color: "gray" }
          }
        />
      ),
    },
    {
      title: "Status",
      field: "status",
      lookup: {
        1: (
          <div
            style={{
              backgroundColor: "#FDAB3D",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Working on it
          </div>
        ),
        2: (
          <div
            style={{
              backgroundColor: "#E2445B",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Stuck
          </div>
        ),
        3: (
          <div
            style={{
              backgroundColor: "#01C875",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Done
          </div>
        ),
        4: (
          <div
            style={{
              backgroundColor: "#579BFB",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Waiting for review
          </div>
        ),
      },
      headerStyle: {
        backgroundColor: "#F5F6F8",
      },
    },
    {
      title: "Due date",
      field: "date",
      type: "date",
      headerStyle: {
        backgroundColor: "#F5F6F8",
      },
    },
    {
      title: "Priority",
      field: "priority",
      lookup: {
        1: (
          <div
            style={{
              backgroundColor: "#333333",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Urgent
          </div>
        ),
        2: (
          <div
            style={{
              backgroundColor: "#E2445B",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            High
          </div>
        ),
        3: (
          <div
            style={{
              backgroundColor: "#794CCB",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Medium
          </div>
        ),
        4: (
          <div
            style={{
              backgroundColor: "#579BFC",
              color: "#fff",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Low
          </div>
        ),
      },
    },
  ];

  const [row, setRows] = useState(data);
  const [rowDone, setRowsDone] = useState(data);

  const [column, setColumns] = useState(columns);
  const [columnDone, setColumnsDone] = useState(columnsDone);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElDone, setAnchorElDone] = useState(null);
  const open = Boolean(anchorEl);
  const openDone = Boolean(anchorElDone);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    if (value === null || "") return setAnchorEl(null);
    setColumns([...column, { field: value.toLowerCase(), title: value }]);
    setAnchorEl(null);
  };
  const handleClickDone = (event) => {
    setAnchorElDone(event.currentTarget);
  };

  const handleCloseDone = (value) => {
    if (value === null || "") return setAnchorEl(null);
    setColumnsDone([
      ...columnDone,
      { field: value.toLowerCase(), title: value },
    ]);
    setAnchorEl(null);
  };
  const DrageState = { row: -1, dropIndex: -1 };
  return (
    <div style={{ width: "100%", marginTop: "2rem" }}>
      <Toolbar>
        <div className="d-flex w-100">
          <div className="mr-auto">
            <h4>
              Web design <StarSharpIcon style={{ color: "#F3F4F4" }} />
            </h4>
            <h7>Add board description</h7>
          </div>
          <div className="">
            <Button className={classes.btn1} size="large">
              <AccountCircleSharpIcon fontSize="large" />
              {/* <VpnLockOutlinedIcon className={classes.btn1Icon} /> */}
            </Button>
            <Button className={classes.btn2} variant="outlined">
              <PowerOutlinedIcon />
              /0
            </Button>
            <Button className={classes.btn2} variant="outlined">
              <SportsMotorsportsOutlinedIcon />
              /0
            </Button>
            <Button className={classes.btn3} variant="outlined">
              <DuoOutlinedIcon
                style={{ color: "#0A98FD", paddingRight: "4px" }}
              />
              Start Zoom call
            </Button>
            <Button className="mr-3" variant="outlined">
              <SupervisorAccountOutlinedIcon />
              /1
              <span className={classes.btn4Divider}></span>
              <span className="pl-3"> Activites/0</span>
            </Button>
            <MoreHorizIcon className={classes.MoreHorizIcon} fontSize="large" />
          </div>
        </div>
      </Toolbar>
      <div className="d-flex">
        <MaterialTable
          icons={tableIcons}
          title={`Main Table`}
          columns={column.map((c) => ({ ...c, tableData: undefined }))}
          data={row}
          style={{
            boxShadow: "none",
            width: "95%",
            marginTop: "1rem",
            marginLeft: "2rem",
            padding: "0",
          }}
          options={{
            paging: false,
            rowStyle: {
              backgroundColor: "#F5F6F8",
            },
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setRows([...data, newData]);
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setRows([...dataUpdate]);
                  resolve();
                }, 100);
              }),
          }}
          components={{
            Row: (props) => (
              <MTableBodyRow
                {...props}
                draggable="true"
                onDragStart={(e) => {
                  console.log("onDragStart");
                  DrageState.row = props.data.tableData.id;
                }}
                onDragEnter={(e) => {
                  e.preventDefault();
                  if (props.data.tableData.id !== DrageState.row) {
                    DrageState.dropIndex = props.data.tableData.id;
                  }
                }}
                onDragEnd={(e) => {
                  console.log("onDragEnd", e.currentTarget);
                  // if (DrageState.dropIndex != -1) {{

                  //     index: DrageState.row,
                  //     dropIndex: DrageState.dropIndex,
                  // }
                  // }
                  DrageState.row = -1;
                  DrageState.dropIndex = -1;
                }}
              />
            ),
          }}
        />
        <Button
          style={{ height: "30px", marginTop: "100px" }}
          onClick={handleClick}
        >
          <AddCircleRoundedIcon />
        </Button>
        <div>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={() => setAnchorEl(null)}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={() => handleClose("Status")}>
              <ClearAllSharpIcon fontSize="Large" className="mr-3" />
              Status
            </MenuItem>
            <MenuItem onClick={() => handleClose("Text")}>
              <TextFieldsIcon fontSize="Large" className="mr-3" /> Text
            </MenuItem>
            <MenuItem onClick={() => handleClose("People")}>
              <SupervisedUserCircleOutlinedIcon
                fontSize="Large"
                className="mr-3"
              />
              People
            </MenuItem>
            <MenuItem onClick={() => handleClose("Timeline")}>
              <TimelineOutlinedIcon fontSize="Large" className="mr-3" />
              Timeline
            </MenuItem>
            <MenuItem onClick={() => handleClose("Date")}>
              <EventAvailableOutlinedIcon fontSize="Large" className="mr-3" />
              Date
            </MenuItem>
            <MenuItem onClick={() => handleClose("Tags")}>
              <LocalOfferOutlinedIcon fontSize="Large" className="mr-3" />
              Tags
            </MenuItem>
            <MenuItem onClick={() => handleClose("Numbers")}>
              <DialpadOutlinedIcon fontSize="Large" className="mr-3" />
              Numbers
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => setAnchorEl(null)}>More columns</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="d-flex mt-5">
        <MaterialTable
          icons={tableIcons}
          // title={`Main Table`}
          columns={columnDone.map((c) => ({ ...c, tableData: undefined }))}
          data={rowDone}
          style={{
            boxShadow: "none",
            width: "95%",
            marginTop: "1rem",
            marginLeft: "2rem",
            padding: "0",
          }}
          options={{
            paging: false,
            rowStyle: {
              backgroundColor: "#F5F6F8",
            },
            toolbar: false,
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setRowsDone([...data, newData]);
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setRowsDone([...dataUpdate]);
                  resolve();
                }, 100);
              }),
          }}
          components={{
            Row: (props) => (
              <MTableBodyRow
                {...props}
                draggable="true"
                onDragStart={(e) => {
                  console.log("onDragStart");
                  DrageState.row = props.data.tableData.id;
                }}
                onDragEnter={(e) => {
                  e.preventDefault();
                  if (props.data.tableData.id !== DrageState.row) {
                    DrageState.dropIndex = props.data.tableData.id;
                  }
                }}
                onDragEnd={(e) => {
                  console.log("onDragEnd", e.currentTarget);
                  // if (DrageState.dropIndex != -1) {{

                  //     index: DrageState.row,
                  //     dropIndex: DrageState.dropIndex,
                  // }
                  // }
                  DrageState.row = -1;
                  DrageState.dropIndex = -1;
                }}
              />
            ),
          }}
        />
        <Button
          style={{ height: "30px", marginTop: "100px" }}
          onClick={handleClickDone}
        >
          <AddCircleRoundedIcon />
        </Button>
        <div>
          <Menu
            id="long-menu"
            anchorEl={anchorElDone}
            keepMounted
            open={openDone}
            onClose={() => setAnchorElDone(null)}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={() => handleCloseDone("Status")}>
              <ClearAllSharpIcon fontSize="Large" className="mr-3" />
              Status
            </MenuItem>
            <MenuItem onClick={() => handleCloseDone("Text")}>
              <TextFieldsIcon fontSize="Large" className="mr-3" /> Text
            </MenuItem>
            <MenuItem onClick={() => handleCloseDone("People")}>
              <SupervisedUserCircleOutlinedIcon
                fontSize="Large"
                className="mr-3"
              />
              People
            </MenuItem>
            <MenuItem onClick={() => handleCloseDone("Timeline")}>
              <TimelineOutlinedIcon fontSize="Large" className="mr-3" />
              Timeline
            </MenuItem>
            <MenuItem onClick={() => handleCloseDone("Date")}>
              <EventAvailableOutlinedIcon fontSize="Large" className="mr-3" />
              Date
            </MenuItem>
            <MenuItem onClick={() => handleCloseDone("Tags")}>
              <LocalOfferOutlinedIcon fontSize="Large" className="mr-3" />
              Tags
            </MenuItem>
            <MenuItem onClick={() => handleCloseDone("Numbers")}>
              <DialpadOutlinedIcon fontSize="Large" className="mr-3" />
              Numbers
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => setAnchorEl(null)}>More columns</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default MainTable;
