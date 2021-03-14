import React from "react";
import Cell from "../Cell";

export default function Rows(props){
    
    const min = Math.min(props.first,props.second,props.third);
    return(
          <tr>
                <Cell cell_name="th" value={props.row_name} />
                <Cell cell_name="td" value={props.first} active={(props.first === min)}/>
                <Cell cell_name="td" value={props.second} active={(props.second === min)}/>
                <Cell cell_name="td" value={props.third} active={(props.third === min)}/>
            </tr>
    );
    
}