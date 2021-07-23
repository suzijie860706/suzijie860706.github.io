//#region 轉類別註解
var button1 = document.getElementById('button1');
button1.addEventListener('click', (e) => {
    var textArea1 = document.getElementById('text1');
    var data = textArea1.value.split(/\/\/\/ <summary>|<\/summary>|\r\n/);
    //過濾掉空值項目
    data.forEach(element => {
        if (element.trim() == '') {
            var nummber = data.indexOf(element)
            data.splice(nummber, 1);
        }
    });
    //提取類型、變數名稱
    var data2 = [];
    for (let x = 0; x < data.length; x += 2) {
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
            if (element_2.trim() == '') {
                var nummber = element.indexOf(element_2)
                element.splice(nummber, 1);
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
        if (element.trim() == '') {
            var nummber = data.indexOf(element)
            data.splice(nummber, 1);
        }
    });

    //提取類型、變數名稱
    var data2 = [];
    for (let x = 0; x < data.length; x += 2) {
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
            if (element_2.trim() == '') {
                var nummber = element.indexOf(element_2)
                element.splice(nummber, 1);
            }
        });
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

    var textArea2 = '/// <summary>' + '\n';
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
        if (element.trim() == '') {
            var nummber = data.indexOf(element)
            data.splice(nummber, 1);
        }
    });

    //提取類型、變數名稱
    var data2 = [];
    for (let x = 0; x < data.length; x += 2) {
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
            if (element_2.trim() == '') {
                var nummber = element.indexOf(element_2)
                element.splice(nummber, 1);
            }
        });
    });
    var textArea2 = '';
    data3.forEach(element => {
        textArea2 += '/// <summary>' + '中文' + '</summary>' + '\r\n';
        textArea2 += 'public ' + element[0] + ' ' + element[1] + ' { get; set; }' + '\r\n';
    });
    document.getElementById('text2').value = textArea2;
})
//#endregion


//#region 新增中文註解
var button5 = document.getElementById('button5');
button5.addEventListener('click', (e) => {
    var textArea1 = document.getElementById('text1');
    var data = textArea1.value.split(/--|\n/);
    //排除空字串
    for (let x = 0; x < data.length; x++) {
        data[x] = data[x].trim();
    }
    var textArea2 = '';
    for (let x = 0; x < data.length; x += 2) {
        const element = data[x];
        textArea2 += '/// <summary>' + data[x + 1] + '</summary>' + '\r\n';
        textArea2 += 'public ' + 'string' + ' ' + data[x] + ' { get; set; }' + '\r\n';
    }
    document.getElementById('text2').value = textArea2;
})
//#endregion

//#region 增加Model資料轉參數parameter
var button6 = document.getElementById('button6');
button6.addEventListener('click', (e) => {
    var textArea1 = document.getElementById('text1');
    var data = textArea1.value.split(/\n/);
    //只取得每列資料的第四筆
    var data2 = [];
    for (let x = 3; x < data.length; x += 4) {
        data2.push(data[x]);
    }
    //取得屬性名稱
    var data3 = [];
    for (let x = 0; x < data2.length; x++) {
        const element = data2[x];
        var tempData = element.split(/public | { get; set; }/);
        data3.push(tempData[1].split(' ')[1]);
    }
    var textArea2 = '';
    for (let x = 0; x < data3.length; x++) {
        textArea2 += 'parameters.Add("@' + data3[x] + '", strings[' + x.toString() + '].Trim(), DbType.AnsiString);\r\n';
    }
    document.getElementById('text2').value = textArea2;
})
//#endregion

//#region Dapper參數轉List
var button7 = document.getElementById('button7');
button7.addEventListener('click', (e) => {
    var textArea1 = document.getElementById('text1');
    var data = textArea1.value.split(/;\n/);
    //只取得每列資料的第四筆
    var data2 = [];
    for (let x = 0; x < data.length; x++) {
        //將所有的空白刪除 /g代表全部
        data[x] = data[x].toString().replace(/ /g, "");
        //找出第二個雙引號，並且改成關鍵字，用作split特定資料
        var firstQuotationMark = data[x].indexOf("\"");
        var SecondQuotationMark = data[x].indexOf("\"", firstQuotationMark + 1);
        var keyWord = "JackForKeyWord";
        data[x] = data[x].toString().substring(0, SecondQuotationMark) + keyWord +
            data[x].toString().substring(SecondQuotationMark + 1, data[x].length);

        tmpData = data[x].toString().split(/JackForKeyWord,|,DbType/);

        //取得屬性名稱
        var dataName = tmpData[0].split(/\"/);
        data2.push(dataName[1].toString().replace('@', ''));
        data2.push(tmpData[1]);
    }

    var textArea2 = 'LastUpdTime = DateTime.Now, \n' +
        'LastUpdPerson = "SYSTEM", \n';

    for (let index = 0; index < data2.length; index += 2) {
        textArea2 += data2[index] + ' = ' + data2[index + 1] + ',\n'
    }
    textArea2 = textArea2.substring(0, textArea2.length - 2);
    document.getElementById('text2').value = textArea2;
})
//#endregion

//#region Model資料轉txt字串
var button8 = document.getElementById('button8');
button8.addEventListener('click', (e) => {
    var textArea1 = document.getElementById('text1');
    var data = textArea1.value.split(/\n/);
    //只取得每列資料的第四筆
    var data2 = [];
    for (let x = 3; x < data.length; x += 4) {
        data2.push(data[x]);
    }
    //取得屬性名稱
    var data3 = [];
    for (let x = 0; x < data2.length; x++) {
        const element = data2[x];
        var tempData = element.split(/public | { get; set; }/);
        data3.push(tempData[1].split(' ')[1]);
    }
    var textArea2 = 'string line = string.Empty;' + '\n';
    for (let x = 0; x < data3.length; x++) {
        if (x == 0) {
            textArea2 += 'line += data.' + data3[x] + ';\n'
        }
        else {
            textArea2 += 'line += "," + data.' + data3[x] + ';\n'
        }
    }
    document.getElementById('text2').value = textArea2;
})
//#endregion

//#region txt字串轉小寫，增加雙引號
var button9 = document.getElementById('button9');
button9.addEventListener('click', (e) => {
    var textArea1 = document.getElementById('text1').value;
    keyWord = ['Line','Data','","',';','substring'];
    changeWord = ['line','data','",\\\""',' + "\\\"";','Substring']
    for (let x = 0; x < keyWord.length; x++) {
        var regExp = new RegExp(keyWord[x],"g");
        textArea1 = textArea1.replace(regExp,changeWord[x]);
    }
    document.getElementById('text2').value = textArea1;
})
//#endregion