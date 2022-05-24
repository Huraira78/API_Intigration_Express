const head=[
    {
    title:'Contact:',
    phone:'0321-XXXXXXX',
    imageUrl:'./logo.png',
    logo:'LOGO',
    detail:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, nemo!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, nemo!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, nemo!'
}]
function logo(data)
{
    const logop1=document.querySelector('#p1')
    const logop2=document.querySelector('#p2')
    const logoimg=document.querySelector('#limg')
    const logod=document.querySelector('#p3')
    const bodydetail=document.querySelector('#detailpara')
    for (let i = 0; i < data.length; i++) {
        let logo=`<p>${data[i].title}</p>`
        let logo1=`<p>${data[i].phone}</p>`
        let logo2=`<img src='${data[i].imageUrl}'></img>`
        let logo3=`<h2>${data[i].logo}</h2>`
        let bodyd=`<p>${data[i].detail}</p>`

        logop1.innerHTML =logo
        logop2.innerHTML =logo1
        logoimg.innerHTML=logo2
        logod.innerHTML=logo3
        bodydetail.innerHTML=bodyd
    }
}
logo(head)
const cards=
[
    {
        name:'Builder:1',
        imageUrl:'./builder1.jpg',
        name1:'Builder:2',
        imageUrl1:'./builder2.png',
        name2:'Builder:3',
        imageUrl2:'./builder3.png'
    }
]
function card(data) 
{
 const cd1=document.querySelector('#p5')   
 const cd1img1=document.querySelector('#img1')
 const cd2=document.querySelector('#p6')   
 const cd2img1=document.querySelector('#img2')
 const cd3=document.querySelector('#p7')   
 const cd3img1=document.querySelector('#img3')
 for (let i = 0; i < data.length; i++) 
 {
    let card1=`<p>${data[i].name}</p>`
    let cdimg=`<img src='${data[i].imageUrl}'></img>`
    let card2=`<p>${data[i].name1}</p>`
    let cd2img=`<img src='${data[i].imageUrl1}'></img>`
    let card3=`<p>${data[i].name2}</p>`
    let cd3img=`<img src='${data[i].imageUrl2}'></img>`

    cd1.innerHTML=card1
    cd1img1.innerHTML=cdimg
    cd2.innerHTML=card2
    cd2img1.innerHTML=cd2img
    cd3.innerHTML=card3
    cd3img1.innerHTML=cd3img
     
 }
}
card(cards)
 const table=[
     {
         day:'Week Days',
         open:'From 9 AM',
         close:'To 12 PM'
     },
     {
        day:'Saturday',
        open:'From 10 AM',
        close:'To 10 PM'
    },
    // {
    //     day1:'Sunday',
    //     status:'OFF'
    // },
    // {
    //     day1:'Eid Days',
    //     status:'OFF'
    // }
 ]
 function tab(data) {
     const tab1=document.querySelector('#tabbody')
     for (let i = 0; i < data.length; i++) 
     {
        let body=`
        <tr>
        <td>${data[i].day}</td>
        <td>${data[i].open}</td>
        <td>${data[i].close}</td>
        </tr>
        `
         tab1.innerHTML+=body
     }

    //  const tab2=document.querySelector('#tabbody')
    //  for (let i = 0; i < data.length; i++) {
    //     let body=`
    //     <tr>
    //     <td>${data[i].day1}</td>
    //     <td colspan="2">${data[i].status}</td>
    //     </tr>
    //     `
    //      tab2.innerHTML+=body
    //  }
 }
 tab(table)
 const table1=[
   {
       day1:'Sunday',
       status:'OFF'
   },
   {
       day1:'Eid Days',
       status:'OFF'
   }
]
function tabl(data) {
    const tab2=document.querySelector('#tabbody')
    for (let i = 0; i < data.length; i++) {
       let body=`
       <tr>
       <td>${data[i].day1}</td>
       <td colspan="2">${data[i].status}</td>
       </tr>
       `
        tab2.innerHTML+=body
    }
}
tabl(table1)