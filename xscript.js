
$.ajax({
    url : 'include/product.json',
    type : 'get',
    dataType : 'text',
    success : result => {
        const item = JSON.parse(result);
    
//Default item when enter my page
        const listDefault = () => {
            const count = (item.length - 1);
            let outCode = '';
            clickItem();
            for(let i = count; i >= (count - 5); i--){
                if(i == count || i == (count - 3))
                    outCode += '<div class="row">';

                outCode += `<div class="col-sm-4"><div id="${i}" class="item-pr">
                            <img class="img" src="${item[i].img}" alt="" />
                            <div class="item-title">${item[i].name}</div></div></div>`;

                if(i == (count - 2) || i == (count - count))
                    outCode += '</div>';
            }
            return outCode;
        }

//List others type item
        const listType = type => {
            let outCode = '';
            let items = (item.length - 1);
            let i = 0;
        
            while(items >= 0){
                if(type == item[items].typeno){
                    if(i == 0 || i == 3)
                        outCode += '<div class="row">';
                
                    outCode += `<div class="col-sm-4"><div id="${items}" class="item-pr">
                                <img class="img" src="${item[items].img}" alt="" />
                                <div class="item-title">${item[items].name}</div></div></div>`;
        
                    i++;
        
                    if(i == 3 || i == 6 )
                        outCode += '</div>';
                }

                if(i==6) break;
        
                --items;
            }
            return outCode;
        }

        $('.rd').click(function(){
            const setNumber = parseInt(this.value);
            if(setNumber == 0){
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

        const clickItem = () => {
            $('.item-pr').click(function() {
                const id = this.id;
                document.body.style.overflowY = 'hidden';
                $('body').after('<div id="item-show"></div>');
                showItem(id);
                $('#item-show').click((choose) => {
                    if(choose.target.id == 'item-show'){
                    document.body.style.overflowY = 'auto';
                    $('#item-show').remove();
                    }
                });
            });
        }

        const showItem = id => {
            const incode = `<div class="container">
            <div class="row"><div class="col-sm-8">
            <div class="embed-responsive embed-responsive-4by3">
            <iframe class="embed-responsive-item" src="${item[id].ytb}"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe></div></div>
            <div class="col-sm-4"><div id="more-detail">
            <div class="name">${item[id].name}</div>
            <a class="down" href="${item[id].link}" target="_blank">DOWNLOAD</a>
            </div></div>`;
            $('#item-show').html(incode);
        }
    $("#items-list").html(listDefault());
    clickItem();
    }
});


/*const clickItem = () => {
    $('.item-pr').click(function(){
        const id = this.id;
        document.body.style.overflow = 'hidden';

        $(this).after('<div id="item-show"></div>');
        showItem(id);

        $('#close').click(function(){
            document.body.style.overflow = 'auto';
            $('#item-detail').remove();
            $('#item-show').remove();
        });
    });
}

*/

/*
    <div class="container">
        <div class="row color_me">
            <div class="col-sm-4">
                <img class="img-fluid" src="images/avt.png" alt="" />
            </div>
            <div class="col-sm-8">
                <span class="hi">Xin chào mọi người !!! </span> <br />
                <span class="hi-name">Tôi là: Vương Toàn Thắng.</span> <br />
                <div class="hi-more">Sinh năm 2001 tại một vùng quê nhỏ ở tỉnh Hưng Yên.</div>
                <div class="hi-more">Hiện tôi đang là sinh viên năm nhất tại trường Đại học Công Nghiệp Hà Nội (HAUI)
                và khoa mà tôi đang theo học là Công nghệ thông tin (IT).</div>
                <span class="hi-name">Tôi đang làm Freelancer Web Developer & Designer.</span> <br />
                <div class="hi-more">Biết đến lập trình web từ khi còn là một học sinh cấp 2. Hiện tại đang hoạt động về nhiều mảng đặc biệt là web.</div>
                <div class="hi-more">Website của tôi cung cấp những mã nguồn, code, ứng dụng do tôi phát triển cùng
                các sản phẩm đã hoàn thiện. Đặc biệt chúng hoàn toàn miễn phí và dễ dàng cài đặt
                cũng như sử dụng vào nhiều mục đích.</div>
                <button id="progress" class="hi-infor">Contact Me</button>
            </div>
        </div>
</section>
<!--End productions-->
    <p id="demo"></p>

*/
/////////////////////////////
//Write products to homepage
/////////////////////////////