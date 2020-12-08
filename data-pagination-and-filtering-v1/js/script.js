//This function will display 9 students on the screen at a time by looping through the data contained in the data.js file. It will then insert key information from the student data on screen.
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

//This function will create the page numbers beneath the student list. It will automatically make the first page button active at the beginning and dynamically insert the page numbers in the innerText based on the current iteration.
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

   //When a page number is clicked, it will attain the ".active" className and any other page number buttons that previously had this designation will be removed. Only if the element has a node name of "BUTTON" will it be able to work.
   linkList.addEventListener('click', (e) => {
      if (e.target.nodeName === "BUTTON") {
         const currentButton = document.querySelector(".active");
         currentButton.className = "";
         e.target.className = "active";
         const page = e.target.textContent;
         // let numberedPage = parseInt(page);
         // console.log(page);
         showPage(list, page);
      }
   });
};

// Call all the functions here:
showPage(data, 1);
addPagination(data);