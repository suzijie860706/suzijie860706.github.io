
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

// 定時器
let timer = setInterval(sliderSmooth, 1500);

// 輪播圖自動滑動
function sliderSmooth() {
    const slider = document.getElementById('slider-list');
    const left = Number(String(slider.style.left).replace('px', ''));
    // 當最後一個的時候，移動到第一張。 
    if (left == width * -(len - 1)) {
        slider.style.left = '0px';
    } else {
        slider.style.left = `${left + width * -1}px`;
    }

    // 將當前的按鈕樣式移除
    const prevCtrl = document.querySelector('.active');
    prevCtrl.classList.remove('active');
    // 當最後一個時候，尋找下一個會發生 null，因此回頭找第一個
    const nextCtrl = prevCtrl.nextElementSibling || controls[0];
    nextCtrl.classList.add('active');
}

// 輪播圖手動滑動
for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', function () {
        clearInterval(timer);

        // 移動輪播圖位置
        const slider = document.getElementById('slider-list');
        slider.style.left = `${i * width * -1}px`;
        // 移除當前的黃點
        document.querySelector('.active').classList.remove('active');
        // this 指向當前 click 事件所觸發的元素
        this.classList.add('active');

        timer = setInterval(sliderSmooth, 1500);
    });
}