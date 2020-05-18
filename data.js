var itemsList = [
   
    new itemsOfPro('Code Web Create A Random Password 12 Symbols', 'images/product/code_random_password.png', 'https://www.dropbox.com/s/gptqipix90ednye/code_random_password.zip?dl=0', 'https://www.youtube.com/embed/H5RiR8YpYUY', 2),
    new itemsOfPro('Code Web Countdown To Birthday By Second', 'images/product/code_count_down-to_birthday.png', 'https://www.dropbox.com/s/kp0jixf3x6pwrul/code_count_down-to_birthday.zip?dl=0', 'https://www.youtube.com/embed/oxEcg_uSuyM', 2),
    new itemsOfPro('Code Web Play Music With Effects & Images', 'images/product/code_upload_play_music.png', 'https://www.dropbox.com/s/uk4j9k42gyj5g26/code_upload_play_music.zip?dl=0', 'https://www.youtube.com/embed/mtfHbttXcnc', 2),
    new itemsOfPro('Code Web Thi Thử Bằng Lái Xe Máy Trực Tuyến', 'images/product/code_thi_thu_bang_a1.png', 'https://www.dropbox.com/s/nfh4nhrd3347tyf/code_thi_thu_bang_a1.zip?dl=0', 'https://www.youtube.com/embed/ucBJwTBK8fw', 2),
    new itemsOfPro('Code Đếm ngược thời gian đến thi THPTQG 2020', 'images/product/exam_countdown.png', 'https://www.dropbox.com/s/5gh91l72ghh4o9s/count_down_to_exam.zip?dl=0', 'https://www.youtube.com/embed/u0SLZAeaPrA', 1),
    new itemsOfPro('Code Web Tạo Todo-List cực kỳ đơn giản', 'images/product/todo_list.png', 'https://www.dropbox.com/s/tno9g1ytbzg1bpi/todo_list.zip?dl=0', 'https://www.youtube.com/embed/TDVJ83oKB2I', 2),
    new itemsOfPro('Code Web thi thử bằng lái xe A1 12', 'images/product/code_random_password.png', 'https://www.dropbox.com/s/n5cz0ph4em46zhw/code_random_password.zip?dl=0', 'https://www.youtube.com/embed/H5RiR8YpYUY', 1),
    new itemsOfPro('Code Web thi thử bằng lái xe A1 12', 'images/product/code_random_password.png', 'https://www.dropbox.com/s/n5cz0ph4em46zhw/code_random_password.zip?dl=0', 'https://www.youtube.com/embed/H5RiR8YpYUY', 1)

];


function itemsOfPro(name, img, link, ytb, packer){
    this.name = name;
    this.img = img;
    this.link = link;
    this.ytb = ytb;
    this.typeno = packer;
}


