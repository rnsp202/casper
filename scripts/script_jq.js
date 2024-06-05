//============================jquery ver
const $sub = $('.sub')
const $sub_bg = $('.sub_bg')
const $nav = $('nav')
const $nav_clone = $nav.clone() //true생략가능
const $m_nav = $('.m_nav')
console.log($sub, $sub_bg, $nav, $nav_clone, $m_nav)

$sub_bg.hide()
$sub.hide()

$m_nav.append($nav_clone)
$m_nav.hide()

//마우스 올렸을 때 서브 보이기
$nav.on('mouseover',function(){
    $sub_bg.stop().slideDown(300)//밀리초단위
    $sub.stop().slideDown(300)
})

//마우스 올렸을 때 서브 보이기
$nav.on('mouseout',function(){
    $sub_bg.stop().slideUp(300)
    $sub.stop().slideUp(300)
})