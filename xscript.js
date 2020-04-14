var itemsList = document.getElementById('items-list');
var writeDown = setTimeout(writeDown, 3000);
var sayHello = document.getElementById('sub-hello');
var loopName,i = 0;
var count = (pros.length - 1);
var itemShow = document.getElementById('item-show');
var itemDetail = document.getElementById('item-detail');
var itemVideo = document.getElementById('video-detail');
/////////////////////////////
//Change content when access
/////////////////////////////
function writeDown(){
    sayHello.innerHTML = '.';
    loopName = setInterval(loopName, 1000);
}

function loopName(){
    sayHello.innerHTML += '.';
    i++;
    if(i == 3)
        sayHello.innerHTML = 'I\'M A <span class="black-bg">Developer</span>';
    if(i == 7)
        sayHello.innerHTML = 'I\'M A <span class="black-bg">Designer</span>';
    if(i == 11)
        sayHello.innerHTML = 'IT\'S ALL  <span class="black-bg">Free For You</span>';
    if(i == 12)
        i = 0;
}
/////////////////////////////
//End change content when access
/////////////////////////////

/////////////////////////////
//Packages include languages
/////////////////////////////

/////////////////////////////
//Write products to homepage
/////////////////////////////
function listPro(){
    var inContent = '';
    for(var i = count; i >= (count - 7); i--){
        if(i == count || i == (count - 4))
            inContent += '<div class="row">';

    inContent += '<div class="col-lg-3"><div id="' + i + '" class="item-pr">' + pros[i].pack
    + '<img class="img-fluid" src="' + pros[i].img + '" alt="" />'
    + '<div class="item-title">' + pros[i].name + '</div>'
    + '<div id="' + i + '" class="overlay"><div class="item-link">Click để xem thêm</div></div>'
    + '</div></div>';

        if(i == (count - 3) || i == (count - count))
            inContent += '</div>';
}
        return inContent;
}

itemsList.innerHTML = listPro();
/////////////////////////////
//End wirte content to homepage
/////////////////////////////



/////////////////////////////
//Start show production
/////////////////////////////
itemsList.addEventListener('mousedown', showProductions);

function showProductions(event){
    var choose = event.target.parentNode;
    var proSelected = choose.id;
    
    choose.addEventListener('click', function(event){
        if(proSelected){
            itemShow.style.display = 'block';
            itemShow.style.backgroundImage = 'url(' + pros[proSelected].img + ')';

            itemDetail.style.display = 'block';
        
            document.body.style.overflow = 'hidden';
            itemVideo.innerHTML = '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/M-h4wJOD4so" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';


        
        }
    })
}
itemShow.onclick = function(){
    itemShow.style.display = 'none';
    document.body.style.overflow = 'auto';
    itemVideo.innerHTML = '';
    itemDetail.style.display = 'none';
}