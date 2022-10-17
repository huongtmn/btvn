// Nhập số nguyên và lữu trữ chúng
var numberList = [];

function addNumber() {
    var intNumber = +document.getElementById("intNumber").value;

    numberList.push(intNumber);

    document.getElementById("number-list").innerHTML = numberList;   
}

// 1/ Tổng các số nguyên dương
function calc1() {
    var sum = 0;

    for(var i=0; i < numberList.length; i++){
        if(numberList[i]>0){
            sum = numberList[i] + sum;
            document.getElementById("result1").innerHTML = sum;
        }
    }
}

// 2/ Tổng các số nguyên dương
function calc2() {
    var count = 0;

    for(var i=0; i < numberList.length; i++){
        if(numberList[i]>0){
            count = count + 1;
            document.getElementById("result2").innerHTML = count;
        }
    }
}   

// 3/ Tìm số nhỏ nhất trong mảng
function calc3() {
    var min = numberList[0];

    for(var i=0; i < numberList.length; i++){
        if(numberList[i] <= min){
            min = numberList[i];
            document.getElementById("result3").innerHTML = min;
        } 
    }
}

// 4/ Tìm số dương nhỏ nhất trong mảng -- NOT DONE
function calc4() {
    var positiveList = [];
    var min = positiveList[0];

    var isPositive = false;

    for(var i=0; i < numberList.length; i++){
        if(numberList[i]>0){
            positiveList.push(numberList[i]);
            isPositive = true;     
        }
    }

    for(var k=0; k < positiveList.length; k++) {
        if(positiveList[k] < min){
            min = positiveList[k];
            document.getElementById("result4").innerHTML = min;
        }
    } 

    if(isPositive === false) {
        document.getElementById("mess").innerHTML = "Không có số nguyên dương trong danh sách";
        return;
    }
}

// 5/ Tìm số chẵn cuối cùng
function calc5() {
    var lastEvenNumber;
    
    for(var i=0; i < numberList.length; i++){
        if(numberList[i] % 2 == 0){
            lastEvenNumber = numberList[i];
            document.getElementById("result5").innerHTML = lastEvenNumber;
        }
    }
}

// 6/ Đổi chỗ - NOT DONE
function calc6() {
    var index1 = +document.getElementById("index1").value;
    var index2 = +document.getElementById("index2").value;   
    var newNumberList = [];
    var temp;

    console.log(index1, index2);
    for(i = index1; i < numberList.length; i++) {
        if(i == index1){
            temp = numberList[index1];
            numberList[index1] = numberList[index2];
            numberList[index2] = temp;
            break;
        }    
    }
    document.getElementById("result6").innerHTML = numberList;
}
