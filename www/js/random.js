// ランダムなgifを挿入
function rand_img(){
        var icon = document.querySelector('#img');
        var min = 1
        var max = 8
        var random_Number = Math.floor( Math.random() * (max + 1 - min) ) + min ;
        icon.src =  'image/' + 'popute' + random_Number + '.gif';
}