// 取得所有圖片
const imgs = document.querySelectorAll('img');

// 為每個圖片建立滑鼠移入事件
imgs.forEach(function (img) {
    console.log(img);
    img.addEventListener('mouseover', function () {
        // 先將所有圖片加上暗色系類別
        addAllDark();
    });
});

// 將所有圖片加入暗色系類別
function addAllDark() {
    imgs.forEach(function (img) { img.classList.add('dark'); });
}