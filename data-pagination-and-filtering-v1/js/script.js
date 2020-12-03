/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const itemsPerPage = 9;
const studentList = document.getElementsByClassName("student-list");
studentList.innerHTML = "";

const htmlContent = '';

function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const listItem = list[i];
         studentList.insertAdjacentHTML("beforeend", 
         `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${listItem.picture.thumbnail}" alt="Profile Picture">
           <h3>${listItem.name.first} ${listItem.name.last}</h3>
           <span class="email">${listItem.email}</span>
         </div>
         <div class="joined-details">
           <span class="date">${listItem.registered.date}</span>
         </div>
       </li>
         `
         )
      }
   }
};



//OLD CODE
// function showPage(list, page) {
//    let startIndex = (page * 9) - 9;
//    let endIndex = page * 9;

//    // let unorderedList = document.getElementsByClassName("student-list");
//    unorderedList.innerHTML = "";

//    for (let i = 0; i < unorderedList.length; i++) {
//       if (unorderedList[i] >= startIndex && unorderedList[i] < endIndex) {

//          // unorderedList.insertAdjacentHTML("beforeend", "<p>This is a test</p>");
//       }
//    }

// }
// let unorderedList = document.getElementsByClassName("student-list");
// const listItem = document.createElement('h1');
// unorderedList.appendChild(listItem);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions

showPage(data, 1);