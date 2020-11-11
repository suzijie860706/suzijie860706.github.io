
// 輪播圖圖片尺寸
const width = 950;

// 最後一張圖
const len = $('.slider-item').length;

/*
第一張 0
第二張 -950px
第三張 -1900px = (950px * (n-1)) 
*/


// 輪播圖自動滑動
function sliderSmooth() {
    const slider = $('#slider-list');
    const left = Number(slider.css('left').replace('px', ''));
    // 當最後一個的時候，移動到第一張。 
    if (left == width * -(len - 1)) {
        slider.css('left', '0px');
    } else {
        slider.css('left', `${left + width * -1}px`);
    }

    // 將當前的按鈕樣式移除
    const prevCtrl = $('.active');
    prevCtrl.removeClass('active');
    // 當最後一個時候，JQ next().length 結果會是 0，因此回頭找第一個
    const nextCtrl = prevCtrl.next().length > 0 ? prevCtrl.next() : $('.control:first');
    nextCtrl.addClass('active');
}

// 輪播圖手動滑動
$('.control').click(function () {

    // 當前相對於全部的索引值
    const i = $(this).index();

    // 移動輪播圖位置
    $('#slider-list').css('left', `${i * width * -1}px`);

    // 移除當前的黃點
    $('.active').removeClass('active');
    // this 指向當前 click 事件所觸發的元素
    $(this).addClass('active');

});