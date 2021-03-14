import {types, flow} from "mobx-state-tree";
import getCall from '../getApi'; 


const  Rates = types.model("Rates",{
    RUB: types.optional(types.number,0),
    USD: types.optional(types.number,0),
    EUR: types.optional(types.number,0) 
})

const RootRates = types.model("RootRates",{
    
  rates:types.optional(Rates,{}),
  base: types.optional(types.string,""),
  timestamp: types.optional(types.number,0),
  date: types.optional(types.string,"")
    
})



const RatesStore = types.model(
"RatesStore",{
rates_first:types.optional(RootRates,{}),
rates_second:types.optional(RootRates,{}),
rates_third:types.optional(RootRates,{})
}
)
.actions(self=>{
    return {
        load_first: flow(function* (){
              self.rates_first = yield getCall.get('api/v1/first/poll');
            self.load_first();
                }),
        load_second: flow(function* (){
              self.rates_second = yield getCall.get('api/v1/second/poll');
            self.load_second();
                }),
         load_third: flow(function* (){
              self.rates_third = yield getCall.get('api/v1/third/poll');
             self.load_third();
                }),
        

         
         
         
        afterCreate(){
            self.load_first();
            self.load_second();
            self.load_third();
        }
        
    }
    
})
export default RatesStore;


/*     subscribe:flow(function()* {
        let response = this.load_first();

  if (response.status == 502) {
     this.subscribe();
  } else if (response.status != 200) {
   
    console.log(response.statusText);
   
   // await new Promise(resolve => setTimeout(resolve, 1000));
    //await subscribe();
  
        
    } else {
    // Получим и покажем сообщение
    self.rates_first = 
    showMessage(message);
    // И снова вызовем subscribe() для получения следующего сообщения
    await subscribe();
  }
}),*/