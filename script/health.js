(function($){


//비밀번호 분실 질문 직접입력창

$('#pwQ').on({
    change: function(){
        var pwQinputbox = $('#pwQ option:selected').val();

        
        if(pwQinputbox == 'input'){
            $('.pwQinput').show();
        }
        else{
            $('.pwQinput').hide();
        }
    }
});



 //1. 사업장관리번호

 $('#firmNum').on({
    keyup: function(event){
        event.preventDefault();
        var regExp = /^(((?=.*[A-Za-z])+(?=.*[0-9])*)+([^가-힣ㄱ-ㅎㅏ-ㅣ!@#$%^&*\(\)-_\=\+\\\{\}\[\]\?\/\.\,\>\<\~\`\:\;\'\"]))[^\s][A-Za-z0-9]{1,}$/g;
        var fnValue = $(this).val().toString();

            if(fnValue===''){ 
              $('#firmNum').removeClass('error');
              $('#firmNum').removeClass('success');
              alert('아이디를 입력해주세요');
            }
            else{ 
              if( regExp.test(fnValue)===true ) {
                $('#firmNum').addClass('success');
                $('#firmNum').removeClass('error');
              }
              else if( regExp.test(fnValue)===false ) {
                $('#firmNum').removeClass('success'); 
                $('#firmNum').addClass('error')
              }
            }
    }
});


 //1-2. 사업장관리번호 버튼


 $('.firm-btn1').on({
    click: function(){     
        var regExp = /^(((?=.*[A-Za-z])+(?=.*[0-9])*)+([^가-힣ㄱ-ㅎㅏ-ㅣ!@#$%^&*\(\)-_\=\+\\\{\}\[\]\?\/\.\,\>\<\~\`\:\;\'\"]))[^\s][A-Za-z0-9]{5,}$/g;
        var fnValue = $('#firmNum').val().toString();

            if(fnValue===''){ 
              alert('사업장관리번호를 입력하세요.');
            }
            else{ 
              if( regExp.test(fnValue)===true ) {
              alert('사업장관리번호 사용 가능합니다.');
              }
              else if( regExp.test(fnValue)===false ) {
              alert('사업장관리번호 사용 불가합니다.');
              }
            }
    }
});

//1-3. 사업장기호 입력박스

$('#firmSym').on({
    keyup: function(){
       alert('사업장관리번호확인 버튼을 클릭하여 사업장관리번호 검증을 수행하십시오.');
    }
});

 //1-3(2). 사업장관리번호 확인방법 모달 버튼

$('.firm-btn2').on({
    click: function(){
        $('#modal').addClass('on');
    }
});
$('.close').on({
    click: function(){
        $('#modal').removeClass('on');
    }
});



//1-4. 단위사업장 검색 버튼
$('.unitSerch').on({
    click: function(){     
        var regExpUnit = /.{5,}/;
        var UnitValue = $('#nuit').val().toString();

            if(UnitValue===''){ 
              alert('사업장 관리번호를 입력하세요!');
            }
            else{ 
              if( regExpUnit.test(UnitValue)===true ) {
              alert('단위사업장을 검색 중...');
              }
              else if( regExpUnit.test(UnitValue)===false ) {
              alert('사업장관리번호 사용 불가합니다.');
              }
            }
    }
});

//1-5. 가입여부 확인하기(실명확인)
$('.unit-btn').on({
    click: function(){     
        var regExpUnit = /.{5,}/;
        var UnitValue = $('#nuit').val().toString();

            if(UnitValue===''){ 
              alert('사업장 관리번호를 입력하세요!');
            }
            else{ 
              if( regExpUnit.test(UnitValue)===true ) {
              alert('가입 가능한 실명입니다.');
              }
              else if( regExpUnit.test(UnitValue)===false ) {
              alert('가입 불가능한 실명입니다.');
              }
            }
    }
});

//2. 아이디

$('#id').on({
    keyup: function(event){
        event.preventDefault();
        var regExpId = /^(?=.*[A-Za-z])+(?=.*[0-9])+[A-Za-z0-9]{6,}$/g;
        var idValue = $(this).val().toString();

        if( idValue===''){
            $('#id').removeClass('error');
            $('#id').removeClass('success');
        }
        else{
            if( regExpId.test(idValue)===true ) {
                $('#id').addClass('success');
                $('#id').removeClass('error');
            }
            else if( regExpId.test(idValue)===false){
                $('#id').removeClass('success');
                $('#id').addClass('error');
            }
        }

    }
});

//2-1. 아이디 중복확인버튼

$('.id-double-btn').on({
    click: function(event){
        event.preventDefault();
        var regExpId = /^(?=.*[A-Za-z])+(?=.*[0-9])+[A-Za-z0-9]{6,}$/g;
        var idValue = $('#id').val().toString();

        if( idValue===''){
            alert('아이디를 입력하세요!');
        }
        else{
            if( regExpId.test(idValue)===true ) {
                alert('사용 가능한 아이디입니다.');
            }
            else if( regExpId.test(idValue)===false){
                alert('사용 불가한 아이디입니다. 다시 입력해주세요.');
            }
        }

    }
});



//3. 비밀번호

$('#pw').on({
    keyup: function(event){
        event.preventDefault();
        var regExpPw = /^(?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[`!@#$%^&*?])+[A-Za-z0-9`!@#$%^&*?]{9,}$/g;
        var pwValue = $(this).val().toString();

        if( pwValue===''){
            $('#pw').removeClass('error');
            $('#pw').removeClass('success');
        }
        else{
            if( regExpPw.test(pwValue)===true ) {
                $('#pw').addClass('success');
                $('#pw').removeClass('error');
            }
            else if( regExpPw.test(pwValue)===false){
                $('#pw').removeClass('success');
                $('#pw').addClass('error');
            }
        }

    }
});

//3. 비밀번호확인

$('#rpw').on({
    keyup: function(event){
        event.preventDefault();
        var regExprPw = /^(?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[`!@#$%^&*?])+[A-Za-z0-9`!@#$%^&*?]{9,}$/g;
        var rpwValue = $(this).val().toString();

        if( rpwValue===''){
            $('#rpw').removeClass('error');
            $('#rpw').removeClass('success');
        }
        else{
            if( regExprPw.test(rpwValue)===true ) {
                $('#rpw').addClass('success');
                $('#rpw').removeClass('error');
            }
            else if( regExprPw.test(rpwValue)===false){
                $('#rpw').removeClass('success');
                $('#rpw').addClass('error');
            }
        }

    }
});



//4. 비밀번호 분실 직접입력

$('#pwQinput').on({
    keyup: function(event){
        event.preventDefault();
        var regExpPwQ = /^(?=.*[A-Za-z])*(?=.*[0-9])*(?=.*[가-힣ㄱ-ㅎㅏ-ㅣ])*[A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ]{1,}$/g;
        var pwqValue = $(this).val().toString();

        if( pwqValue===''){
            $('#pwQinput').removeClass('error');
            $('#pwQinput').removeClass('success');
        }
        else{
            if( regExpPwQ.test(pwqValue)===true ) {
                $('#pwQinput').addClass('success');
                $('#pwQinput').removeClass('error');
            }
            else if( regExpPwQ.test(pwqValue)===false){
                $('#pwQinput').removeClass('success');
                $('#pwQinput').addClass('error');
            }
        }

    }
});


//5. 비밀번호 분실 답변

$('#pwA').on({
    keyup: function(event){
        event.preventDefault();
        var regExpPwA = /^(?=.*[A-Za-z])*(?=.*[0-9])*(?=.*[가-힣ㄱ-ㅎㅏ-ㅣ])*[A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ]{1,}$/g;
        var pwaValue = $(this).val().toString();

        if( pwaValue===''){
            $('#pwA').removeClass('error');
            $('#pwA').removeClass('success');
        }
        else{
            if( regExpPwA.test(pwaValue)===true ) {
                $('#pwA').addClass('success');
                $('##pwA').removeClass('error');
            }
            else if( regExpPwA.test(pwaValue)===false){
                $('#pwA').removeClass('success');
                $('#pwA').addClass('error');
            }
        }

    }
});



//6. 전화번호


$('#phone').on({
    keyup: function(e){
        var regExpPon =/[^0-9]/g;
        var PhoneValue = $(this).val();

        $('#phone').val(PhoneValue.replace(regExpPon, ''));

        if(PhoneValue===''){
            $('#phone').removeClass('error');
            $('#phone').removeClass('success');
        }
        else {
            if(PhoneValue.length>=10){
                $('#phone').addClass('success');
                $('#phone').removeClass('error');
            }
            else{
                $('#phone').removeClass('success');
                $('#phone').addClass('error');
            }
        }

    }
});



//7. 업무담당자명

$('#person').on({
    keyup: function(e){
        var regExpPers =/[^A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        var PersValue = $(this).val();

        $('#person').val(PersValue.replace(regExpPers, ''));

        if(PersValue===''){
            $('#person').removeClass('error');
            $('#person').removeClass('success');
        }
        else {
            if(PersValue.length>=1){
                $('#person').addClass('success');
                $('#person').removeClass('error');
            }
            else{
                $('#person').removeClass('success');
                $('#person').addClass('error');
            }
        }

    }
});


//9. 이메일

$('#email').on({
        keyup: function(event){
            event.preventDefault();
            var regExpEm = /^(?=.*[A-Za-z])*(?=.*[0-9])*(?=.*[-_.])*[A-Za-z0-9]{3,}$/g;
            var EmValue = $(this).val().toString();
    
            if( EmValue===''){
                $('#email').removeClass('error');
                $('#email').removeClass('success');
            }
            else{
                if( regExpEm.test(EmValue)===true ) {
                    $('#email').addClass('success');
                    $('#email').removeClass('error');
                }
                else if( regExpEm.test(EmValue)===false){
                    $('#email').removeClass('success');
                    $('#email').addClass('error');
                }
            }
    
        }
});



//이메일 셀렉트 박스
$('#emailDomainSel').on({
    change: function(){
        var emailDomainColor = $('#emailDomainSel').val();

        if(emailDomainColor == 'selected'){
            $('.emailDomain').removeClass('on');
            $('#emailDomain').val('');
            $('#emailDomain').prop("disabled",false);
        }
        else {
            $('.emailDomain').addClass('on');
            $('#emailDomain').val( $(this).val() );
            $('#emailDomain').prop("disabled",true);
        }


    }
});



})(jQuery);