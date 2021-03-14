import React from "react";
import s from "./cell.module.css";
import cn from "classnames";

export default function Cell(props){
    
  const style = cn({[s.active]:props.active});
  const cell = (props.cell_name === "th") ? (<th >{props.value}</th>):(<td className={style}>{props.value}</td>);

   return(
  <>
  {cell}
  </>
  );
}