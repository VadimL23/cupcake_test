
import React from "react";
import './App.css';
import useStore from "./hooks/useStore";
import "materialize-css";
import Table from "./components/Table";
import {observer} from "mobx-react-lite";

function App() {
const {rates} = useStore();



    return (

    <div className="container ">
          <div className="row">
          <div className="col s12 offset-s0 mt-5">
         <Table/> 
     
            </div>
          </div>
    </div>
  );
}

export default observer(App);
