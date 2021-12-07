const sub = document.getElementById('sub');
const dataErr= document.getElementById('err');
const search = document.getElementById('search');
const city = document.getElementById('city_name');
const country =document.getElementById('country_name');
const temp =document.getElementById('temp');
const zero =document.getElementById('zero');
const cell =document.getElementById('cel');
const weath =document.getElementById('weather');


const info= async (event)=>{
 event.preventDefault();
 let search1=search.value;
 if(search1===""){
  dataErr.innerText="plz enter city name";
 }
 else{
   
     try{
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${search1}&appid=d42693ff25d402c4eb4446c17ed22781`;
        const response =await fetch(url);
         const dataResponse=  await response.json();
         const arrData =[dataResponse]; 
         console.log(arrData);
         //const name = arrData[0].name;
         city.innerHTML=arrData[0].name;
        // console.log(name);
        // const temp = arrData[0].main.temp; 
        temp.innerText=arrData[0].main.temp; 
        zero.innerText="0";
        cell.innerText="c";
        // console.log(temp);
         //const country= arrData[0].sys.country;
         country.innerText=arrData[0].sys.country;
        // console.log(country);
        weath.innerText=arrData[0].weather[0].description;

     }
     catch{
        dataErr.innerText="plz enter city name properly";
     }
     
 }
 

 
}
sub.addEventListener('click',info);