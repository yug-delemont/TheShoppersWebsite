// Navbar Toggle
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelector("html").classList.toggle("show-menu");
  });

// Add class in Mega Menu
document.querySelector("#mega-menu-btn").addEventListener("click", function () {
  document.querySelector(".mega-menu-li").classList.toggle("show-mega-menu");
});

// Search
const jsonData = {
  categoryList: [
    { name: "Category List", data: ["Alloy Wheels", "Alloy Wheels"] },
  ],
  componyList: [
    {
      name: "Company List",
      data: ["Street Smart Alloys Ltd", "Street Smart Alloys"],
    },
  ],
};

const inputField = document.getElementById("searchCategory");
const categoryList = document.getElementById("category-list");
const companyList = document.getElementById("company-list");
const name = document.getElementById("name");
const name1 = document.getElementById("name1");

name.style.display = "none";
name1.style.display = "none";

inputField.addEventListener("input", (event) => {
  const userInput = event.target.value.toLowerCase();
  console.log(userInput);

  if (!inputField) {
    name.style.display = "none";
    name1.style.display = "none";
    categoryList.style.display = "none";
    companyList.style.display = "none";
  } else {
    name.style.display = "block";
    name1.style.display = "block";
    categoryList.style.display = "block";
    companyList.style.display = "block";
  }

  // Filter the categoryList
  const filteredCategories = jsonData.categoryList[0].data.filter((category) =>
    category.toLowerCase().includes(userInput)
  );

  // Display the filtered categories
  displayList(filteredCategories, "category");

  // Filter the companyList
  const filteredCompanies = jsonData.componyList[0].data.filter((company) =>
    company.toLowerCase().includes(userInput)
  );

  // Display the filtered companies
  displayList(filteredCompanies, "compony");
});

function displayList(data, type) {
  const listContainer =
    type === "category"
      ? document.getElementById("category-list-container")
      : document.getElementById("company-list-container");

  const listElement = type === "category" ? categoryList : companyList;

  listContainer.style.display = "block";

  listElement.innerHTML = "";
  if (data.length > 0) {
    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      listElement.appendChild(listItem);
    });
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = "No results found";
    listElement.appendChild(listItem);
  }
}

// Hide the list containers when the input is empty
inputField.addEventListener("focus", (event) => {
  if (event.target.value.length === 0) {
    const listContainers = document.querySelectorAll(".list-container");
    listContainers.forEach((container) => {
      container.style.display = "none";
    });
  }
});

// Focus on input field when the page loads
document.getElementById("searchCategory").focus();
