$(function(){
    $('.nav-features').click(function(){
        $('.header__nav-list .header__nav-item.nav-features span').toggleClass('up')
        $('.header__nav-list .header__nav-item.nav-features span').toggleClass('down')
        $('.nav-features').toggleClass('hidden')
    })

    $('.nav-company').click(function(){
        $('.header__nav-list .header__nav-item.nav-company span').toggleClass('up')
        $('.header__nav-list .header__nav-item.nav-company span').toggleClass('down')
        $('.nav-company').toggleClass('hidden')
    })
})