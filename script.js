document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // 點擊選單連結關閉選單
    document.querySelectorAll(".sidebar a").forEach(item => {
        item.addEventListener("click", () => {
            sidebar.classList.remove("active");
        });
    });
});
