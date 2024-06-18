import React from "react";
import { useState } from "react";
import classes from "./UserManagement.module.css";
import SearchIcon from "@mui/icons-material/Search";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import PurpleButton from "../UI/PurpleButton";
import WhiteButton from "../UI/WhiteButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const UserManagement = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  const [addUser, setAddUser] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);
  const [viewUser, setViewUser] = useState(false);

  const [clientsToShow, setClientsToShow] = useState([]);
  const [rolesToShow, setRolesToShow] = useState([]);
  const [branchToShow, setBranchToShow] = useState([]);

  const users = [
    {
      Name: "Ganesh Gupta",
      Email: "ganesh.gupta@in.gt.com",
      Phone: "9154789326",
    },
    {
      Name: "Aarav Ahuja",
      Email: "aarav.ahuja@in.gt.com",
      Phone: "9345617890",
    },
    {
      Name: "Aditi Arora",
      Email: "aditi.arora@in.gt.com",
      Phone: "9764321089",
    },
    {
      Name: "Deepak Dhawan",
      Email: "deepak.dhawan@in.gt.com",
      Phone: "9234567891",
    },
    {
      Name: "Gaurav Gupta",
      Email: "gaurav.gupta@in.gt.com",
      Phone: "9876543120",
    },
    {
      Name: "Harshad Hariharan",
      Email: "harshad.hariharan@in.gt.com",
      Phone: "9456789012",
    },
    {
      Name: "Ishita Iyer",
      Email: "ishita.iyer@in.gt.com",
      Phone: "9543216789",
    },
    {
      Name: "Jaya Jain",
      Email: "jaya.jain@in.gt.com",
      Phone: "9123456780",
    },
    {
      Name: "Kavita Kapoor",
      Email: "kavita.kapoor@in.gt.com",
      Phone: "9642378015",
    },
    {
      Name: "Lakshmi Lakhera",
      Email: "lakshmi.lakhera@in.gt.com",
      Phone: "9934567821",
    },
  ];

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [newUserRow, setNewUserRow] = useState(false);

  const [roleManagement, setRoleManagement] = useState(false);

  const [newRoleAdding, setNewRoleAdding] = useState(false);
  const [newRoleCreated, setNewRoleCreated] = useState(false);

  const [addedUser, setAddedUser] = useState(false);

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      {(addUser || updateUser || viewUser || roleManagement) && (
        <div
          className={classes.overlay}
          onClick={() => {
            setAddUser(false);
            setViewUser(false);
            setRoleManagement(false);
            return setUpdateUser(false);
          }}
        ></div>
      )}
      {addUser && (
        <div className={classes.popup}>
          <h5>Add User</h5>
          <section>
            <span>
              <label htmlFor="">Name</label>
              <input
                onChange={(e) => {
                  return setNewUser((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }));
                }}
                type="text"
                placeholder="Type name here"
                name=""
                id=""
              />
            </span>
            <span>
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => {
                  return setNewUser((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }));
                }}
                type="text"
                placeholder="Type email here"
                name=""
                id=""
              />
            </span>

            <span>
              <label htmlFor="">Client Assigned</label>
              <select
                onChange={(e) => {
                  return setClientsToShow([...clientsToShow, e.target.value]);
                }}
                name=""
                id=""
              >
                <option value="">Select Client</option>
                <option
                  onClick={(e) => {
                    return setClientsToShow([...clientsToShow, e.target.value]);
                  }}
                  value="ABC_Motors_Limited"
                >
                  ABC Motors Limited
                </option>
                <option
                  onClick={(e) => {
                    return setClientsToShow([...clientsToShow, e.target.value]);
                  }}
                  value="ABC_Chemicals_Limited"
                >
                  ABC Chemicals Limited
                </option>
                <option
                  onClick={(e) => {
                    return setClientsToShow([...clientsToShow, e.target.value]);
                  }}
                  value="ABC_Steel_Limited"
                >
                  ABC Steel Limited
                </option>
                <option
                  onClick={(e) => {
                    return setClientsToShow([...clientsToShow, e.target.value]);
                  }}
                  value="DEF_Enterprises"
                >
                  DEF Enterprises
                </option>
              </select>
            </span>
            <span>
              <label htmlFor="">Role Assigned</label>
              <select
                onChange={(e) => {
                  return setRolesToShow([...rolesToShow, e.target.value]);
                }}
                name=""
                id=""
              >
                <option value="">Select Role</option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Executive"
                >
                  Executive
                </option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Manager"
                >
                  Manager
                </option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Client Executive"
                >
                  Client Executive
                </option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Client Manager"
                >
                  Client Manager
                </option>
              </select>
            </span>

            <span>
              <label htmlFor="">Branch Assigned</label>
              <select
                onChange={(e) => {
                  return setBranchToShow([...branchToShow, e.target.value]);
                }}
                name=""
                id=""
              >
                <option value="">Select Branch</option>
                <option
                  onClick={(e) => {
                    return setBranchToShow([...branchToShow, e.target.value]);
                  }}
                  value="Head Office"
                >
                  Head Office
                </option>
                <option
                  onClick={(e) => {
                    return setBranchToShow([...branchToShow, e.target.value]);
                  }}
                  value="Sahibabad Office"
                >
                  Sahibabad Office
                </option>
                <option
                  onClick={(e) => {
                    return setBranchToShow([...branchToShow, e.target.value]);
                  }}
                  value="Faridabad Office"
                >
                  Faridabad Office
                </option>
              </select>
            </span>

            <PurpleButton
              onClick={() => {
                return setAddedUser(true);
              }}
              style={{ height: "4rem!important" }}
            >
              Submit
            </PurpleButton>
          </section>

          {addedUser && (
            <table className={classes.table}>
              <tbody>
                <tr>
                  <th>Client</th>
                  <th>Branch</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>ABC Motors</td>
                  <td>Head Office</td>
                  <td>Manager</td>
                  <td>
                    <CloseOutlinedIcon style={{ color: "red" }} />
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          <span>
            <PurpleButton
              onClick={() => {
                setNewUserRow(true);
                setAddedUser(false);
                setAddUser(false);
              }}
            >
              Save
            </PurpleButton>
            <WhiteButton
              onClick={() => {
                setAddedUser(false);
                setAddUser(false);
              }}
            >
              Close
            </WhiteButton>
          </span>
        </div>
      )}
      {updateUser && (
        <div className={classes.popup}>
          <h5>Edit User</h5>
          <section style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
            <span>
              <label htmlFor="">Name</label>
              <input
                onChange={(e) => {
                  return setNewUser((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }));
                }}
                type="text"
                placeholder="Ganesh Gupta"
                name=""
                id=""
              />
            </span>
            <span>
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => {
                  return setNewUser((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }));
                }}
                type="text"
                placeholder="ganesh.gupta@in.gt.com"
                name=""
                id=""
              />
            </span>
            <span
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                gridTemplateColumns: "0.33fr 0.33fr",
                gridColumn: "span 2",
              }}
            >
              {/* <h6>Admin/\</h6> */}
              <label htmlFor="">Admin</label>
              <label htmlFor=""></label>
              <label
                style={{ display: "inline-flex", alignItems: "center" }}
                htmlFor="Yes"
              >
                <input
                  style={{ marginRight: "0.75rem" }}
                  type="radio"
                  name="Yes"
                  id="Yes"
                />
                Yes
              </label>
              <label
                style={{ display: "inline-flex", alignItems: "center" }}
                htmlFor="No"
              >
                <input
                  checked
                  style={{ marginRight: "0.75rem" }}
                  type="radio"
                  name="No"
                  id="No"
                />
                No
              </label>
            </span>
            <span>
              <label htmlFor="">Client Assigned</label>
              <select
                onChange={(e) => {
                  return setClientsToShow([...clientsToShow, e.target.value]);
                }}
                name=""
                id=""
              >
                <option value="">Select Client</option>
                <option
                  onClick={(e) => {
                    return setClientsToShow([...clientsToShow, e.target.value]);
                  }}
                  value="ABC_Chemicals_Limited"
                >
                  ABC Chemicals Limited
                </option>
                <option
                  onClick={(e) => {
                    return setClientsToShow([...clientsToShow, e.target.value]);
                  }}
                  value="ABC_Steel_Limited"
                >
                  ABC Steel Limited
                </option>
                <option
                  onClick={(e) => {
                    return setClientsToShow([...clientsToShow, e.target.value]);
                  }}
                  value="DEF_Enterprises"
                >
                  DEF Enterprises
                </option>
              </select>
            </span>
            <span>
              <label htmlFor="">Role Assigned</label>
              <select
                onChange={(e) => {
                  return setRolesToShow([...rolesToShow, e.target.value]);
                }}
                name=""
                id=""
              >
                <option value="">Select Role</option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Executive"
                >
                  Executive
                </option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Manager"
                >
                  Manager
                </option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Client Executive"
                >
                  Client Executive
                </option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Client Manager"
                >
                  Client Manager
                </option>
              </select>
            </span>
            <span>
              <label htmlFor="">Branch Assigned</label>
              <select
                onChange={(e) => {
                  return setBranchToShow([...branchToShow, e.target.value]);
                }}
                name=""
                id=""
              >
                <option value="">Select Branch</option>
                <option
                  onClick={(e) => {
                    return setBranchToShow([...branchToShow, e.target.value]);
                  }}
                  value="Head Office"
                >
                  Head Office
                </option>
                <option
                  onClick={(e) => {
                    return setBranchToShow([...branchToShow, e.target.value]);
                  }}
                  value="Sahibabad Office"
                >
                  Sahibabad Office
                </option>
                <option
                  onClick={(e) => {
                    return setBranchToShow([...branchToShow, e.target.value]);
                  }}
                  value="Faridabad Office"
                >
                  Faridabad Office
                </option>
              </select>
            </span>

            <PurpleButton
              onClick={() => {
                return setAddedUser(true);
              }}
              style={{ height: "4rem!important" }}
            >
              Submit
            </PurpleButton>
          </section>

          <div className={classes.search}>
            <SearchIcon className={classes.searchicon} />
            <input placeholder="Search Client" type="text" name="" id="" />
          </div>

          {
            <table className={classes.table}>
              <tbody>
                <tr>
                  <th>Client</th>
                  <th>Branch</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>ABC Motors</td>
                  <td>Faridabad</td>
                  <td>Manager</td>
                  <td>
                    <CloseOutlinedIcon style={{ color: "red" }} />
                  </td>
                </tr>
                <tr>
                  <td>ABC Chemical</td>
                  <td>Sahibabad</td>
                  <td>Manager</td>
                  <td>
                    <CloseOutlinedIcon style={{ color: "red" }} />
                  </td>
                </tr>
              </tbody>
            </table>
          }

          <span>
            <PurpleButton
              onClick={() => {
                setNewUserRow(true);
                // setAddUser(false);
                setUpdateUser(false);
              }}
            >
              Submit
            </PurpleButton>
            <WhiteButton
              onClick={() => {
                setUpdateUser(false);
              }}
            >
              Close
            </WhiteButton>
          </span>
        </div>
      )}
      {viewUser && (
        <div className={classes.popup}>
          <h5>View User</h5>
          <section>
            <span>
              <label htmlFor="">Name</label>
              <input
                onChange={(e) => {
                  return setNewUser((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }));
                }}
                type="text"
                placeholder="Ganesh Gupta"
                name=""
                id=""
                disabled
              />
            </span>
            <span>
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => {
                  return setNewUser((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }));
                }}
                type="text"
                placeholder="ganesh.gupta@in.gt.com"
                name=""
                id=""
                disabled
              />
            </span>
            <span
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                gridTemplateColumns: "0.33fr 0.33fr",
              }}
            >
              {/* <h6>Admin/\</h6> */}
              <label htmlFor="">Admin</label>
              <label htmlFor=""></label>
              <label
                style={{ display: "inline-flex", alignItems: "center" }}
                htmlFor="Yes"
              >
                <input
                  disabled
                  style={{ marginRight: "0.75rem" }}
                  type="radio"
                  name="Yes"
                  id="Yes"
                />
                Yes
              </label>
              <label
                style={{ display: "inline-flex", alignItems: "center" }}
                htmlFor="No"
              >
                <input
                  disabled
                  checked
                  style={{ marginRight: "0.75rem" }}
                  type="radio"
                  name="No"
                  id="No"
                />
                No
              </label>
            </span>
          </section>

          <div className={classes.search}>
            <SearchIcon className={classes.searchicon} />
            <input placeholder="Search Client" type="text" name="" id="" />
          </div>
          {
            <table className={classes.table}>
              <tbody>
                <tr>
                  <th>Client</th>
                  <th>Branch</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>ABC Motors</td>
                  <td>Faridabad</td>
                  <td>Manager</td>
                  <td>
                    <CloseOutlinedIcon style={{ color: "red" }} />
                  </td>
                </tr>
                <tr>
                  <td>ABC Chemical</td>
                  <td>Sahibabad</td>
                  <td>Manager</td>
                  <td>
                    <CloseOutlinedIcon style={{ color: "red" }} />
                  </td>
                </tr>
                {/* <tr>
            <td>ABC Motors</td>
            <td>Mumbai</td>
            <td>Manager</td>
            <td><CloseOutlinedIcon style={{color:'red'}}/></td>
          </tr> */}
              </tbody>
            </table>
          }

          <span>
            {/* <PurpleButton
            onClick={() => {
              setNewUserRow(true);
              // setAddUser(false);
              setUpdateUser(false)
            }}
          >
            Submit
          </PurpleButton> */}
            <WhiteButton
              onClick={() => {
                setViewUser(false);
              }}
            >
              Close
            </WhiteButton>
          </span>
        </div>
      )}

      {/* <div
        style={roleManagement ? { right: "55%" } : { right: "0" }}
        onClick={() => {
          
          return setRoleManagement((prevState) => {
            return !prevState;
          });
        }}
        className={classes.popup2}
      >
        {roleManagement ? (
          <KeyboardDoubleArrowRightIcon />
        ) : (
          <KeyboardDoubleArrowLeftIcon />
        )}
      </div> */}

      <div
        style={
          roleManagement
            ? { width: "55%" }
            : { opacity: "0", pointerEvents: "none", width: "0" }
        }
        className={classes.popup3}
      >
        <h1>Role Management</h1>
        <section>
          <span>
            <b>Roles</b>
            {newRoleAdding && (
              <>
                <input type="text" placeholder="New Role" name="" id="" />
                <PurpleButton
                  onClick={() => {
                    setNewRoleAdding(false);
                    return setNewRoleCreated(true);
                  }}
                >
                  <ArticleOutlinedIcon />
                  Save
                </PurpleButton>
              </>
            )}

            {!newRoleAdding && (
              <>
                {" "}
                <AddIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    return setNewRoleAdding(true);
                  }}
                />
                Add New Role
              </>
            )}
          </span>
          <main>
            <span>
              <input type="radio" name="Roles" id="Dashboard" />
              <label htmlFor="Dashboard">Admin</label>
            </span>
            <span>
              <input type="radio" name="Roles" id="Clients" />
              <label htmlFor="Clients">Business User</label>
            </span>
            <span>
              <input type="radio" name="Roles" id="User Management" />
              <label htmlFor="User Management">COE Lead</label>
            </span>
            <span>
              <input type="radio" name="Roles" id="Masters" />
              <label htmlFor="Masters">COE Executive</label>
            </span>
            <span>
              <input type="radio" name="Roles" id="Transactions" />
              <label htmlFor="Transactions">Supervisor</label>
            </span>
            <span>
              <input type="radio" name="Roles" id="Others" />
              <label htmlFor="Others">Manager</label>
            </span>
            {newRoleCreated && (
              <span>
                <input type="radio" name="Roles" id="NewRole" />
                <label htmlFor="NewRole">New Role</label>
              </span>
            )}
          </main>
        </section>
        <section>
          <span>
            <b>Role Assignment</b>
          </span>
          <table>
            <tbody>
              <tr>
                <th>Module</th>
                <th>C</th>
                <th>R</th>
                <th>U</th>
                <th>D</th>
                {/* <th>A</th> */}
              </tr>

              {arr.map((val, idx) => {
                return (
                  <tr id={idx}>
                    <td>
                      {val == 1 && "Dashboard"}
                      {val == 2 && "Clients"}
                      {val == 3 && "User Management"}
                      {val == 4 && "Masters"}
                      {val == 5 && "Transactions"}
                      {val == 6 && "Others"}
                    </td>
                    <td>
                      <input type="checkbox" checked name="" id="" />
                    </td>
                    <td>
                      <input type="checkbox" checked name="" id="" />
                    </td>
                    <td>
                      {val >= 3 ? (
                        <input type="checkbox" checked name="" id="" />
                      ) : (
                        <input type="checkbox" name="" id="" />
                      )}
                    </td>
                    <td>
                      {val >= 5 ? (
                        <input type="checkbox" checked name="" id="" />
                      ) : (
                        <input type="checkbox" name="" id="" />
                      )}
                    </td>
                    {/* <td>
                      <input type="checkbox" name="" id="" />
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>

      <div className={classes.management}>
        <div>
          <section>
            <input type="text" placeholder="Search Client" />
            <SearchIcon />
          </section>
          <p
            onClick={() => {
              setUpdateUser(false);
              setViewUser(false);
              return setAddUser(true);
            }}
            style={{ cursor: "pointer" }}
          >
            <AddIcon style={{ fontSize: "2.5rem" }} />
            Add User
          </p>
        </div>

        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              {/* <th>Phone Number</th> */}
              <th>Actions</th>
            </tr>
            {newUserRow && (
              <tr>
                <td>{newUser.name}</td>
                <td>{newUser.email}</td>
                {/* <td>{newUser.phone}</td> */}
                <td>
                  <VisibilityIcon
                    onClick={() => {
                      setAddUser(false);
                      setUpdateUser(false);
                      return setViewUser(true);
                    }}
                    style={{ cursor: "pointer", color: "#00ADA3" }}
                  />
                  <EditIcon
                    onClick={() => {
                      setAddUser(false);
                      setViewUser(false);
                      return setUpdateUser(true);
                    }}
                    style={{ cursor: "pointer", color: "#FFBB59" }}
                  />
                  {/* <DeleteForeverIcon
                    style={{ cursor: "pointer", color: "red" }}
                  /> */}
                  {/* <Switch
                    style={{ width: "70px", height: "30px!important" }}
                    defaultChecked
                    size="small"
                  /> */}

                  {/* <DeleteForeverIcon
                      style={{ cursor: "pointer", color: "#C24200" }}
                    /> */}
                </td>
              </tr>
            )}
            {users.map((val, idx) => {
              return (
                <tr id={idx}>
                  <td>{val.Name}</td>
                  <td>{val.Email}</td>
                  {/* <td>{val.Phone}</td> */}
                  <td>
                    <VisibilityIcon
                      onClick={() => {
                        setAddUser(false);
                        setUpdateUser(false);
                        return setViewUser(true);
                      }}
                      style={{ cursor: "pointer", color: "#00ADA3" }}
                    />
                    <EditIcon
                      onClick={() => {
                        setAddUser(false);
                        setViewUser(false);
                        return setUpdateUser(true);
                      }}
                      style={{ cursor: "pointer", color: "#FFBB59" }}
                    />
                    <label className={classes.switch}>
                      <input type="checkbox"/>
                      <span className={classes.slider}></span>
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <section className={classes.pagination}>
          <p>Showing 10 out of 160 rows</p>
          <div>
            <p>
              <KeyboardDoubleArrowLeftIcon />
              Previous
            </p>
            <span>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
            </span>

            <p>
              Next
              <KeyboardDoubleArrowRightIcon />
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserManagement;
