// Nhập số nguyên và lữu trữ chúng
var numberList = [];

function addNumber() {
    var intNumber = +document.getElementById("intNumber").value;

    numberList.push(intNumber);

    document.getElementById("number-list").innerHTML = numberList;   
}

// 1/ Tổng các số dương trong mảng - DONE
function calc1() {
    var sum = 0;

    for(var i=0; i < numberList.length; i++){
        if(numberList[i]>0){
            sum = numberList[i] + sum;
            document.getElementById("result1").innerHTML ="Tổng các số dương trong mảng là: " + sum;
        }
    }
}

// 2/ Đếm có bao nhiêu số dương trong mảng - DONE
function calc2() {
    var count = 0;

    for(var i=0; i < numberList.length; i++){
        if(numberList[i]>0){
            count = count + 1;
            document.getElementById("result2").innerHTML ="Số lượng số dương trong mảng là: " + count;
        }
    }
}   

// 3/ Tìm số nhỏ nhất trong mảng -- DONE
function calc3() {
    var min = numberList[0];

    for(var i=0; i < numberList.length; i++){
        if(numberList[i] <= min){
            min = numberList[i];
            document.getElementById("result3").innerHTML ="Số nhỏ nhẩt trong mảng là: " + min;
        } 
    }
}

// 4/ Tìm số dương nhỏ nhất trong mảng -- NOT DONE

for(var i=0; i < numberList.length; i++){
    if(numberList[i]>0){
        positiveList.push(numberList[i]); 
        document.getElementById("result4").innerHTML = positiveList;
    }
}
console.log(positiveList);   

for(var i=0; i < numberList.length; i++){
    for(var k=0; k < positiveList.length; k++){
        if(positiveList[k] <= min){
            min = positiveList[k];
            console.log(min);
            document.getElementById("result4").innerHTML = min;
        }
    }
}

// 5/ Tìm số chẵn cuối cùng trong mảng, nếu ko có số chẵn thì trả về -1 -- DONE
function calc5() {
    var lastEvenNumber;
    
    for(var i=0; i < numberList.length; i++){
        if(numberList[i] % 2 !== 0){
            document.getElementById("result5").innerHTML ="Trong mảng không có số chẵn, trả về giá trị mặc định là: " + -1;
        }
        if(numberList[i] % 2 == 0){
            lastEvenNumber = numberList[i];
            document.getElementById("result5").innerHTML ="Số chẵn cuối cùng trong mảng là: " + lastEvenNumber;
        }
    }
}

// 6/ Đổi chỗ -- NOT DONE
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
            newNumberList.push(numberList[i]);
            break;
        }    
    }
    document.getElementById("result6").innerHTML = newNumberList;
}

// 7/ Sắp xếp mảng theo thứ tự tăng dần -- DONE
function calc7() {

    var sortAZ = false;

    for(var i=0; i < numberList.length; i++){
        if(numberList[i] < numberList[i+1]){
            document.getElementById("result7").innerHTML ="Mảng khi được sắp xếp theo thứ tự tăng dần là: " + numberList;
        }
        for(var k=numberList.length-1; k>0; k--){
            if(numberList[k] < numberList[k-1]){
                var temp = numberList[k];
                numberList[k] = numberList[k-1];
                numberList[k-1] = temp;
                sortAZ = false;
                document.getElementById("result7").innerHTML ="Mảng khi được sắp xếp theo thứ tự tăng dần là: " + numberList;
            } 
        }
    }

}

// 8/ Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1. -- NOT DONE
function calc8() {

}

// 9/ Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên? - DONE
function calc9() {
    var count = 0;
    
    var isInt = false;

    for(var i=0; i < numberList.length; i++){
        if(Number.isInteger(numberList[i]) == true){
            count = count + 1;
            isInt = true;
            document.getElementById("result9").innerHTML = "Trong mảng có " + count + " số nguyên";
        }
    }
    if(isInt == false){
        document.getElementById("mess9").innerHTML = "Trong mảng không có số nguyên";
    }
}

// 10/ So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn. -- DONE
function calc10() {
    var countPositive = 0;
    var countNegative = 0;
    
    for(var i=0; i < numberList.length; i++){
        if(numberList[i] > 0){
            countPositive = countPositive + 1;
            console.log(countPositive);
        } 
        if(numberList[i] < 0){
            countNegative = countNegative + 1;
            console.log(countNegative);
        }
        if(countPositive == countNegative){
            document.getElementById("result10").innerHTML = "Số lượng số dương và số âm bằng nhau";
        } else if (countPositive > countNegative){
            document.getElementById("result10").innerHTML = "Số lượng số dương nhiều hơn";
        } else {
            document.getElementById("result10").innerHTML = "Số lượng số âm nhiều hơn";
        }
    }
}