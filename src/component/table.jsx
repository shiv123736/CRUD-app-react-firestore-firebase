import React, { useContext } from "react";
import { userContext } from "./GlobalVariable";
import firebase from "./firebase";

const PeopleData = (props) => {
  const context = useContext(userContext);
  const List = context.list;
  const db = firebase.firestore();
  const editMethod = props.method;

  const handleDelete = (uid) => {
    console.log("deleted");
    db.collection("people")
      .doc(uid)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const handleUpdate = (obj) => {
    editMethod(obj);
  };

  return (
    <div className="container my-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {List?.map((item) => (
            <tr>
              <th scope="row">{item.uId}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>
                <button
                  className="m-2 btn btn-outline-warning"
                  onClick={() => handleUpdate({docId: item.uId, first: item.firstName, last: item.lastName})}
                >
                  Edit
                </button>
                <button
                  className="m-2 btn btn-outline-danger"
                  onClick={() => handleDelete(item.uId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeopleData;
