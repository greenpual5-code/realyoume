document.getElementById("addMemory").addEventListener("click", () => {
  const text = prompt("写下你们的回忆吧💞");
  if(text){
    const div = document.createElement("div");
    div.textContent = text;
    div.style.padding = "10px";
    div.style.marginTop = "10px";
    div.style.background = "rgba(255, 182, 193, 0.3)";
    div.style.borderRadius = "10px";
    document.getElementById("memories").appendChild(div);
  }
});