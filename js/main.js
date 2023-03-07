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

function name (position){
    const object = [team[position].name,];
    return object;
}
function role (position){
    const object = [team[position].ruolo,];
    return object;
}
function img (position){
    const object = [team[position].img,];
    return object;
}


const nodelistName = document.querySelectorAll('div.name');
for(let i = 0; i < team.length; i++){
    nodelistName[i].innerHTML = name(i);
}
const nodelistRole = document.querySelectorAll('div.role');
for(let i = 0; i < team.length; i++){
    nodelistRole[i].innerHTML = role(i);
}
const nodelistImg = document.querySelectorAll('.img-container');
for(let i = 0; i < team.length; i++){
    nodelistImg[i].innerHTML = `<img src="img/${img(i)}" class="card-img-top">`;
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