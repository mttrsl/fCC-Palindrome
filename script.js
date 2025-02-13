const checkButton = document.getElementById("check-btn");

checkButton.addEventListener("click", checkPalindrome);

function checkPalindrome(){
  const inputText = document.getElementById("text-input").value;
  if(!inputText){
    alert("Please input a value")
  }
  const result = document.getElementById("result");
  const inputArr = inputText.toLowerCase().split("").filter((c) => !c.match(/[\(\)\\.\s_,-]/gi));
  for (let i = 0; i<inputText.length; i++){
    if(inputArr[i] !== inputArr[inputArr.length - i - 1]){
    console.log(inputArr[i]);
    result.innerText = `${inputText} is not a palindrome`
    return
    }
  }
  result.innerText = `${inputText} is a palindrome`
}