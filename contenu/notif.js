const button =
 document.querySelector('button');
 const notification =
 document.querySelector('#notification');

 button.addEventListener('click', () => {
     notification.classList.add('show');
     
     setTimeout(() => {
         notification.classList.remove('show');
         
     }, 2000); 
 });
