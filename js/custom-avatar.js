document.addEventListener("DOMContentLoaded", function(){
  // 用 MutationObserver 监控头像，确保覆盖主题 JS
  const observer = new MutationObserver(() => {
    const avatar = document.querySelector("#aside .avatar-img");
    if(avatar){
      // 彻底禁用旋转动画
      avatar.style.animation = "none";
      avatar.style.transform = "scale(1)";
      avatar.style.transition = "all 0.4s ease";

      // 鼠标悬停效果：轻微放大 + 柔光
      avatar.addEventListener("mouseenter", function(){
        avatar.style.transform = "scale(1.08)";
        avatar.style.boxShadow = "0 0 20px rgba(255,255,255,0.4)";
      });
      avatar.addEventListener("mouseleave", function(){
        avatar.style.transform = "scale(1)";
        avatar.style.boxShadow = "none";
      });

      observer.disconnect(); // 找到头像后停止观察
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
