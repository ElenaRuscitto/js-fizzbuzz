const containerBox =document.getElementById ('container');

for(let i = 1; i <= 100; i++){
  
  if ((i % 3  === 0) && (i % 5  === 0)){
    containerBox.innerHTML += `
    <div class="box box-6">${i}</div>

   `
  } else if (i % 3  === 0){
    containerBox.innerHTML += `
    <div class="box box-3">${i}</div>

   `
  } else if (i % 5  === 0){
    containerBox.innerHTML += `
    <div class="box box-5">${i}</div>

   `
  } else {
    containerBox.innerHTML += `
  <div class="box">${i}</div>
   `
  }
}