$(function(){
    $('.nav-features').click(function(){
        $('.header__nav-list .header__nav-item.nav-features span').toggleClass('up')
        $('.header__nav-list .header__nav-item.nav-features span').toggleClass('down')
        $('.nav-features').toggleClass('hidden')
    })
})