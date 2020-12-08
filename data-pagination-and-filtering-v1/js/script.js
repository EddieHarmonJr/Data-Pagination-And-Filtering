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
const studentList = document.querySelector(".student-list");
const linkList = document.querySelector(".link-list");
studentList.innerHTML = "";
linkList.innerHTML = "";

const htmlContent = '';

const showPage = (list, page) => {
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
           <span class="date">Joined ${listItem.registered.date}</span>
         </div>
       </li>
         `
         )
      }
   }
};


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list) => {



   const numOfPages = Math.ceil(list.length / itemsPerPage);
   for (let i = 1; i <= itemsPerPage; i++) {
      // let firstPage = list[0];
      const pageNumber = list[i];
      linkList.insertAdjacentHTML("beforeend", 
      `
      <li>
      <button type="button">${i}</button>
    </li>
      `
      )
      const firstPageButton = document.querySelector(".pagination li:first-child button");
      firstPageButton.className = "active";
   }
};

linkList.addEventListener('click', (e) => {


});

// Call functions

showPage(data, 1);
addPagination(data);