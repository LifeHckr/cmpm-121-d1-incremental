import "./style.css";

let the_important_number: number = 0;
let passive_rps: number = 0;
const flavor_text: string = "grains of rice.";

let time_at_last_update: number = performance.now();

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Worship the Ancients";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const counter_div = document.createElement("div");
counter_div.innerHTML = `${the_important_number.toFixed(2)} ${flavor_text}`;
app.append(counter_div);

const button = document.createElement("button");
button.innerHTML = "🎑";
app.append(button);
button.addEventListener("click", increment_counter_from_click);

const upgrade_button1 = document.createElement("button");
upgrade_button1.innerHTML = "+1 rps | Cost: 10";
upgrade_button1.disabled = true;
app.append(upgrade_button1);
upgrade_button1.addEventListener("click", () => {
  upgrade_rps(10, 1);
});

requestAnimationFrame(update);

function update(): void {
  const time_now: number = performance.now();
  upgrade_button1.disabled = !(the_important_number >= 10);
  increment_counter_from_time(time_now);
  requestAnimationFrame(update);
}

function increment_counter_from_click(): void {
  the_important_number += 1;
  counter_div.innerHTML = `${the_important_number.toFixed(2)} ${flavor_text}`;
}

function increment_counter_from_time(time_now: number): void {
  the_important_number +=
    ((time_now - time_at_last_update) / 1000) * passive_rps;
  counter_div.innerHTML = `${the_important_number.toFixed(2)} ${flavor_text}`;
  time_at_last_update = time_now;
}

function upgrade_rps(cost: number, amount: number): void {
  the_important_number -= cost;
  passive_rps += amount;
}
