import './App.css';
import Header from "./component/header";
import Form from "./component/form";
import PeopleData from "./component/table";
import { People, Reducer, userContext } from "./component/GlobalVariable";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';




function App() {
  const [peopleObj, dispatch] = useReducer(Reducer, People);
  const { List } = peopleObj;
  return (
    <div className="App">
      <userContext.Provider value={{list: List, method: dispatch}}>
        <Header />
        <Form />
        {/* <PeopleData /> */}
      </userContext.Provider>
    </div>
  );
}

export default App;
