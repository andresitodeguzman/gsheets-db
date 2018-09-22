export class GSheetsDB {
  
  constructor(id,key){
    this.id = id;
    this.key = key;
  }
  
  errorObject(c,t,m){
    if(c === "") c = 500;
    if(t === "") t = "Unknown Error";
    if(m === "") m = "An unknown error occurred";
    return {
      "code":c,
      "title":t,
      "message":m
    };
  }
  
  fetchFromCloud(){
    return new Promise((resolve, reject)=>{
       if(this.id === "") reject(errorObject());
    });
  }
  
}