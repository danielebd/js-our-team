'use strict';

const team = [

    {
        name: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Carrol',
        ruolo: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        ruolo: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        ruolo: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    },

]

function mylog (position){
    const object = [team[position].name, team[position].ruolo, team[position].img];
    return object;
}
const nodelist = document.querySelectorAll('div.member');
for(let i = 0; i < team.length; i++){
    //nodelist[i].innerHTML = mylog(i);
}










//let member = [];
////console.log(team)
////console.log(team[1])
//for (let i = 0; i < team.length; i++){
//    const object = team[i]
//    //console.log('ciao');
//    const details = [];
//    for(let key in object){
//        //console.log(object[key]);
//        details.push(object[key])
//    }
//    member.push(details)
//}
//console.log(member);