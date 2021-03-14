export function trunc(arg){
   arg  = (typeof arg == "number") ?  ((Math.trunc(arg*100))/100): "";
    return arg;
}

export function div(a,b){
   return ((a!=0) && (b!=0)) ? a/b:0;
}