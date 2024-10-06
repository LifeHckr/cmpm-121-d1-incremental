import "./style.css";

let the_important_number: number = 0;
//let passive_rps:number = 0;
const flavor_text :string = "grains of rice.";

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

requestAnimationFrame(do_next_frame);

function do_next_frame(): void {
  increment_counter_from_time();
  requestAnimationFrame(do_next_frame);
}

function increment_counter_from_click(): void {
  the_important_number += 1;
  counter_div.innerHTML = `${the_important_number.toFixed(2)} ${flavor_text}`;
}

function increment_counter_from_time(): void {
  const time_now:number = performance.now();
  the_important_number += (time_now - time_at_last_update) / 1000;
  counter_div.innerHTML = `${the_important_number.toFixed(2)} ${flavor_text}`;
  time_at_last_update = time_now;
}