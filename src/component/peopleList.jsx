import React, { useContext } from "react";
import { userContext } from "./GlobalVariable";

const PeopleList = () => {
  const context = useContext(userContext);
  const List = context.list;
  const dispatch = context.method;
  console.log(List);
  return (
    <div>
      List:
      <div>
        {List.map((item) => (
          <div class="list-group my-2">
            <a href="#" class="list-group-item text-dark">
              {item.firstName} {item.lastName}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
