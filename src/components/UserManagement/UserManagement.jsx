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

const UserManagement = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  const [addUser, setAddUser] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);
  const [viewUser, setViewUser] = useState(false);

  const [clientsToShow, setClientsToShow] = useState([]);
  const [rolesToShow, setRolesToShow] = useState([]);

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

  // const [overlay, setOverlay] = useState(false);
  return (
    <>
    {( addUser || updateUser || viewUser || roleManagement ) && <div className={classes.overlay} onClick={()=>{
      setAddUser(false);
      setViewUser(false);
      setRoleManagement(false);
      return setUpdateUser(false);
    }}></div>}
      {addUser && (
        <div className={classes.popup}>
          <h5>Add User Details</h5>
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
              <label htmlFor="">Phone Number</label>
              <input
                onChange={(e) => {
                  return setNewUser((prevState) => ({
                    ...prevState,
                    phone: e.target.value,
                  }));
                }}
                type="text"
                placeholder="Type phone number"
                name=""
                id=""
              />
            </span>
            {/* <span>
              <label htmlFor="">Designation</label>
              <select name="" id="">
                <option value="">Select Designation</option>
                <option value="">Designation 1</option>
                <option value="">Designation 2</option>
                <option value="">Designation 3</option>
              </select>
            </span>
            <span>
              <label htmlFor="">Organization</label>
              <input
                type="text"
                placeholder="Type organization name"
                name=""
                id=""
              />
            </span>
            <span style={{ opacity: "0", pointerEvents: "none" }}>
              <label htmlFor="">----</label>
              <input type="text" placeholder="----" name="" id="" />
            </span> */}
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
                  value="Tata_Chemicals_Limited"
                >
                  Tata Chemicals Limited
                </option>
                <option
                  onClick={(e) => {
                    return setClientsToShow([...clientsToShow, e.target.value]);
                  }}
                  value="Tata_Steel_Limited"
                >
                  Tata Steel Limited
                </option>
                <option
                  onClick={(e) => {
                    return setClientsToShow([...clientsToShow, e.target.value]);
                  }}
                  value="Adani_Enterprises"
                >
                  Adani Enterprises
                </option>
              </select>
            </span>
            <span
              style={{
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "flex-end",
              }}
            >
              {clientsToShow.length > 0
                ? clientsToShow.map((val, idx) => {
                    return <p id={idx}>{val}</p>;
                  })
                : ""}
            </span>
            <span style={{ opacity: "0", pointerEvents: "none" }}>
              <label htmlFor="">----</label>
              <input type="text" placeholder="----" name="" id="" />
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
                  value="Admin"
                >
                  Admin
                </option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Approver"
                >
                  Approver
                </option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Business_SPOC"
                >
                  Business SPOC
                </option>
              </select>
            </span>
            <span
              style={{
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "flex-end",
              }}
            >
              {rolesToShow.length > 0
                ? rolesToShow.map((val, idx) => {
                    return <p id={idx}>{val}</p>;
                  })
                : ""}
            </span>
            <span style={{ opacity: "0", pointerEvents: "none" }}>
              <label htmlFor="">----</label>
              <input type="text" placeholder="----" name="" id="" />
            </span>
          </section>
          <span>
            <PurpleButton
              onClick={() => {
                setNewUserRow(true);
                setAddUser(false);
              }}
            >
              Create
            </PurpleButton>
            <WhiteButton
              onClick={() => {
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
          <h5>Update User Details</h5>
          <section>
            <span>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Harsh" name="" id="" />
            </span>
            <span>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="accounts@tcs.com" name="" id="" />
            </span>
            <span>
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder="1234567890" name="" id="" />
            </span>
            {/* <span>
              <label htmlFor="">Designation</label>
              <select name="" id="">
                <option value="">Admin</option>
                <option value="">Designation 1</option>
                <option value="">Designation 2</option>
                <option value="">Designation 3</option>
              </select>
            </span>
            <span>
              <label htmlFor="">Organization</label>
              <input
              disabled
                type="text"
                placeholder="TCS"
                name=""
                id=""
              />
            </span>
            <span style={{ opacity: "0", pointerEvents: "none" }}>
              <label htmlFor="">----</label>
              <input type="text" placeholder="----" name="" id="" />
            </span> */}

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
                  value="Tata_Chemicals_Limited"
                >
                  Tata Chemicals Limited
                </option>
                <option
                  onClick={(e) => {
                    return setClientsToShow([...clientsToShow, e.target.value]);
                  }}
                  value="Tata_Steel_Limited"
                >
                  Tata Steel Limited
                </option>
                <option
                  onClick={(e) => {
                    return setClientsToShow([...clientsToShow, e.target.value]);
                  }}
                  value="Adani_Enterprises"
                >
                  Adani Enterprises
                </option>
              </select>
            </span>
            <span
              style={{
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "flex-end",
              }}
            >
              {clientsToShow.length > 0
                ? clientsToShow.map((val, idx) => {
                    return <p id={idx}>{val}</p>;
                  })
                : ""}
              <p>Adani_Total_Gas_Ltd</p>
            </span>
            <span style={{ opacity: "0", pointerEvents: "none" }}>
              <label htmlFor="">----</label>
              <input type="text" placeholder="----" name="" id="" />
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
                  value="Admin"
                >
                  Admin
                </option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Approver"
                >
                  Approver
                </option>
                <option
                  onClick={(e) => {
                    return setRolesToShow([...rolesToShow, e.target.value]);
                  }}
                  value="Business_SPOC"
                >
                  Business SPOC
                </option>
              </select>
            </span>
            <span
              style={{
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "flex-end",
              }}
            >
              {rolesToShow.length > 0
                ? rolesToShow.map((val, idx) => {
                    return <p id={idx}>{val}</p>;
                  })
                : ""}
              <p>Admin</p>
            </span>
            <span style={{ opacity: "0", pointerEvents: "none" }}>
              <label htmlFor="">----</label>
              <input type="text" placeholder="----" name="" id="" />
            </span>
          </section>
          <span>
            <PurpleButton
              onClick={() => {
                return setUpdateUser(false);
              }}
            >
              Update
            </PurpleButton>
            <WhiteButton
              onClick={() => {
                return setUpdateUser(false);
              }}
            >
              Close
            </WhiteButton>
          </span>
        </div>
      )}
      {viewUser && (
        <div className={classes.popup}>
          <h5>View User Details</h5>
          <section>
            <span>
              <label htmlFor="">Name</label>
              <input disabled type="text" placeholder="Harsh" name="" id="" />
            </span>
            <span>
              <label htmlFor="">Email</label>
              <input
                disabled
                type="text"
                placeholder="accounts@tcs.com"
                name=""
                id=""
              />
            </span>
            <span>
              <label htmlFor="">Phone Number</label>
              <input
                disabled
                type="text"
                placeholder="1234567890"
                name=""
                id=""
              />
            </span>
            {/* <span>
              <label htmlFor="">Designation</label>
              <select disabled name="" id="">
                <option value="">Admin</option>
                <option value="">Designation 1</option>
                <option value="">Designation 2</option>
                <option value="">Designation 3</option>
              </select>
            </span>
            <span>
              <label htmlFor="">Organization</label>
              <input
              disabled
                type="text"
                placeholder="TCS"
                name=""
                id=""
              />
            </span>
            <span style={{ opacity: "0", pointerEvents: "none" }}>
              <label htmlFor="">----</label>
              <input type="text" placeholder="----" name="" id="" />
            </span> */}

            <span>
              <label htmlFor="">Client Assigned</label>
              <select disabled name="" id="">
                <option value="">Select Client</option>
                <option value="">Client 1</option>
                <option value="">Client 2</option>
                <option value="">Client 3</option>
              </select>
            </span>

            <span
              style={{
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "flex-end",
              }}
            >
              <p>Tata_Chemicals_Limited</p>
              <p>Adani_Ports_Limited</p>
              <p>Adani_Enterprises</p>
            </span>

            <span style={{ opacity: "0", pointerEvents: "none" }}>
              <label htmlFor="">----</label>
              <input type="text" placeholder="----" name="" id="" />
            </span>

            <span>
              <label htmlFor="">Role Assigned</label>
              <select disabled name="" id="">
                <option value="">Select Role</option>
                <option value="">Role 1</option>
                <option value="">Role 2</option>
                <option value="">Role 3</option>
              </select>
            </span>
            <span
              style={{
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "flex-end",
              }}
            >
              <p>COP_Executive</p>
              <p>Admin</p>
              <p>Business_User</p>
            </span>
            <span style={{ opacity: "0", pointerEvents: "none" }}>
              <label htmlFor="">----</label>
              <input type="text" placeholder="----" name="" id="" />
            </span>
          </section>
          <span>
            <PurpleButton
              customStyle={{ opacity: "0.5" }}
              onClick={() => {
                return setViewUser(false);
              }}
            >
              Update
            </PurpleButton>
            <WhiteButton
              onClick={() => {
                return setViewUser(false);
              }}
            >
              Close
            </WhiteButton>
          </span>
        </div>
      )}

      <div
        style={roleManagement ? { right: "55%" } : { right: "0" }}
        onClick={() => {
          // setOverlay((prevState) => {
          //   return !prevState;
          // });
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
      </div>

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
                    <td>{val==1 && "Dashboard"}{val==2 && "Clients"}
                    {val==3 && "User Management"}{val==4 && "Masters"}
                    {val==5 && "Transactions"}{val==6 && "Others"}</td>
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
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
            {newUserRow && (
              <tr>
                <td>{newUser.name}</td>
                <td>{newUser.email}</td>
                <td>{newUser.phone}</td>
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
                  <DeleteForeverIcon style={{ cursor: "pointer", color: "red" }}/>
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
                  <td>{val.Phone}</td>
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
                    <DeleteForeverIcon style={{ cursor: "pointer", color: "red" }}/>
                  
                    {/* <DeleteForeverIcon
                      style={{ cursor: "pointer", color: "#C24200" }}
                    /> */}
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
