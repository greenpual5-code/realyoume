// 💖 添加回忆按钮功能
const addBtn = document.getElementById("addMemory");
const memories = document.getElementById("memories");

addBtn.addEventListener("click", (e) => {
  // 点击波纹效果
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.style.left = e.clientX - e.target.offsetLeft + "px";
  heart.style.top = e.clientY - e.target.offsetTop + "px";
  addBtn.appendChild(heart);
  setTimeout(() => heart.remove(), 800);

  // 飘起爱心动画
  createFloatingHeart();

  // 添加回忆输入框
  const text = prompt("写下你们的回忆吧 💞");
  if (text) {
    const div = document.createElement("div");
    div.textContent = text;
    div.style.padding = "10px";
    div.style.marginTop = "10px";
    div.style.background = "rgba(255, 182, 193, 0.3)";
    div.style.borderRadius = "10px";
    div.style.boxShadow = "0 0 10px rgba(255,182,193,0.5)";
    div.style.backdropFilter = "blur(6px)";
    div.style.color = "white";
    div.style.fontSize = "1.05em";
    memories.appendChild(div);

    // 让新回忆柔和淡入
    div.style.opacity = 0;
    setTimeout(() => {
      div.style.transition = "opacity 0.8s ease";
      div.style.opacity = 1;
    }, 50);
  }
});

// 💗 飘起小爱心动画函数
function createFloatingHeart() {
  const floatingHeart = document.createElement("div");
  floatingHeart.classList.add("floating-heart");
  floatingHeart.textContent = "💗";
  
  // 随机水平位置
  const x = Math.random() * window.innerWidth;
  floatingHeart.style.left = `${x}px`;

  // 随机大小
  const size = 20 + Math.random() * 10;
  floatingHeart.style.fontSize = `${size}px`;

  document.body.appendChild(floatingHeart);

  // 2 秒后移除
  setTimeout(() => floatingHeart.remove(), 2000);
}
