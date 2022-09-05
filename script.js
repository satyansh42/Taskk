const data = [
    {item:'2019'},
    {item:'2020'},
    {item:'2021'},
    {item:'2022'},
]

document.getElementById('Private').onclick = function PrivateClick() {
    document.getElementById('Private_radio').checked = true
    document.getElementById('Commertial_radio').checked = false
    scrollNext();
    progress();
}
document.getElementById('Commertial').onclick = function CommertialClick() {
    document.getElementById('Commertial_radio').checked = true
    document.getElementById('Private_radio').checked = false
    scrollNext();
    progress();
}

document.getElementById('Paper').onclick = function PaperClick() {
    document.getElementById('Paper_radio').checked = true
    document.getElementById('Smart_radio').checked = false
    scrollNext();
    progress();
}
document.getElementById('Smart').onclick = function SmartClick() {
    document.getElementById('Smart_radio').checked = true
    document.getElementById('Paper_radio').checked = false
    scrollNext();
    progress();
}

// function validateForm(){
let nameee = document.forms["form1"]["name"];
let nameBool;
let place = document.forms["form2"]["place"];
let placeBool = false;
let years = document.forms["form2"]["years"];
let yearsBool = false;
let years2 = document.forms["form2"]["years2"];
let years2Bool = false;
const NatureOfDl = () => {
    if(document.getElementById('Private_radio').checked || document.getElementById('Commertial_radio').checked){
        return true;
    }
    else{
        return false;
    }
};
let TypeOfDl = () => {
    if(document.getElementById('Paper_radio').checked || document.getElementById('Smart_radio').checked){
        return true;
    }
    else{
        return false;
    }
};

nameee.onchange = function validName(){
    if (nameee.value == "") {
        nameBool = false;
    }
    else{
        nameBool = true;
        scrollNext();
        progress();
    }
}
place.onchange = function validName(){
    if (place.value == "") {
        placeBool = false;
    }
    else{
        placeBool = true;
        scrollNext();
        progress();
    }
}
years.onchange = function validName(){
    if (years.value == "") {
        yearsBool = false;
    }
    else{
        yearsBool = true;
        scrollNext();
        progress();
    }
}

function scrollNext(){
    if(nameBool && NatureOfDl() && TypeOfDl()){
        let scrollcont = document.getElementById('form_container');
        scrollcont.scrollLeft = scrollcont.scrollWidth
        console.log('scrolled');
    }
}


let ddd = false;
document.getElementById('select_s').onclick = function dd(){
        ddd = !ddd;
        function dddd(){
            if (ddd===true){
                return 'flex'
            }
            else{
                return 'none'
            }
        }
        document.getElementById('select_options').style.display = dddd();
        document.getElementById('form_container').scrollTop = document.getElementById('form_container').scrollHeight;
        hello();
}
let selectedBool = false;
function jjj(index){
    console.log(data[index].item)
    document.getElementById('selected').innerHTML = data[index].item;
    ddd=false;
    selectedBool = true;
    console.log(selectedBool)
    document.getElementById('select_options').style.display = 'none';
    progress();
}

const mmm = document.getElementById("select_options");
function hello(){
    const li = data.map((item,index)=>{
        return `
        <li value=${item.item} onclick="jjj(${index})" id="options">${item.item}</li>
        `
    }).join('')
    console.log(li)
    document.getElementById('select_options').innerHTML = li;
}

function progress(){
    let x = 0;
    if(NatureOfDl()){
        x = x+1;
    }
    if(nameBool){
        x = x+1;
    }
    if(TypeOfDl()){
        x = x+1;
    }
    if(placeBool){
        x = x+1;
    }
    if(yearsBool){
        x = x+1;
    }
    if(selectedBool){
        x = x+1;
    }
    document.getElementById('progress_bar').style.width = `${x/6*100}%`
}
document.getElementById('button_cont').onclick = function(){
    let scrollcont = document.getElementById('form_container');
    scrollcont.scrollLeft = 0;
}
