// const div1 = document.querySelector('.nav-logo');
// const div2 = document.querySelector('.slider');

// div1.addEventListener('click', function () {
//     div2.classList.toggle('active');
//     // Toggle the 'active' class on click
// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const section = document.querySelector(".hero-section");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    section.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    const section = document.querySelector(".hero-section");

}

const btn1 = document.querySelector('.btn-grp1');
btn1.addEventListener('click', function () {
    window.location.href = "https://github.com/Manpreet0306/Notepad.git";
});
const btn2 = document.querySelector('.btn-grp2');
btn2.addEventListener('click', function () {
    window.location.href = "https://manpreet0306.github.io/QR_code_GN/";
});
const btn3 = document.querySelector('.btn-grp3');
btn3.addEventListener('click', function () {
    window.location.href = "https://manpreet0306.github.io/Quiz-App/";
});
const btn4 = document.querySelector('.btn-grp4');
btn4.addEventListener('click', function () {
    window.location.href = " https://manpreet0306.github.io/Password_GEN/";
});

const linkedin = document.getElementById('linkedin');
linkedin.addEventListener('click', function () {
    window.location.href = "https://www.linkedin.com/in/manpreet-singh-717920221";
});
const github = document.getElementById('github');
github.addEventListener('click', function () {
    window.location.href = "https://github.com/Manpreet0306";
});
const insta = document.getElementById('insta');
insta.addEventListener('click', function () {
    window.location.href = "https://www.instagram.com/_preet_gurjar_03?igsh=MThlZmMybTl2ankzMw==";
});
const twitter = document.getElementById('twit');
twitter.addEventListener('click', function () {
    window.location.href = "";
});
const msg = document.getElementById('message');
msg.addEventListener('click', function () {
    var recipient = "chokkarpreet@gmail.com";  // Set your email address here
            var sub = "Inquiry from the Website";
            var bod = "Hi, I would like to inquire about...";

            // Construct the mailto URL
            var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(sub) + "&body=" + encodeURIComponent(bod);
            var tempLink = document.createElement("a");
            tempLink.href = mailtoLink;

            // Append the link to the body (it won't be visible)
            document.body.appendChild(tempLink);

            // Programmatically click the anchor link
            tempLink.click();

            // Remove the link after clicking
            document.body.removeChild(tempLink);
});

const hireme = document.getElementById('btn');
hireme.addEventListener('click', function () {
    window.location.href = "#contactme";
});

const form = document.querySelector('form');
const fullname = document.getElementById('Name');
const email = document.getElementById('Email');
const subject = document.getElementById('Subject');
const message = document.getElementById('Message');

function SendEmail() {
    const bodymessage = `fullName: ${fullname.value}<br> Email: ${email.value}<br> subject: ${subject.value}<br> message: ${message.value}<br>`;
    Email.send({
        SecureToken :"51c1b826-6dff-40b0-8992-39adcc4af80e",
        To: 'chokkarpreet@gmail.com',
        From: "chokkarpreet@gmail.com",
        Subject: subject.value,
        Body: bodymessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message is sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}
function checkinput() {
    const items = document.querySelectorAll('.formfield');
    for (const item of items) {

        if (item.value == "") {

            item.classList.add("error");

            item.parentElement.classList.add("error");

        }
        if(items[1].value !==""){
            checkmail();
        }
        items[1].addEventListener("keyup",()=>{
            checkmail();
        });

        item.addEventListener("keyup", () => {

            if (item.value != "") {

                item.classList.remove("error");

                item.parentElement.classList.remove("error");

            }

            else {

                item.classList.add("error");

                item.parentElement.classList.add("error");

            }

        });
    }

}
function checkmail(){
    const emailRegex=/^([a-z\d\-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");
    }else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkinput();
    if (!fullname.classList.contains("error") && !email.classList.contains ("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
        SendEmail();
        form.reset();
        return false;
    }
})