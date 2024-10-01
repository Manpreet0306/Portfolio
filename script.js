const div1 = document.querySelector('.nav-logo');
    const div2 = document.querySelector('.slider');

    div1.addEventListener('click', function() {
        div2.classList.toggle('active');
         // Toggle the 'active' class on click
    });
    div1.addEventListener('click', function() {
        div1.classList.toggle('active1'); // Toggle the 'active' class on click
    });