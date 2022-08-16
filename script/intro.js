(function($){

    $('.next-btn').on({
        click: function(e){
            e.preventDefault();
            if($('#agree-yes1').is(':checked')===false || $('#agree-yes2').is(':checked')===false || $('#agree-yes3').is(':checked')===false){
                alert('필수 약관을 모두 동의하셔야 회원가입이 가능합니다.');
                return;
            }
            else{
                location.href='./index.html';
            }
        }
    });


    // $('.next-btn').on({
    //     click: function(e){
    //         e.preventDefault();
    //         if($('#agree-yes1').is(':checked')===true || $('#agree-yes2').is(':checked')===true || $('#agree-yes2').is(':checked')===true){            
    //             location.href='./index_intro.html';
    //         }
    //         else{
    //             alert('필수 약관을 모두 동의하셔야 회원가입이 가능합니다.');  
    //             return;
    //         }
    //     }
    // });


})(jQuery);