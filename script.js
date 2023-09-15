function copyLink(link) {
    const tempInput = document.createElement("input");
    tempInput.value = link;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    const copySuccess = document.getElementById("copySuccess");
    copySuccess.style.display = "block"; // 显示复制成功告示

    // 3秒后隐藏复制成功告示
    setTimeout(function() {
        copySuccess.style.display = "none";
    }, 3000);
}

// 打开告示栏
function openPopup() {
    document.getElementById("popup").style.display = "block";
    startCountdown(); // 开始倒计时
}

// 关闭告示栏
function closePopup() {
    document.getElementById("popup").style.display = "none";
    clearInterval(countdownInterval); // 清除倒计时的间隔
}

// 自动关闭告示栏
function autoClosePopup() {
    setTimeout(closePopup, 5000); // 5秒后自动关闭
}

// 在页面加载后显示告示栏并自动关闭
window.onload = function() {
    openPopup();
    autoClosePopup();
};

// 倒计时功能
let countdownInterval;

function startCountdown() {
    const duration = 5000; // 倒计时持续时间（毫秒）
    let timeLeft = duration;

    const countdownBar = document.getElementById("countdownBar");
    const countdownText = document.getElementById("countdownText");

    function updateCountdown() {
        const progress = (timeLeft / duration) * 100;
        countdownBar.style.width = progress + "%";
        countdownText.innerText = Math.ceil(timeLeft / 1000) + "秒后关闭";

        if (timeLeft <= 0) {
            closePopup(); // 倒计时结束后关闭告示栏
        } else {
            timeLeft -= 100; // 每100毫秒更新一次进度条和文字
        }
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 100); // 设置定时器间隔，以便更新进度条和文字
}
