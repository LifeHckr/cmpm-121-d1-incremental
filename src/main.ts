import "./style.css";

//Var declarations------------------------------------------------------------
let the_important_number: number = 0;
const big_num_flavor_text: string = "grains of rice.";
let passive_rps: number = 0;
const rps_flavor: string = "rice offered per second.";

const upgrades: Upgrade[] = [
  { cost: 10, increase: 0.1, amount: 0 },
  { cost: 100, increase: 2, amount: 0 },
  { cost: 1000, increase: 50, amount: 0 },
];

let time_at_last_update: number = performance.now();
//End decl----------------------------------------------------------------------

//HTML Setup-------------------------------------------------------------------
const app: HTMLDivElement = document.querySelector("#app")!;

const gameName: string = "Worship the Ancients";
document.title = gameName;

const header: HTMLHeadingElement = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const counter_div: HTMLDivElement = document.createElement("div");
counter_div.innerHTML = `${the_important_number.toFixed(2)} ${big_num_flavor_text}`;
app.append(counter_div);

const rps_div: HTMLDivElement = document.createElement("div");
rps_div.innerHTML = `${passive_rps.toFixed(2)} ${rps_flavor}`;
app.append(rps_div);

const button: HTMLButtonElement = document.createElement("button");
button.innerHTML = "🎑";
app.append(button);
button.addEventListener("click", increment_counter_from_click);

const upgrade_div: HTMLDivElement = document.createElement("div");
app.append(upgrade_div);

//Upgrade buttons
const upgrade_buttons: HTMLButtonElement[] = [];
for (let i: number = 0; i < upgrades.length; i++) {
  upgrade_buttons.push(document.createElement("button"));
  upgrade_buttons[i].innerHTML =
    `+${upgrades[i].increase} rps | Cost: ${upgrades[i].cost}<br>Owned: ${upgrades[i].amount}</br>`;
  upgrade_buttons[i].disabled = true;
  upgrade_div.append(upgrade_buttons[i]);
  upgrade_buttons[i].addEventListener("click", () => {
    upgrade_rps(i);
  });
}
//END HTML-----------------------------------------------------------

//Game ------------------------------------------------------------
requestAnimationFrame(update);
//I made a game in one function hyuk--------------------------------

//Class declarations ------------------------------------------

interface Upgrade {
  cost: number;
  increase: number;
  amount: number;
}
//End decl------------------------------------------------------

//Function Declarations ----------------------------------------

//Main game update loop
function update(): void {
  const time_now: number = performance.now();
  for (let i: number = 0; i < upgrade_buttons.length; ++i) {
    upgrade_buttons[i].disabled = !(the_important_number >= upgrades[i].cost);
  }
  increment_counter_from_time(time_now);
  requestAnimationFrame(update);
}

//IDK in case I need to add more logic to click
function increment_counter_from_click(): void {
  the_important_number += 1;
  counter_div.innerHTML = `${the_important_number.toFixed(2)} ${big_num_flavor_text}`;
}

//Increment counter based on rps during update loop
function increment_counter_from_time(time_now: number): void {
  the_important_number +=
    ((time_now - time_at_last_update) / 1000) * passive_rps;
  counter_div.innerHTML = `${the_important_number.toFixed(2)} ${big_num_flavor_text}`;
  time_at_last_update = time_now;
}

//Button function
function upgrade_rps(button_id: number): void {
  the_important_number -= upgrades[button_id].cost;
  passive_rps += upgrades[button_id].increase;
  upgrades[button_id].amount += 1;
  upgrade_buttons[button_id].innerHTML =
    `+${upgrades[button_id].increase} rps | Cost: ${upgrades[button_id].cost}<br>Owned: ${upgrades[button_id].amount}`;

  rps_div.innerHTML = `${passive_rps.toFixed(2)} ${rps_flavor}`;
}
//End decl--------------------------------------------------------------
