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
var button1 = document.getElementById('button2');
button1.addEventListener('click', (e) => {
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