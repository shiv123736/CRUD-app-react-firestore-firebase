import React from "react";

export const userContext = React.createContext();

export const People = {
  List: [
    {
      firstName: "shivam",
      lastName: "dharmasya",
    },
    {
      firstName: "shivani",
      lastName: "mishra",
    },
  ],
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
      // console.log(action.data);
      return {
        ...state,
        // List: [
        //   ...state.List,
        //   { firstName: action.fName, lastName: action.lName },
        // ],
        List: action.data,
      };

    case "remove":
  }
};
