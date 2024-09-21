//  const toggleButton =document.getElementById('toggle-experience') as HTMLButtonElement
//  const Experience =document.getElementById('Abcd') as HTMLElement
//  toggleButton.addEventListener('click', ()=>{
//     if (Experience.style.display ==='none'){
//          Experience.style.display ='block'
//     }else{
//         Experience.style.display='none'
//     }
//  })
var toggleButton = document.getElementById('toggle-experience');
var experience = document.getElementById('Abcd');
if (toggleButton && experience) {
    toggleButton.addEventListener('click', function () {
        experience.style.display = experience.style.display === 'none' ? 'block' : 'none';
    });
}
else {
    console.error('Button or experience section not found');
}
