const names =["Shubham","SOurav","simran","siDhhartha","monu","gony","tony", "shubhangi"]
const names1 = [1,2,3,4,5]
if(typeof names == "string"){
    const ans = names.filter((i)=>i.toLowerCase().startsWith("s"));
}else{
    throw new Error(`Not the correct type: typeof names = ${typeof names}`);
}
console.log(ans);