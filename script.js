const day = document.getElementById('day');
const year = document.getElementById('year');
const month = document.getElementById('month');
const strongDay = document.querySelector('.strongDay');
const strongYear = document.querySelector('.strongYear');
const strongMonth = document.querySelector('.strongMonth');
const errorHandler = document.getElementById('errorhandler');


const birthdate = `${year.value}-${month.value}-${day.value}`;

function calculateAge(birthdate) {
    const today = new Date(); // Get the current date
    const birthdateObj = new Date(birthdate); // Convert the birthdate string to a Date object
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

    if (ageYears < 0) {
        errorHandler.textContent = 'Invalid Input';
        errorHandler.style.color ='red';

        // This handles the case where the birthdate is in the future
      } else if (ageYears === 0) {
        if (ageMonths === 0) {
           strongDay.textContent = `${ageDays}`; // This handles the case where the person is less than 1 year old
        } else {
          strongMonth.textContent = `${ageMonths}`;
          strongDay.textContent = `${ageDays}`;
           // This handles the case where the person is between 1 month and 1 year old
        }
      } else {
        if (ageMonths === 0 && ageDays === 0) {
          
           strongYear.textContent = `${ageYears}`; // This handles the case where the person has just turned a new age
        } else if (ageMonths === 0) {
          strongYear.textContent =`${ageYears}`;
          strongDay.textContent = `${ageDays}`; // This handles the case where the person is between 1 year and 1 year + 1 month old
        } else if (ageDays === 0) {
          strongYear.textContent =`${ageYears}`;
          strongMonth.textContent = `${ageMonths}`; // This handles the case where the person is between 1 year and 1 year + 1 month - 1 day old
        } else {
            strongYear.textContent =`${ageYears}`;
            strongMonth.textContent = `${ageMonths}`;
            strongDay.textContent = `${ageDays}`;
         // This handles the case where the person is over 1 year old and has some months and days
        }
      }
    }















