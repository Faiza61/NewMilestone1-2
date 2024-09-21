//  const toggleButton =document.getElementById('toggle-experience') as HTMLButtonElement
//  const Experience =document.getElementById('Abcd') as HTMLElement

//  toggleButton.addEventListener('click', ()=>{
//     if (Experience.style.display ==='none'){
//          Experience.style.display ='block'
//     }else{
//         Experience.style.display='none'
//     }
//  })


 const toggleButton = document.getElementById('toggle-experience') as HTMLButtonElement | null;
const experience = document.getElementById('Abcd') as HTMLElement | null;

if (toggleButton && experience) {
  toggleButton.addEventListener('click', () => {
    experience.style.display = experience.style.display === 'none' ? 'block' : 'none';
  });
} else {
  console.error('Button or experience section not found');
}
