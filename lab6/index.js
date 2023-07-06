// ====================================2ND TASK===========================================

let inp = '1234';
// let inp = prompt("Enter 4 digit number" , 1234);   //original line , to be uncommented

while (inp.length !== 4) {
    inp = prompt("Error: kindly Enter 4 digit number", 1234);
}

console.log(`Given input = ${inp}`);

// Encryption
let inpList = inp.split("");

let plus7 = inpList.map((i)=>{
    return +i + 7 ;
});

// Swapping elements
let third = plus7[2];
plus7[2] = plus7[0];
plus7[0] = third;

let fourth = plus7[3];
plus7[3] = plus7[1];
plus7[1] = fourth;

let encryptedText = plus7.join("");
console.log(`Encrypted Text = ${encryptedText}`);

// ====================================3RD TASK===========================================

// Decryption
encList = encryptedText.split("");
let merge = [];
let isDouble = false;
for(let i =0 ;i<encList.length; i++ ){

    if(isDouble == true){
        isDouble = false;
        continue;
    }
    else if( +(encList[i]) < 7 ){
        merge.push(`${encList[i] + encList[i+1]}`);
        isDouble = true;
    }
    else{
        merge.push(encList[i]);
    }
}

// Swapping elements
third = merge[2];
merge[2] = merge[0];
merge[0] = third;

fourth = merge[3];
merge[3] = merge[1];
merge[1] = fourth;

let minus7 = merge.map((i)=>{
    return +i - 7 ;
});

let decryptedText = minus7.join('');
console.log(`Decrypted Text = ${decryptedText}`);


// ====================================4TH TASK===========================================
function vowel() {
    const character = prompt("Enter a character:").toLowerCase();
    
    if (character.length === 1) {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      
      if (vowels.includes(character)) {
        alert("It's a vowel.");
      } else {
        alert("It's a consonant.");
      }
    } else {
      alert("Please enter a single character.");
    }
  }
  
  function random() {
    const randomNumbers = [];
    
    for (let i = 0; i < 20; i++) {
      randomNumbers.push(Math.floor(Math.random() * 100));
    }
    
    console.log(randomNumbers);
  }




