// === منطق صفحة تسجيل الدخول ===
const avatar = document.getElementById('avatar');

function focusUser() {
    if(avatar) avatar.innerText = "😠"; // وجه قتالي
}

function focusPass() {
    if(avatar) avatar.innerText = "👊"; // قبضة
}

function blurInput() {
    if(avatar) avatar.innerText = "😐";
}

function handleLogin() {
    const user = document.querySelector('input[type="text"]').value;
    const pass = document.querySelector('input[type="password"]').value;
    const errorMsg = document.getElementById('errorMsg');

    // التحقق من البيانات المطلوبة
    if (user === "User Fight Club" && pass === "fightclubgym") {
        window.location.href = "index.html";
    } else {
        // رسالة خطأ بسيطة
        alert("بيانات الدخول غير صحيحة! \nاسم المستخدم: User Fight Club\nكلمة المرور: fightclubgym");
        // اهتزاز الكارد كإشارة للخطأ
        document.querySelector('.login-card').style.animation = "shake 0.5s";
        setTimeout(() => document.querySelector('.login-card').style.animation = "", 500);
    }
}

function logout() {
    window.location.href = "login.html";
}

// دالة لفتح الواتساب (للمتجر والخدمات)
function openWhatsapp(message) {
    const phone = "201095694593";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}