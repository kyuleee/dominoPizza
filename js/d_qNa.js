const tabname1=document.querySelector('#tab_name1');
const tabmenus1=document.querySelectorAll('.menuTab1');
// const contents=document.querySelectorAll('.menu_section');
tabmenus1.forEach(function(tabMenu1){
    // document.getElementById('question').classList.add('active');
    tabMenu1.addEventListener('click',function(){
        tabname1.innerHTML=tabMenu1.dataset.text;
        tabname1.style.color='#111';
        contents.forEach(function(content){
        content.classList.remove('active');
    })
        console.log(tabMenu1.dataset.id);
        let id=tabMenu1.dataset.id;
        if(id){
            document.getElementById(id).classList.add('active');
        }
    })
})


// *****************Arcodion*************
// const qNabox=document.querySelectorAll('.qNabox>a');
// const answerBox
// var acc = document.querySelectorAll(".question");

// var acc = document.getElementsByClassName("question");
// var i;
// let asws=document.querySelectorAll('.answer');
// let acts=document.querySelectorAll('.question.active');
// console.log(acc);

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     // this.classList.toggle("active");
   
//     var panel = this.nextElementSibling;
//     // var panels=acc[i].nextElementSibling; // class가 answer인 애를 잡는 방법
//     console.log(panel)
    
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     //   panel.classList.remove('')

//     } else {
//         for(asw of asws){
//             asw.style.maxHeight=null;
//             // panel.classList.remove('')
//         }
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     //   panel.classList.add('')
//     } 
//   });
// }

// for (i = 0; i < acc.length; i++) {

//   acc[i].addEventListener("click", function() {
//     var panel = this.nextElementSibling;
//     console.log(panel)
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//         let acts=document.querySelectorAll('.question.active');
//         for(act of acts){
//             act.classList.remove('active');
//             var panels=act.nextElementSibling;
//             panels.style.maxHeight=null;
//         }
//         this.classList.add("active");
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }


let accs=document.querySelectorAll('.question');
let appPanels=document.querySelectorAll('.answer');
accs.forEach(function(acc){
    acc.addEventListener('click',function(){
        var panel=this.nextElementSibling;
        let accsAc=document.querySelector('.question.active');
        for(appPanel of appPanels){
            if(appPanel.style.maxHeight){
                appPanel.style.maxHeight=null;
                accsAc.classList.remove('active');
            }
        };
        if(this==accsAc){
            this.classList.remove('active');
            // panel.classList.remove('act');

            panel.style.maxHeight=null;
            
        }else if(this==acc){
            this.classList.add('active');
            // panel.classList.add('act');
            panel.style.maxHeight=panel.scrollHeight + 'px';
        }
    })
})


















// let acc = document.querySelectorAll(".ser_qus");
// let asws = document.querySelectorAll('.ser_asw');

// acc.forEach(function(accs) {
//   accs.addEventListener('click', function() {
//     var panel = this.nextElementSibling;

//     this.classList.toggle("active");
    
//     if (this.classList.contains("active")) {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } else {
//       panel.style.maxHeight = null;
//     }

//     acc.forEach(function(otheraccs) {
//       if (otheraccs !== accs) {
//         otheraccs.classList.remove("active");
//         otheraccs.nextElementSibling.style.maxHeight = null;
//       }
//     });
//   });
// });
