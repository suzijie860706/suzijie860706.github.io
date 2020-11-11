
// 輪播圖圖片尺寸
const width = 950;

// 最後一張圖
const len = document.getElementsByClassName('slider-item').length;

// 取得所有控制項
const controls = document.getElementsByClassName('control');

/*
第一張 0
第二張 -950px
第三張 -1900px = (950px * (n-1)) 
*/

// 輪播圖自動滑動
function sliderSmooth() {
    const slider = document.getElementById('slider-list');
    const left = Number(slider.style.left.replace('px', ''));
    // 當最後一個的時候，移動到第一張。 
    if (left == width * -(len - 1)) {
        slider.style.left = '0px';
    } else {
        slider.style.left = `${left + width * -1}px`;
    }

}

// 輪播圖手動滑動
for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', function () {

        // 移動輪播圖位置
        const slider = document.getElementById('slider-list');
        slider.style.left = `${i * width * -1}px`;

    });
}