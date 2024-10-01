const div1 = document.querySelector('.nav-logo');
    const div2 = document.querySelector('.slider');

    div1.addEventListener('click', function() {
        div2.classList.toggle('active');
         // Toggle the 'active' class on click
    });
    div1.addEventListener('click', function() {
        div1.classList.toggle('active1'); // Toggle the 'active' class on click
    });
    const btn1=document.querySelector('.btn-grp1');
    btn1.addEventListener('click',function(){
        window.location.href="https://github.com/Manpreet0306/Notepad.git";
    });
    const btn2=document.querySelector('.btn-grp2');
    btn2.addEventListener('click',function(){
        window.location.href="https://manpreet0306.github.io/QR_code_GN/";
    });
    const btn3=document.querySelector('.btn-grp3');
    btn3.addEventListener('click',function(){
        window.location.href="https://manpreet0306.github.io/Quiz-App/";
    });
    const btn4=document.querySelector('.btn-grp4');
    btn4.addEventListener('click',function(){
        window.location.href=" https://manpreet0306.github.io/Password_GEN/";
    });
    const hireme=document.getElementById('btn');
    hireme.addEventListener('click',function(){
        window.location.href="#contactme";
    });