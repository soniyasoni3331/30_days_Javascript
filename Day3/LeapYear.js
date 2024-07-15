let year = 2020;
if((year % 100 == 0) ? (year % 400== 0) : (year % 4 === 0)){
    console.log("The year is Leap year");
}else{
    console.log("The year is not a Leap year");
}