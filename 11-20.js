
function firstLast6(num){
    if (num[0] == 6 || num[num.length - 1] == 6){
        return true;
    }else {
        return false;
    }
}

function has23(array){
    if (array[0] == 2 || array[1] == 2 || array[0] == 3 || array [1] == 3){
        return true;
    }else {
        return false;
    }
}


function fix_23(array){
    if (array[0] == 2 && array[1] == 3){
        array[1] = 0;
    }
    if (array[1] == 2 && array[2] == 3){
        array[2] = 0;
    }
    return array;
}

function countYZ(word){
    var count = 0;
    var word = word.toLowerCase();
    for (var i = 0; i <= word.length; i++) {
        if (word[i] == " " && (word[i - 1] == "y" || word[i - 1] == "z")) {
            count++;
        }
    }
    if (word[word.length - 1] == "y" || word[word.length - 1] == "z"){
        count ++;
    }
    return count;
}

function endOther(st1, st2){
    var st1 = st1.toLowerCase();
    var st2 = st2.toLowerCase();
    var match = st2.endsWith(st1);
    var match2 = st1.endsWith(st2);
    if (match == true || match2 == true){
        return true;
    }else{
        return false;
    }
}

function starOut(words){
    var result = "";
    var wordsLower = words.toLowerCase();
    for (var i = 0; i < words.length; i ++){
        if (words[i] !== "*" && words[i + 1] !== "*" && words[i - 1] !== "*"){
            result = result + words[i];
        }
    }
    return result;
}

function getSandwich(string){
    var bread1 = string.indexOf("bread");
    var bread2 = string.lastIndexOf("bread");
    var result = "";
    if (bread1 == -1){
        return result;
    }
    if  (bread1 == bread2){
         return result;
    }
    return string.substring(bread1 + 5, bread2);
}

function canBalance(array){
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < array.length; i++) {
        sum1 += array[i];
        for (var x = i + 1; x < array.length; x++) {
            sum2 += array[x];
        }
        if (sum1 === sum2) {
            return true;
        }

        sum2 = 0;
    }
    return false;
}

function countClumps(array){
    var count = 0;
    for (var i = 0; i < array.length; i ++) {
        if (array[i] === array[i + 1] && array[i] !== array[i + 2]) {
            count++;
        }
    }
    return count;
}

function evenlySpaced(a,b,c){
    if ((a - b === b - c) || (b - a === a - c) || (a - c === c - b) || (b - c === c - a)){
        return true;
    }else{
        return false;
    }
}



function tester(){
    document.getElementById("output").innerHTML = firstLast6(1, 2, 6);
    document.getElementById("output2").innerHTML = has23(3,1);
    document.getElementById("output3").innerHTML = fix_23(2,3,1);
    document.getElementById("output4").innerHTML = countYZ(abcyz);
    document.getElementById("output5").innerHTML = endOther(abc, habc);
    document.getElementById("output6").innerHTML = starOut(stri*ngy);
    document.getElementById("output7").innerHTML = getSandwich(breadcheesebread);
    document.getElementById("output8").innerHTML = canBalance(1,1,1,3,4);
    document.getElementById("output9").innerHTML = countClumps(1,1,1,3,3,1);
    document.getElementById("output10").innerHTML = evenlySpaced(4, 2, 4);
}

