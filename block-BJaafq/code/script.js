function addNum (numA, numB)
{
    return numA + numB;
}

function expect(){
    
}

function testAdd (){
    let result = addNum(2,4);
    let expected = 6;
    expected(result).toEqual(expected);
}