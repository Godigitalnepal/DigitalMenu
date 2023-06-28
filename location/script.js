// const form = document.querySelector("form");
// eField = form.querySelector(".email"),
// eInput = eField.querySelector("input"),
// pField = form.querySelector(".password"),
// pInput = pField.querySelector("input");





 const date = new Date();
 setInterval(function(){
   document.getElementById("time").innerHTML=  Date();
// //   //do something else
 }, 1000)


 var getLocation =document.getElementById("location");
 
function getnavigation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,onError);
  } else { 
  getLocation.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // x2.innerHTML = "Latitude: " + position.coords.latitude + 
  // "<br>Longitude: " + position.coords.longitude;
  // console.log(x2);
  let {latitude, longitude} = position.coords;
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=67f6dad0bbda4bd7b69b4925042f48e5`)
  .then(response => response.json()).then(response =>{
      let allDetails = response.results[0].components;
      console.table(allDetails);
      let {municipality, city_district, postcode, country} = allDetails;
            document.getElementById("location").value = `${municipality} ${city_district} ${postcode}, ${country} `;
            document.getElementById("geolocationgps").value= ` https://maps.google.com/?q= ${latitude} , ${longitude}`;
          }).catch(()=>{
     console.log("error");
  });
  // document.getElementById("location").value=   "Latitude: " + position.coords.latitude + 
  // " | Longitude: " + position.coords.longitude;;
 
}
function onError(error){
  if(error.code == 1){
      document.getElementById("location").value = "You denied the request";
      showPosition();
    }else if(error.code == 2){
    document.getElementById("location").value = "Location is unavailable";
  }else{
    document.getElementById("location").value = "Something went wrong";
  }
  getLocation.setAttribute("disabled", "true");
}


//  form.onsubmit = (e)=>{
//    e.preventDefault(); //preventing from form submitting
// //   //if email and password is blank then add shake class in it else call specified function
//   (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
//   (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

//   setTimeout(()=>{ //remove shake class after 500ms
//      eField.classList.remove("shake");
//      pField.classList.remove("shake");
//    }, 500);

//   eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
//   pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

//   function checkEmail(){ //checkEmail function
//     let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
//     if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
//       eField.classList.add("error");
//       eField.classList.remove("valid");
//       let errorTxt = eField.querySelector(".error-txt");
//       //if email value is not empty then show please enter valid email else show Email can't be blank
//       (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
//     }else{ //if pattern matched then remove error and add valid class
//       eField.classList.remove("error");
//       eField.classList.add("valid");
//     }
//   }

//   function checkPass(){ //checkPass function
//     if(pInput.value == ""){ //if pass is empty then add error and remove valid class
//       pField.classList.add("error");
//       pField.classList.remove("valid");
//     }else{ //if pass is empty then remove error and add valid class
//       pField.classList.remove("error");
//       pField.classList.add("valid");
//     }
//   }

//   //if eField and pField doesn't contains error class that mean user filled details properly
//   if(!eField.classList.contains("error") && !pField.classList.contains("error")){
//     window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
//   }
// }
