console.log("script is runing");

const monthInx = new Date().getMonth();
const monthEl =document.querySelector(".data h1");
const fullDateEl =document.querySelector(".data p");
const daysEl = document.querySelector(".days");

const lastDay = new Date(new Date().getFullYear(),monthInx+1,0).getDate();
const fastDay = new Date(new Date().getFullYear(),monthInx,1).getDay()-1;

console.log(fastDay);

const month =[
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
console.log(month[monthInx]);

monthEl.innerText=(month[monthInx]);
fullDateEl.innerText=new Date().toDateString();

let days = "";

for (let i = fastDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;