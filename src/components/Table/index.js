import React from "react";
import Row from "../Row";
import Cell from "../Cell";
import useStore from "../../hooks/useStore";
import {observer} from "mobx-react-lite";
import {trunc, div} from "../../services";



 function Table(props){
    
   const {rates} = useStore();
   const {rates_first, rates_second, rates_third}=rates.toJSON();
   const {RUB:r_f, USD:u_f, EUR:e_f} = rates_first.rates;
   const {RUB:r_s, USD:u_s, EUR:e_s} = rates_second.rates;
   const {RUB:r_t, USD:u_t, EUR:e_t} = rates_third.rates;
  
     
     
const rows =[
     {name:"RUB/USD",
     first:trunc(div(r_f,u_f)),
     second:trunc(div(r_s,u_s)),
     third:trunc(div(r_t,u_t)),
     },
    
    {name:"RUB/EUR",
     first:trunc(div(r_f,e_f)),
     second:trunc(div(r_s,e_s)),
     third:trunc(div(r_t,e_t)),
     },
       {name:"EUR/USD",
     first:trunc(div(e_f,u_f)),
     second:trunc(div(e_s,u_s)),
     third:trunc(div(e_t,u_t)),
     },
     
 ];
     
 
     console.log(rates_first.rates.EUR);
     console.log(rates_second);
     console.log(rates_third);
     
    return (
     <table>
        <tbody>
            
        <tr>
              <Cell cell_name="th" value="Pair name/market"/>
              <Cell cell_name="th" value="First"/>
              <Cell cell_name="th" value="Second"/>
              <Cell cell_name="th" value="Third"/>
        </tr>
            
    {rows.map((el,i)=>
           <Row 
             row_name ={el.name}
             first = {el.first}
             second = {el.second}
             third={el.third}
             key={i}
             />)}
    
    </tbody>
        
    </table>
    
        
    );
    
    
}

export default observer(Table);


   /*        {rows.map((el)=>
           <Row 
             row_name ={el.name}
             first = {el.first}
             second = {el.second}
             third={el.third}
             key={el.id}
             />
           )} */

/*

     <Row 
             row_name ={"first"}
             first = {RUB}
             second = {USD}
             third={EUR}
       
             />
*/