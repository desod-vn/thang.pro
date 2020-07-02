//BAR - Style//
    const openBar = () => {
        $('.dropdown-bar').css('display', 'block');
        $('.icon-bar').html('<i class="fas fa-times fa-3x"></i>');
        $('.toggle-bar .search').css('display', 'none');
    };
    const closeBar = () => {
        $('.dropdown-bar').css('display', 'none');
        $('.icon-bar').html('<i class="fas fa-bars fa-3x"></i>');
        $('.toggle-bar .search').css('display', 'block');
    };
    const transBar = () =>{
        $('.normal-bar').css('background-color', 'transparent');
        $('.normal-bar').css('position', 'static');
        $('.normal-bar').css('border-bottom', '');
    };
    const whiteBar = () =>{
        $('.normal-bar').css('background-color', 'white');
        $('.normal-bar').css('position', 'fixed');
        $('.normal-bar').css('border-bottom', '1px solid #ddd');
    };
    $('.toggle-bar').click(() => {
        if($(window).width() < 600)
            if($('.dropdown-bar').css('display') == 'none')
                openBar()
            else
                closeBar();
    });
    $(window).resize(() => {
        if($(window).width() < 600)
            $('.dropdown-bar').css('display', 'none')
        else
            $('.dropdown-bar').css('display', 'block');
    });
    $(window).scroll(() => {
        if($(this).scrollTop() >= $(window).height())
            whiteBar()
        else
            transBar();
    });
//Slide Projects//
    let clearChange;
    let change = (num = 0) => {
        clearChange = setInterval(() =>{
            if(num >= 3) num = 0;
            num++;
            $('#project-img').attr('src', `${num}.png`);
            $('.active-pro').attr('class', 'dot-pro');
            $(`#pro-${num - 1}`).addClass('active-pro');
        }, 2500);
    };
    
    let stopChange = () => clearInterval(clearChange);

    let moveImg = (num) => {
        $('#project-img').attr('src', `${num}.png`);
        $('.active-pro').attr('class', 'dot-pro');
        $(`#pro-${num - 1}`).addClass('active-pro');
    };

    $('#project-img').mouseenter(stopChange);
    $('#project-img').mouseout(() => {
        let currentNum = parseInt($('.active-pro').attr('id').slice(4));
        change(currentNum);
    });

//move prev and next img
    $('#prev').click(() => {
        stopChange();
        let currentNum = parseInt($('.active-pro').attr('id').slice(4));
        if(currentNum == 0) currentNum = 3;
        moveImg(currentNum);
    });
    $('#next').click(() => {
        stopChange();
        let currentNum = parseInt($('.active-pro').attr('id').slice(4)) + 2;
        if(currentNum == 4) currentNum = 1; 
        moveImg(currentNum);
    })
    change();
    //
    $('#items-list').mouseenter(() => {
        let pr = cl = us = 0;
    $('#projects').html(pr + ' Projects');
    $('#clients').html(cl + ' Clients');
    $('#users').html(us + ' Users');
    let turn = 0;
    let count = setInterval(() => {
        turn++;   
        pr += Math.round(Math.random() * 1);
        cl += Math.round(Math.random() * 1);
        us += Math.round(Math.random() * 500);
        if(turn == 20){
            pr = 3;
            cl = 2;
            clearInterval(count);
        }
        $('#projects').html(pr + ' Projects');
        $('#clients').html(cl + ' Clients');
        $('#users').html(us + ' Users');
        
    }, 100);
    });
    