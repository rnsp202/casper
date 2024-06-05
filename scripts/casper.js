//변수
const sub = document.querySelectorAll('.sub')
const sub_bg = document.querySelector('.sub_bg')
const nav = document.querySelector('nav')
console.log(sub)
console.log(sub_bg)
console.log(nav)
const nav_clone = nav.cloneNode(true)
console.log(nav_clone)
const m_nav = document.querySelector('.m_nav')
console.log(m_nav) //복제대상 붙여넣기 용

//모든 서브 숨기기
// sub_bg.style.display = 'none'
// for(let i of sub){i.style.display = 'none'}

//m_nav 모바일 전용 메뉴의 기존 내비게이션 태그 마지막 자식 복붙
m_nav.appendChild(nav_clone)

//모바일 전용 메뉴 nav 숨기기
nav_clone.style.display = 'none'

//메뉴에 마우스 올리면 서브 메뉴 나타나기(높이 길어지는 효과)
//height + transition + overflow
//1.숨기는 처리를 display가 아닌 높이값으로 재설정 = 0
sub_bg.style.height = '0'
sub_bg.style.transition = 'height 0.3s'
for(let i of sub){
    i.style.height = '0';
    i.style.overflow = 'hidden';
    i.style.transition = 'height 0.3s'
}
//2. 메뉴 마우스 올리면 서브, 서브배경 보이기
nav.addEventListener('mouseover',()=>{
    sub_bg.style.height = '180px'
    for(let i of sub){
        i.style.height = '180px'
    }
})
nav.addEventListener('mouseout',()=>{
    sub_bg.style.height = '0'
    for(let i of sub){
        i.style.height = '0'
    }
})