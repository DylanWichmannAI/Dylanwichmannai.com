/* DWAI Solutions — script.js | Vanilla JS only */
(function(){
  'use strict';
  var toggle=document.getElementById('navToggle');
  var navLinks=document.getElementById('navLinks');
  var header=document.getElementById('header');

  if(toggle&&navLinks){
    toggle.addEventListener('click',function(){
      var isOpen=navLinks.classList.toggle('is-open');
      toggle.classList.toggle('is-open',isOpen);
      toggle.setAttribute('aria-expanded',String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        navLinks.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded','false');
      });
    });
    document.addEventListener('click',function(e){
      if(!toggle.contains(e.target)&&!navLinks.contains(e.target)){
        navLinks.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }

  if(header){
    window.addEventListener('scroll',function(){
      header.style.boxShadow=window.scrollY>10?'0 4px 24px rgba(0,0,0,0.08)':'';
    },{passive:true});
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click',function(e){
      var targetId=this.getAttribute('href');
      if(targetId==='#'||targetId==='#top')return;
      var target=document.querySelector(targetId);
      if(target){
        e.preventDefault();
        var navH=header?header.offsetHeight:0;
        var top=target.getBoundingClientRect().top+window.pageYOffset-navH-16;
        window.scrollTo({top:top,behavior:'smooth'});
      }
    });
  });
})();
