import React, { useState, useContext, useEffect } from "react";
// import PeopleList from "./peopleList";
import { userContext } from "./GlobalVariable";
import firebase from "./firebase";
import PeopleData from "./table";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [people, setPeople] = useState([]);
  const [updateBtn, setupdateBtn] = useState(false);
  const [docId, setDocId] = useState("");
  const context = useContext(userContext);
  const dispatch = context.method;
  const db = firebase.firestore();

  useEffect(() => {
    const fetchData = async () => {
      await db
        .collection("people")
        .onSnapshot((data) => {
          setPeople(data.docs.map((doc) => ({ ...doc.data(), uId: doc.id })));
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({
      type: "add",
      data: people,
    });
  }, [people]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const db = firebase.firestore();

    db.collection("people")
      .doc()
      .set({
        firstName: firstName,
        lastName: lastName,
        dateTime: firebase.firestore.Timestamp.now().toDate(),
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    setFirstName("");
    setlastName("");

    dispatch({
      type: "add",
      fName: firstName,
      lName: lastName,
    });
  };

  const handleText = (e) => {
    const identify = e.target.getAttribute("id");
    if (identify == "firstName") {
      setFirstName(e.target.value);
    } else {
      setlastName(e.target.value);
    }
  };

  const handleEdit = (data) => {
    console.log("method called", data);
    setupdateBtn(true);
    setFirstName(data.first);
    setlastName(data.last);
    setDocId(data.docId);
  };

  const handleUpdate = () => {
    db.collection("people").doc(docId).set({
      firstName: firstName,
      lastName: lastName,
    });
  };

  const handleCancel = () => {
    setFirstName("");
    setlastName("");
    setupdateBtn(false);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div className="from w-50">
          <from className="form-horizontal">
            <div className="form-group my-3">
              {/* <label className="control-label col-sm-2 my-2">First Name:</label> */}
              <div class="col-sm-10">
                <input
                  placeholder="First Name"
                  id="firstName"
                  className="form-control"
                  onChange={handleText}
                  value={firstName}
                ></input>
              </div>
            </div>

            <div className="form-group my-3">
              {/* <label className="control-label col-sm-2 my-2">Last Name:</label> */}
              <div class="col-sm-10">
                <input
                  placeholder="Last Name"
                  id="lastName"
                  className="form-control"
                  onChange={handleText}
                  value={lastName}
                ></input>
              </div>
            </div>

            <div class="form-group my-3">
              <div class="col-sm-offset-2 col-sm-10">
                {updateBtn ? (
                  <div>
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      className="btn m-2 btn-outline-danger"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </from>
        </div>

        <div className="people-list flex-fill p-4">{/* <PeopleList /> */}</div>
      </div>
      <PeopleData method={handleEdit} />
    </div>
  );
};

export default Form;
