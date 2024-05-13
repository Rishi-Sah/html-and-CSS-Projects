const student={
    name: "Rishi Sah",
    rollnum:100,
    calcTax(){
        let tax=100;
        console.log("Tax is 10%");
    }

}

const st1={
    name:"Ram",
    rollnum:200
}
st1.__proto__=student;