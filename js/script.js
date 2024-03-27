alert("Selamat Datang");
async function getData() {
  try {
    let data = await fetch("https://dummyjson.com/users");
    let resData = await data.json();
    let dataUser = resData.users;
    displayData(dataUser);
  } catch {
    console.log("error");
  }
}

function rowsData(data) {
  return `
    <td class="py-2 px-10 border">${data.id}</td>
    <td class="py-2 px-10 border">${data.firstName}</td>
    <td class="py-2 px-10 border">${data.lastName}</td>
    <td class="py-2 px-10 border">${data.email}</td>
    <td class="py-2 px-10 border">
    <button class="bg-blue-500 text-white px-4 py-2 rounded" id="viewbtn">View</td>
    `;
}

function displayData(dataUsers) {
  console.log(dataUsers, "ini data");
  const containerElm = document.getElementById("tableUsers");

  dataUsers.forEach((user) => {
    let rows = document.createElement("tr");
    rows.innerHTML = rowsData(user);
    containerElm.appendChild(rows);
  });
}
getData();

function viewbtn() {
  const viewBtn = document.getElementById("viewbtn");

  // Attach a click event listener to the button
  viewBtn.addEventListener("click", function () {
    // Function to run when the button is clicked
    alert("Button clicked!");
  });
}
