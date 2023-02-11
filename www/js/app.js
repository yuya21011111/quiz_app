function setData(str, results, listId) {
    $(listId).empty();
    var count = results.length;
    var dom = '';
    // ヘッダー
        dom = dom + "<li class='list-header'>" + str + " 結果：" + count + "件</li>";
    // リストアイテム
        alert(results);
    for (var i = 0; i < results.length; i++) {
        var object   = results[i];
        var quiz_title = object.get('quiz');
        var choice1 = object.get('choice1');
        var choice2 = object.get('choice2');
        var choice3 = object.get('choice3');
        var choice4 = object.get('choice4');
        var answer_1 = object.get('answer_1');
        var genre_1 = object.get('genre_1');
        
         
        dom = dom + "<div style=\"color:blue\">" + "題名：" + quiz_title + "</div>";
        dom = dom + "<ons-list-item class=\"item\">" + "A." + choice1 + "</ons-list-item>";
         dom = dom + "<ons-list-item>" + "B." + choice2 + "</ons-list-item>";
          dom = dom + "<ons-list-item>" + "C." + choice3 + "</ons-list-item>";
           dom = dom + "<ons-list-item>" + "D." + choice4 + "</ons-list-item>";
        console.log(dom)
    }
    
    $(listId).append(dom);
    const a = document.querySelector('#item');
    alert(a);
}


