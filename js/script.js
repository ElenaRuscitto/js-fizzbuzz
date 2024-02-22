const containerBox =document.getElementById ('container');

for(let i = 1; i <= 100; i++){
    containerBox.innerHTML += `
      <div class="box ">${i}</div>
    `
}