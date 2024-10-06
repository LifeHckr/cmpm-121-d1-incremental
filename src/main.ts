import "./style.css";

let rice_seen: number = 0;
const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Hello World!";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const counter_div = document.createElement("div");
counter_div.innerHTML = `${rice_seen} rice seen.`;
app.append(counter_div);

const button = document.createElement("button");
button.innerHTML = "🎑";
app.append(button);
button.addEventListener("click", () => {
  rice_seen += 1;
  counter_div.innerHTML = `${rice_seen} rice seen.`;
});
