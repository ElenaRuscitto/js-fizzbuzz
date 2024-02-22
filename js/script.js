const containerBox =document.getElementById ('container');

for(let i = 1; i <= 100; i++){
  
  if ((i % 3  === 0) && (i % 5  === 0)){
    containerBox.innerHTML += `
    <div class="box box-6">FizzBuzz</div>
    
   `
   
  } else if (i % 3  === 0){
    containerBox.innerHTML += `
    <div class="box box-3">Fizz</div>

   `
  } else if (i % 5  === 0){
    containerBox.innerHTML += `
    <div class="box box-5">Buzz</div>

   `
  } else {
    containerBox.innerHTML += `
  <div class="box">${i}</div>
   `
  }
}