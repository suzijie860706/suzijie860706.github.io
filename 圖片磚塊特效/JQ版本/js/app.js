// 為每個圖片建立滑鼠移入事件
$('img').mouseover(function () {
    // 先將所有圖片加上暗色系類別
    addAllDark();
    // 將當前的圖片移除暗色系類別
    $(this).removeClass('dark');
});

// 將所有圖片加入暗色系類別
function addAllDark() {
    $('img').addClass('dark');
}

// 將所有圖片移除暗色系類別
function removeAllDark() {
    $('img').removeClass('dark');
}