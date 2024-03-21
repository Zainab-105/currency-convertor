let dropdowns=document.querySelectorAll('select');

for(let select of dropdowns){
for(currCode in countryList){
    let newOption=document.createElement('option');
    console.log(currCode);
    newOption.innerText=currCode;
    newOption.value=currCode;
    if( select.name=='from' && currCode=='USD' ){
newOption.selected='selected';
    }else if(select.name=='to' && currCode=='PKR'){
        newOption.selected='selected';
    }
    select.append(newOption); 
}
}
select.addEventListner('change',(evt)=>{
updateFlag(evt.target);
})
const updateFlag=(element)=>{
currCode=element.value;
let countryCode=countryList[currCode];
newSrc=`https://flagsapi.com/PK/${countryCode}/64.png`;
let img=element.parentElement.querySelectorAll('img');
img.src=newSrc;

}