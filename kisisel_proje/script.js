$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.sound').addClass("sticky");
      }else{
          $('.sound').removeClass("sticky");
      }
      if(this.scroll > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    
    /* Tıklanır menü/navbar script */
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Yazı Değiştirme Animasyon Scripti
    var typed = new Typed(".typing", {
        strings:["Front-End Developer","Back-End Developer","Blockchain Developer","$%*12!?"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var typed = new Typed(".typing-2", {
        strings:["Front-End Developer","Back-End Developer","Blockchain Developer","$%*12!?"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // owl carousel script kısmı
    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

  window.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("my-form");
    var status = document.getElementById("status");
    
    function success() {
      form.reset();
      status.innerHTML = "Başarılı";
    }

    function error() {
      status.innerHTML = "Mesaj gönderilemedi!";
    }

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  const soundCloud = document.querySelector('.sound-cloud')
  const off = document.querySelector('.off')
  const on = document.querySelector('#on')
  const myAudio = document.querySelector('#myAudio')
  
  off.addEventListener('click', () => soundTrack('off'))
  on.addEventListener('click', () => soundTrack('on'))
  
  const soundTrack = (soundState) => {
    if (soundState === 'off') {
      on.style.display = 'block'
      off.style.display = 'none'
      soundCloud.style.color = '#08fdd8'
      myAudio.play()
    } else if (soundState === 'on') {
      on.style.display = 'none'
      off.style.display = 'block'
      soundCloud.style.color = '#1d5a97'
      myAudio.pause()
    }
  }
  
  // Play music functionality
  
  const btnBars = document.querySelector('.bars')
  const btnTimes = document.querySelector('.times')
  const SideNav = document.querySelector('.aside')
  
  btnBars.addEventListener('click', () => myFunc('open'))
  btnTimes.addEventListener('click', () => myFunc('close'))
  
  const myFunc = (navCondition) => {
    if (navCondition === 'open') {
      SideNav.classList.add('show-nav')
      btnTimes.style.display = 'block'
      btnBars.style.display = 'none'
    } else if (navCondition === 'close') {
      SideNav.classList.remove('show-nav')
      btnTimes.style.display = 'none'
      btnBars.style.display = 'block'
    }
  }



  // CREATED BY TÖ