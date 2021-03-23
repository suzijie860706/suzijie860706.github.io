//#region 轉類別註解
var button1 = document.getElementById('button1');
button1.addEventListener('click', (e) => {
    var textArea1 = document.getElementById('text1');
    var data = textArea1.value.split(/\/\/\/ <summary>|<\/summary>|\r\n/);
    //過濾掉空值項目
    data.forEach(element => {
        if(element.trim() == '') 
        {
            var nummber = data.indexOf(element)
            data.splice(nummber,1);
        } 
    });
    data.forEach(element => {
        console.log(element);
    });
    //提取類型、變數名稱
    var data2 = [];
    for (let x = 0; x < data.length; x+=2) {
        data2.push(data[x])
    }
    //第二次分類 將類型、變數
    var data3 = [];
    data2.forEach(element => {
        data3.push(element.split(' '));
    });
    
    //過濾掉空值項目
    data3.forEach(element => {
        element.forEach(element_2 => {
            if(element_2.trim() == '') 
            {
                var nummber = element.indexOf(element_2)
                element.splice(nummber,1);
            } 
        });
    });
    
    var textArea2 = '/// <summary>' + '\n';
    data3.forEach(element => {
        textArea2 += '/// <para>' + element[0] + ' ' + element[1] + ' ' + element[2] + '</para>\n';
    });
    textArea2 += '/// </summary>'
    document.getElementById('text2').value = textArea2;
})
//#endregion


//#region 新增中文註解
var button2 = document.getElementById('button2');
button2.addEventListener('click', (e) => {
    var textArea1 = document.getElementById('text1');
    var data = textArea1.value.split(/public|{|\r\n/);
    //過濾掉空值項目
    data.forEach(element => {
        if(element.trim() == '') 
        {
            var nummber = data.indexOf(element)
            data.splice(nummber,1);
        } 
    });
    
    //提取類型、變數名稱
    var data2 = [];
    for (let x = 0; x < data.length; x+=2) {
        data2.push(data[x])
    }
    //第二次分類 將類型、變數
    var data3 = [];
    data2.forEach(element => {
        data3.push(element.split(' '));
    });
    //過濾掉空值項目
    data3.forEach(element => {
        element.forEach(element_2 => {
            if(element_2.trim() == '') 
            {
                var nummber = element.indexOf(element_2)
                element.splice(nummber,1);
            } 
        });
    });
    data3.forEach(element => {
        console.log(element);    
    });
    var textArea2 = '';
    data3.forEach(element => {
        textArea2 += '/// <summary>' + element[0] + " " + element[1] + ' ' + '</summary>' + '\r\n';
        textArea2 += 'public ' + element[0] + ' ' + element[1] + ' { get; set; }' + '\r\n';
    });
    document.getElementById('text2').value = textArea2;
})
//#endregion

//#region 轉類別註解
var button3 = document.getElementById('button3');
button3.addEventListener('click', (e) => {
    var textArea1 = document.getElementById('text1');
    var data = textArea1.value.split(/<summary>|<\/summary>|\r\n|public|{/);
    console.log('data',data);
    //過濾掉空值項目 
    // data.forEach(element => {
    //     if(element.trim() == '') 
    //     {
    //         var nummber = data.indexOf(element)
    //         //splice 用法 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    //         //在陣列要新增、替換時使用
    //         data.splice(nummber,1);
    //     } 
    // });
    //提取類型、變數名稱
    // var data2 = [];
    // for (let x = 0; x < data.length; x+=2) {
    //     data2.push(data[x])
    // }
    //第二次分類 將類型、變數
    // var data3 = [];
    // data2.forEach(element => {
    //     data3.push(element.split(' '));
    // });
    
    //過濾掉空值項目
    // data3.forEach(element => {
    //     element.forEach(element_2 => {
    //         if(element_2.trim() == '') 
    //         {
    //             var nummber = element.indexOf(element_2)
    //             element.splice(nummber,1);
    //         } 
    //     });
    // });
    
    var textArea2 = '/// <summary>' + '\n';
    // data.forEach(element => {
    //     textArea2 += '/// <para>' + element[1] + ' ' + element[1] + ' ' + element[2] + '</para>\n';
    // });
    for (let x = 1; x < data.length; x += 4) {
        var tmp_chiName = data[x];
        var tmp_type = (data[x + 2].trim().split(' '))[0];
        var tmp_engName = (data[x + 2].trim().split(' '))[1];
        textArea2 += '/// <para>' + tmp_type + ' ' + tmp_chiName + ' ' + tmp_engName + '</para>\n';
    }
    textArea2 += '/// </summary>'
    document.getElementById('text2').value = textArea2;
})
//#endregion

//#region 新增中文註解
var button4 = document.getElementById('button4');
button4.addEventListener('click', (e) => {
    var textArea1 = document.getElementById('text1');
    var data = textArea1.value.split(/public|{|\r\n/);
    //過濾掉空值項目
    data.forEach(element => {
        if(element.trim() == '') 
        {
            var nummber = data.indexOf(element)
            data.splice(nummber,1);
        } 
    });
    
    //提取類型、變數名稱
    var data2 = [];
    for (let x = 0; x < data.length; x+=2) {
        data2.push(data[x])
    }
    //第二次分類 將類型、變數
    var data3 = [];
    data2.forEach(element => {
        data3.push(element.split(' '));
    });
    //過濾掉空值項目
    data3.forEach(element => {
        element.forEach(element_2 => {
            if(element_2.trim() == '') 
            {
                var nummber = element.indexOf(element_2)
                element.splice(nummber,1);
            } 
        });
    });
    data3.forEach(element => {
        console.log(element);    
    });
    var textArea2 = '';
    data3.forEach(element => {
        textArea2 += '/// <summary>' + '中文'+ '</summary>' + '\r\n';
        textArea2 += 'public ' + element[0] + ' ' + element[1] + ' { get; set; }' + '\r\n';
    });
    document.getElementById('text2').value = textArea2;
})
//#endregion