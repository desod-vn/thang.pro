/////////////////////////////
//List my productions on default
/////////////////////////////
$("#items-list").html(listDefault());
clickItem();
function listDefault(){
    var count = (itemsList.length - 1);
    var inContent = '';
    for(var i = count; i >= (count - 5); i--){
        if(i === count || i === (count - 3))
            inContent += '<div class="row">';

        inContent += '<div class="col-lg-4"><div id="' + i + '" class="item-pr">'
        + '<img class="img" src="' + itemsList[i].img + '" alt="" />'
        + '<div class="item-title">' + itemsList[i].name + '</div>'
        + ''
        + '</div></div>';

        if(i == (count - 2) || i == (count - count))
            inContent += '</div>';
    }
        return inContent;
}
/////////////////////////////
//End my productions on default
/////////////////////////////



/////////////////////////////
//Choose a type in my list
/////////////////////////////
$('.rd').click(function(){
    var setNumber = parseInt(this.value);
    if(setNumber === 0){
        $('.rd').removeAttr('id');
        $(this).attr('id','active');
        $("#items-list").html(listDefault());
    }
    else{
        $('.rd').removeAttr('id');
        $(this).attr('id','active');
        $("#items-list").html(listType(setNumber));
    }
    clickItem();
});
/////////////////////////////
//End choose a type in my list
/////////////////////////////



/////////////////////////////
//Sort my productions on type
/////////////////////////////
function listType(type){
    var count = 0;
    var inContent = '';
    var itemNumber = (itemsList.length - 1);
    var i = 0;

    for(var j=0; j < itemsList.length; j++)
        if(type == itemsList[i].typeno)
            count++;
    
    while(itemNumber >= 0){
        if(type == itemsList[itemNumber].typeno){
        if(i == 0 || i == 3)
            inContent += '<div class="row">';
        
        inContent += '<div class="col-lg-4"><div id="' + itemNumber + '" class="item-pr">' //+ pros[i].pack
        + '<img class="img" src="' + itemsList[itemNumber].img + '" alt="" />'
        + '<div class="item-title">' + itemsList[itemNumber].name + '</div>'
        + ''
        + '</div></div>';

        i++;

        if(i == 3 || i == 6 )
            inContent += '</div>';
        }
            if(i==6)
                break;

            --itemNumber;
    }
    return inContent;
}

/////////////////////////////
//Packages include languages
/////////////////////////////

function clickItem(){
    $('.item-pr').click(function(){
        const id = this.id;
        document.body.style.overflow = 'hidden';

        $(this).after('<div id="item-show"></div>');
        $('#item-show').css('display', 'block');
        $('#item-show').css('background', 'url('  + itemsList[id].img + ')');
        showItem(id);

        $('#close').click(function(){
            document.body.style.overflow = 'auto';
            $('#item-detail').remove();
            $('#item-show').remove();
        });
    });
}


function showItem(id){
    var insertCon = '<div class="container">'
    + '<div class="row">' + '<div class="col-lg-8">'
    + '<div class="embed-responsive embed-responsive-4by3">'
    + '<div id="video-detail"></div>'
    + '</div>' + '</div>'
    + '<div class="col-lg-4">'
    + '<div id="more-detail"></div>'
    + '</div>' + '</div>';


    $('#item-show').after('<div id="item-detail"></div>');
    $('#item-detail').html(insertCon);
    $('#video-detail').html('<iframe class="embed-responsive-item" src="' + itemsList[id].ytb + '" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $('#more-detail').html('<div class="name">' + itemsList[id].name + '</div>');
    $('.name').after('<a class="down" href="' + itemsList[id].link + '" target="_blank">DOWNLOAD</a>');
    $('.down').after('<a id="close">CLOSE</a>');
    $('#close').after('<iframe class="bot" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbok.supporter" width="100%" height="214" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>');
}
/////////////////////////////
//Write products to homepage
/////////////////////////////


//itemsList.innerHTML = listPro();
/////////////////////////////
//End wirte content to homepage
/////////////////////////////



/////////////////////////////
//Start show production
/////////////////////////////
/*
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
            itemVideo.innerHTML = '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/M-h4wJOD4so" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';


        
        }
    })
}
itemShow.onclick = function(){
    itemShow.style.display = 'none';
    document.body.style.overflow = 'auto';
    itemVideo.innerHTML = '';
    itemDetail.style.display = 'none';
}*/