const day = document.getElementById('day');
const year = document.getElementById('year');
const month = document.getElementById('month');
const strongDay = document.querySelector('.strongDay');
const strongYear = document.querySelector('.strongYear');
const strongMonth = document.querySelector('.strongMonth');
const errorHandler = document.getElementById('errorHandler');
const form = document.getElementById('my-form');
const greetLabel =  document.getElementById('greet');




form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission and page reload
  const birthdate = `${year.value}-${month.value}-${day.value}`;
  calculateAge(birthdate);
  
  form.reset()
});


function calculateAge(birthdate) {
  const today = new Date(); // Get the current date
  const birthdateObj = new Date(birthdate); // Convert the birthdate string to a Date object
  
  // Check for invalid input
  if (isNaN(birthdateObj.getTime())) {
    errorHandler.textContent = 'Invalid Date';
    errorHandler.style.color = 'red';
    errorHandler.style.textAlign = 'center';
    errorHandler.style.fontSize = '.8em';
    errorHandler.style.letterSpacing = '2px';
    errorHandler.style.marginBottom = '1em';
    errorHandler.style.fontWeight = '400';
    return;
  } else{
    errorHandler.textContent ='';
  }
  
  // Check for future date
  if (birthdateObj > today) {
    errorHandler.textContent = 'Opps!! Birthdate cannot be in the future 🙁';
    errorHandler.style.color = 'red';
    errorHandler.style.textAlign = 'center';
    errorHandler.style.fontSize = '.8em';
    errorHandler.style.letterSpacing = '2px';
    errorHandler.style.marginBottom = '1em';
    errorHandler.style.fontWeight = '400';
    return;
  }else{
    errorHandler.textContent ='';
  }
  
  let ageYears = today.getFullYear() - birthdateObj.getFullYear(); // Calculate the number of years between birthdate and current date
  let ageMonths = today.getMonth() - birthdateObj.getMonth(); // Calculate the number of months between birthdate and current date
  let ageDays = today.getDate() - birthdateObj.getDate(); // Calculate the number of days between birthdate and current date


        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
          ageYears--;
          ageMonths += 12;
        }
      
        if (ageDays < 0) {
          const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
          ageDays += lastMonth.getDate();
          ageMonths--;
        }
      
        if (ageYears === 0) {
          if (ageMonths === 0) {
            strongDay.textContent = `${ageDays}`;
            strongDay.style.color = 'hsl(259, 100%, 65%)';
            strongDay.style.fontSize = '2em';
            greetLabel.textContent = 'YOUR AGE IS';
            greetLabel.style.textAlign = 'center';
            greetLabel.style.color = 'hsl(259, 100%, 65%)';
            // This handles the case where the person is less than 1 year old
          } else {
            strongMonth.textContent = `${ageMonths}`;
            strongDay.textContent = `${ageDays}`;
            strongMonth.style.color = 'hsl(259, 100%, 65%)';
            strongDay.style.color = 'hsl(259, 100%, 65%)';
            strongDay.style.fontSize = '2em';
            strongMonth.style.fontSize = '2em';
            greetLabel.textContent = 'YOUR AGE IS';
            greetLabel.style.textAlign = 'center';
            greetLabel.style.color = 'hsl(259, 100%, 65%)';
            // This handles the case where the person is between 1 month and 1 year old
          }
        } else {
          if (ageMonths === 0 && ageDays === 0) {
            
             strongYear.textContent = `${ageYears}`;
             greetLabel.textContent = 'YOUR AGE IS';
             greetLabel.style.textAlign = 'center';
             greetLabel.style.color = 'hsl(259, 100%, 65%)'; // This handles the case where the person has just turned a new age
             strongYear.style.color = 'hsl(259, 100%, 65%)';
          } else if (ageMonths === 0) {
            strongYear.textContent =`${ageYears}`;
            strongDay.textContent = `${ageDays}`;
            strongYear.style.color = 'hsl(259, 100%, 65%)';
            strongDay.style.color = 'hsl(259, 100%, 65%)';
            strongDay.style.fontSize = '2em';
            strongYear.style.fontSize = '2em';
            greetLabel.textContent = 'YOU AGE IS';
            greetLabel.style.textAlign = 'center';
            greetLabel.style.color = 'hsl(259, 100%, 65%)';


            // This handles the case where the person is between 1 year and 1 year + 1 month old
          } else if (ageDays === 0) {
            strongYear.textContent =`${ageYears}`;
            strongMonth.textContent = `${ageMonths}`;
            strongYear.style.color = 'hsl(259, 100%, 65%)';
            strongMonth.style.color = 'hsl(259, 100%, 65%)';
            strongYear.style.fontSize = '2em';
            strongMonth.style.fontSize = '2em';
            greetLabel.textContent = 'YOUR AGE IS';
            greetLabel.style.textAlign = 'center';
            greetLabel.style.color = 'hsl(259, 100%, 65%)';
            // This handles the case where the person is between 1 year and 1 year + 1 month - 1 day old
          } else {
              strongYear.textContent =`${ageYears}`;
              strongMonth.textContent = `${ageMonths}`;
              strongDay.textContent = `${ageDays}`;
              strongYear.style.color = 'hsl(259, 100%, 65%)';
              strongMonth.style.color = 'hsl(259, 100%, 65%)';
              strongDay.style.color = 'hsl(259, 100%, 65%)';
              strongDay.style.fontSize = '2em';
              strongYear.style.fontSize = '2em';
              strongMonth.style.fontSize = '2em';
              greetLabel.textContent = 'YOUR AGE IS';
              greetLabel.style.textAlign = 'center';
              greetLabel.style.color = 'hsl(259, 100%, 65%)';
           // This handles the case where the person is over 1 year old and has some months and days
          }
        }
      }