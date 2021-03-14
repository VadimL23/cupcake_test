import {types} from "mobx-state-tree";
import RatesStore from "./rates";


const RootStore = types.model(
"RootStore",{
        rates:types.optional(RatesStore,{})
          }
    
);

export default RootStore;