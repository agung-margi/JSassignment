//title
function getTitle() {
  let title = "List User";
  document.getElementById("title").innerHTML = title;
}

//date update
function getDateTime() {
  const date = new Date();

  const formatIndonesia = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  const text = "Update at : ";
  document.getElementById("date").innerHTML = text + formatIndonesia;
}

//get data
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
  let gender = data.gender == "male" ? "#15F5BA" : "#FF204E";
  return `
    <td class="py-2 px-10 border">${data.id}</td>
    <td class="py-2 px-10 border">${data.firstName} ${data.lastName}</td>
    <td class="py-2 px-10 border">${data.phone}</td>
    <td class="py-2 px-10 border">${data.email}</td>
    <td class="py-2 px-10 border bg-[${gender}] rounded-full drop-shadow-2xl">${data.gender}</td>
    `;
}

function displayData(dataUsers) {
  const containerElm = document.getElementById("tableUsers");

  dataUsers.forEach((user) => {
    let rows = document.createElement("tr");
    rows.innerHTML = rowsData(user);
    containerElm.appendChild(rows);
  });
}

getTitle();
getData();
getDateTime();

alert("Selamat Datang");
