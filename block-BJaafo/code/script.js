
function getName(firstName,lastName)
{
    let fullName = firstName + lastName;
    return fullName;
}
let nameFirst = 'Adi';
let nameLast = 'Pathak';

let finalName = getName(nameFirst,nameLast);
let wholeName = 'Aditya Pathak';
// Test 1
if(finalName !== wholeName)
{
    throw console.error('Wrong Name input');
}
// Test 2
let userName = 'Adi Pathak'
if(finalName !== userName)
{
    throw console.error('Wrong Name input');
}


// #### Calculate total amount

function calTax (amount, taxRate){
    let total =  amount + (amount * taxRate);
    return total;
}

