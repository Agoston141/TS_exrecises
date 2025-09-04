const createNumber = (value:number):number=>{
    return Math.floor(Math.random()*value)+1;
}

const setNumberList = (value:number,v:number,crateNumber:(v:number)=>number):number[] =>{
   const t:number[] =[];
   for(let i = 0; i <value; i++){
        t.push(crateNumber(v));
   }
   return t;
}

function setNumberList2(count:number,v:number,createNumber:(v:number)=>number):number[]{
    return Array.from({length:count},(item)=> createNumber(v));
}

const numbers = setNumberList2(100,50,createNumber);
console.log(numbers);

type stat = Record<number,number>;

const statistic: stat = {};
//statistic["1000"] = 59
for(let v of numbers){
    if(v in statistic){
        statistic[v] = 1;
    }
}
