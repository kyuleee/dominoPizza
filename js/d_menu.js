const tabmenus=document.querySelectorAll('.menuTab');
const tabname=document.querySelector('#tab_name');
const menuNav=document.querySelector('.menuNav');
const contents=document.querySelectorAll('.menu_section');
// tabmenus.forEach(function(tabMenu){
//     tabMenu.addEventListener('click',function(){
//         tabname.innerHTML=tabMenu.dataset.text;
//         tabname.style.color='#111';
//     })

// })

// menuNav.addEventListener('click',function(e){
//     // e.currentTarget
//     let id=e.target.dataset.id;
//     document.getElementById(id).classList.add('active');
//     
// })

// tabmenus.forEach(function(tabMenu){
//     tabMenu.addEventListener('click',function(){
//         tabname.innerHTML=tabMenu.dataset.text;
//         tabname.style.color='#111';
//         let id=tabMenu.dataset.id;
//         if(id){
//             document.getElementById(id).classList.add('active');
//         }

//     })
// })
tabmenus.forEach(function(tabMenu){
    document.getElementById('new').classList.add('active');
    tabMenu.addEventListener('click',function(){
        tabname.innerHTML=tabMenu.dataset.text;
        tabname.style.color='#111';
        contents.forEach(function(content){
        content.classList.remove('active');
    })
        console.log(tabMenu.dataset.id);
        let id=tabMenu.dataset.id;
        if(id){
            document.getElementById(id).classList.add('active');
        }
    })
})


const pizzaName=document.querySelector('#pizzaname');
const select1options=document.querySelectorAll('.select_1>option');
const select2options=document.querySelectorAll('.select_2>option');
select1options.forEach(function(select1option){
    select1option.addEventListener('click',function(){
        console.log(select1option);
        // pizzaName.innerHTML=select1option.dataset.text;
    })
})
select2options.forEach(function(select2option){
    select2option.addEventListener('click',function(){
        pizzaName.innerHTML=select2option.dataset.text;
    })
})

const decrease=document.getElementById('decrease');
const number=document.getElementById('number');
const increase=document.getElementById('increase');
const current=parseInt(number.innerText,10);
increase.addEventListener('click',function(){
    number.innerText=current+1;
})
decrease.addEventListener('click',function(){
    number.innerText=current-1;
})

const leftPizza=document.querySelector('.left_pizza');
const rightPizza=document.querySelector('.right_pizza');
const select1Pizza=document.querySelector('.select_1');
const select2Pizza=document.querySelector('.select_2');
const selects=document.querySelectorAll('.select_pizza>div>select');
// console.log(selects);
let array=['RPZ223.png','RPZ223U.png','RPZ224.png','RPZ223Z.png','RPZ224.png','RPZ223Y.png','RPZ223B.png','RPZ169.png','RPZ169U.png','RPZ170.png','RPZ169Z.png','RPZ170.png','RPZ169Y.png','RPZ169B.png',
'RPZ003.png','RPZ003U.png','RPZ111.png','RPZ003Z.png','RPZ111.png','RPZ003Y.png','RPZ003B.png','RPZ155.png','RPZ155U.png','RPZ156.png','RPZ155Z.png','RPZ156.png','RPZ155Y.png','RPZ155B.png','RPZ147.png','RPZ147U.png','RPZ148.png','RPZ147Z.png','RPZ148.png','RPZ147Y.png','RPZ147B.png','RPZ005.png','RPZ005U.png','RPZ109.png','RPZ005Z.png','RPZ109.png','RPZ005Y.png','RPZ005B.png','RPZ001.png','RPZ001U.png','RPZ110.png','RPZ001Z.png','RPZ110.png','RPZ001Y.png','RPZ001B.png','RPZ290.png','RPZ290U.png','RPZ291.png','RPZ290Z.png','RPZ291.png','RPZ290Y.png','RPZ290B.png','RPZ271.png','RPZ271U.png','RPZ272.png','RPZ271Z.png','RPZ272.png','RPZ271Y.png','RPZ271B.png','RPZ159.png','RPZ159U.png','RPZ160.png','RPZ159Z.png','RPZ160.png','RPZ159Y.png','RPZ159B.png'
];
selects.forEach(function(selected){
    // console.log(selected);
    selected.addEventListener('change',function(){
        let num=selected.options.selectedIndex;
        if(selected==select1Pizza){
            leftPizza.innerHTML=`<img src="./img/${array[num-1]}" alt="">`;
            // console.log(selected);
        }else if(leftPizza.children.length==0){
            alert('첫번째 피자부터 선택하세요');
        }else if(selected==select2Pizza){
            rightPizza.innerHTML=`<img src="./img/${array[num-1]}" alt="">`;
        }
    })
})

const sizeCheck=document.querySelector('.sizewrap');
const sizeChoices=document.querySelectorAll('.sizewrap>div');
document.querySelector('#large').classList.add('active');
sizeCheck.addEventListener('click',function(e){
    let tar=e.target;
    sizeChoices.forEach(function(sizeChoice){
        sizeChoice.classList.remove('active');
        if(tar==sizeChoice){
            tar.classList.add('active');
        }   
    })
})

const btnWhites=document.querySelectorAll('.btn_white');
// console.log(btnWhites);
btnWhites.forEach(function(btnWhite){
    console.log(btnWhite);
    btnWhite.addEventListener('mouseenter',function(){
        btnWhite.classList.add('chbg');
    })
    btnWhite.addEventListener('mouseleave',function(){
        btnWhite.classList.remove('chbg');
    })
})
// btnWhite.addEventListener('click',function(){
//     btnWhite.classList.add('chbg');
// })

// const plus=document.querySelector('#plus');
// const minus=document.querySelector('#minus');
// const inp=document.querySelector('.inp');
// let val=inp.innerHTML;
// minus.addEventListener('click',function(){
//     val--;
//     console.log(val);
//     if(val<0){
//         return false
//     }
//     inp.value=val;
// })
// plus.addEventListener('click',function(){
//     val++;
//     console.log(val);
//     inp.value=val;
// })


// *****************증감 버튼**************
const btns=document.querySelectorAll('.countwrap');
const minusBtns=document.querySelectorAll('.minus_btn');
const plusBtns=document.querySelectorAll('.plus_btn');

// minusBtns.forEach(function(minusBtn){
//     minusBtn.addEventListener('click',function(){
//         console.log(minusBtn.nextElementSibling.value); 
//         // minusBtn.nextElementSibling.value--;
//         const next= minusBtn.nextElementSibling;
//         if(next.value>0){
//             next.value--;
//         }
//     })
// })

// minusBtns.forEach(function(minusBtn){
//     minusBtn.addEventListener('click',minusFunc)
// })
// plusBtns.forEach(function(plusBtn){
//     plusBtn.addEventListener('click',plusFunc)
// })
// function minusFunc(e){
//     // console.log(e.currentTarget.nextElementSibling.value); 
//     const next= e.currentTarget.nextElementSibling;
//     if(next.value>0){
//         next.value--;
//     }
// }
// function plusFunc(e){
//     // console.log(e.currentTarget.nextElementSibling.value); 
//     const prev= e.currentTarget.previousElementSibling;
//     if(prev.value<10){
//         prev.value++;
//     }
// }

btns.forEach(function(btn,i){
    btn.addEventListener('click',function(e){
        // console.log(e.target)
        let t=e.target;
        // let f=btn.firstElementChild;  if(t==f) 
        // let l=btn.lastElementChild ; else if(t==l)
        if(t==minusBtns[i]){ //btn의 자식이 minusBtn이니??
            minusFunc(t)
        }else if(t==plusBtns[i]){  
            plusFunc(t)
        }
    })
})
function minusFunc(t){
    // console.log(e.currentTarget.nextElementSibling.value); 
    const next= t.nextElementSibling;
    if(next.value>0){
        next.value--;
    }
}
function plusFunc(t){
    // console.log(e.currentTarget.nextElementSibling.value); 
    const prev= t.previousElementSibling;
    if(prev.value<10){
        prev.value++;
    }
}

// **************수량 선택**********
const minusBtn1=document.querySelector('.minus_btn1');
const plusBtn1=document.querySelector('.plus_btn1');
minusBtn1.addEventListener('click',function(){
    const cnt=minusBtn1.nextElementSibling;
    if(cnt.value>1){
        cnt.value--;
    }
    // minusBtn1.nextElementSibling.value--;
})
plusBtn1.addEventListener('click',function(){
    const prev1=plusBtn1.previousElementSibling;
    prev1.value++;
})


const toppings=document.querySelectorAll('.topping');
const toppingTypes=document.querySelectorAll('.topping_type');
// toppingTypes.forEach(function(toppingType,i){
//     // console.log(toppingType)
//     // console.log(i);
//     toppingType.addEventListener('click',function(){
//         // console.log(toppingType)
//         toppings.forEach(function(topping,j){
//             // topping[i].style.display='block';
//             console.log(topping[j]);
//         })
//     })
// })

toppingTypes.forEach(function(toppingType,j){
    toppingType.addEventListener('click',function(e){
        // e.currentTarget.classList.add('chbg2');
        toppings.forEach(function(topping,i){
            topping.style.display='none';
            if(i==j){
                topping.style.display='block';
            }
        })
    })
})
document.getElementById('def1').click();


// function changeBg(){
    
// }
// for(var i=0;i<toppingTypes.length;i++){
//     toppingTypes[i].addEventListener('click',changeBg)
// }


const dropbtn=document.querySelector('.dropbtn');
const toppingCh=document.querySelector('.topping_ch');

dropbtn.addEventListener('click',function(){
    document.getElementById('def').click();
    toppingCh.classList.toggle('displayB');
    dropbtn.classList.toggle('rotate');
})

const doughs=document.querySelectorAll('.dough');
const radios=document.querySelectorAll('.radio');

function clickMenu(){
    var active=document.querySelector('.checked');
    if(active){
        active.classList.remove('checked');
    }
    this.classList.add('checked');
}
for(var i=0;i<radios.length;i++){
    radios[i].addEventListener('click',clickMenu);
}