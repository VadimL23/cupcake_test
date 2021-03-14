import qs from "query-string";

export const DOMAIN ="http://localhost:3000/";

class ApiCall{
    constructor(domain){
        this.domain=domain;
        }
    
    async perform(url){
        console.log(`${this.domain}${url}`);
       const request = await fetch(`${this.domain}${url}`, {
           headers:{
           "Content-Type":"application/json"}
                
       });
        return await request.json();
    } 
       
    async get(path, searchParams){
       return await this.perform(`${path}?${qs.stringify(searchParams)}`);
        
    }
    
    
    /*async subscribe(path,searchParams) {
  let response = await this.perform(`${path}?${qs.stringify(searchParams)}`);

  if (response.status === 502) {

    await this.subscribe();
  } else if (response.status !== 200) {
  
    alert(response.statusText);
     await new Promise(resolve => setTimeout(resolve, 1000));
    await this.subscribe();
  } else {
    let message = await response.text();
    alert(message);
 
    await this.subscribe();
  }
}*/


    
  }

export default new ApiCall(DOMAIN);