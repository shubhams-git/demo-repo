class User {
    constructor(name) {
        this.name = name;
        this.kidneys = [{ "healthy": true }, { "healthy": true }];
    }
    getKidneys() {
        let returnStr = `User "${this.name}" has ${this.kidneys.length} kidneys. \n`
        if (this.kidneys.length > 0) {
            for (let i = 0; i < this.kidneys.length; i++) {
                if (this.kidneys[i].healthy) {
                    returnStr += `Kidney ${i + 1} is healthy. \n`;
                } else {
                    returnStr += `Kidney ${i + 1} is unhealthy. \n`;
                }
            }
        }
        return returnStr;
    }
    addKidney() {
        this.kidneys.push({ "healthy": true });
    }
    replaceKidney() {
        for (let i = 0; i < this.kidneys.length; i++) {
            if (this.kidneys[i].healthy == false) {
                this.kidneys[i].healthy = true;
                break;
            }
        }
    }
    removeKidney() {
        if (this.kidneys.length > 0) {
            for (let i = 0; i < this.kidneys.length; i++) {
                if (this.kidneys[i].healthy == false) {
                    this.kidneys.splice(i, 1);
                    return;
                }
            }
            this.kidneys.pop();
            return;
        }
    }
    makeItUnhealthy(index){
        if(0<=index && index<this.kidneys.length){
            this.kidneys[index].healthy = false;
        }
    }

    getName(){
        return this.name.toString();
    }
}

const express = require("express")
const app = express();
app.use(express.json())

let u1 = new User("Shubham");
let u2 = new User("Sourav");
let u3= new User("Baweja");
let users = [u1,u2,u3]

app.get("/",(req,res)=>{
    let result = "";
    for(let i =0;i<users.length;i++){
        result+=users[i].getKidneys();
        
    }
    res.send(result);
    console.log(result);
})

app.post("/addKidney",(req,res)=>{
    let username = req.query.username.toString();
    for(let i=0;i<users.length;i++){
        if(username==users[i].getName()){
            users[i].addKidney();
            res.send("The kidney has been added");
            console.log("The kidney has been added");
            return;
        }
    }
    res.send("The kidney could not be added.");
    console.log("The kidney could not be added.");
})

app.listen(3000);