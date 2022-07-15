function ex1() {
    var name = "Tuấn";
    var annual = 97;
    var Dependent = 4;
    tax = annual - 4 - (Dependent * 1.6);
    if (tax <= 60) {
        tax *= 0.05;
    } 
    if (tax > 60 && tax <= 120) {
        tax = (tax * 0.05) + (tax - 60)* 0.1;
    } 
    if (tax > 120 && tax <= 210) {
        tax = (tax * 0.05) + (tax * 0.1) + (tax - 120) * 0.15;
    } 
    if (tax > 210 && tax <= 384) {
        tax = (tax * 0.05) + (tax * 0.1) + (tax * 0.15) + (tax - 210) * 0.2;
    } 
    if (tax > 384 && tax <= 642) {
        tax = (tax * 0.05) + (tax * 0.1) + (tax * 0.15) + (tax * 0.2) + (tax - 384) * 0.25;
    } 
    if (tax > 642 && tax <= 960) {
        tax = (tax * 0.05) + (tax * 0.1) + (tax * 0.15) + (tax * 0.2) + (tax * 0.25) + (tax - 642) * 0.3;
    } 
    if (tax > 960) {
        tax = (tax * 0.05) + (tax * 0.1) + (tax * 0.15) + (tax * 0.2) + (tax * 0.25) + (tax* 0.3) + (tax - 960) * 0.35;
    }
    console.log("Thuế thu nhập cá nhận:", tax);
}
ex1()

function ex2() {
    var customercode = "KH1";
    var customertype = "DN";
    var billProcess = 4.5;
    var basic = 20.5;
    var luxury = 7.5;
    var channel = 4;
    var bill = basic + billProcess + (7.5 * channel)
    console.log("Mã khác hàng:", customercode, "Tiền cáp:", bill)
}
ex2()