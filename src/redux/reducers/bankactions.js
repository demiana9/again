 export const dipost='discount'
 export const withdrow='add'


 export const add =(amount)=>{
    return{
        type:withdrow,
     payload: amount }  
 }

 export const discount=(amount)=>{
    return{
        type:dipost ,
    payload:amount}}