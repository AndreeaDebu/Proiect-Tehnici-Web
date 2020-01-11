var regx_chr = /^([a-zA-Z0-9_ -]+)$/;
var regx_mail = /^(([^\<\>\(\)\[\]\.,;:s@"]+(.[^\<\>\(\)\[\]\.,;:s@"]+)*)|(.+?))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

var regx_phon = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

var isPhoneValid = false;
//functie care verifica telefonul daca este corect scris 
function checkFormanewslett(newsletter) {
    if (!isPhoneValid) {
        e.preventDefault();//daca nu este scris corect nu ma lasa sa salvez rezervarea 
        e.stopPropagation();
    }
  var fre = false;
  if(newsletter.value.length<9 || newsletter.value.length>50 || newsletter.value.match(regx_mail) == null) {
      swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Warning!What you enter there is not a email adress !',
          footer: '<a href>Why do I have this issue?</a>'   
      })           
    newsletter.select();
  }
  else {
    fre = true;
    swal(
    'Good job!',
    'You clicked the button!',
    'success'
)
  }

  return fre;
}

document.getElementById('clickqwer').addEventListener('click',function(e){ checkFormanewslett(document.getElementById('text_email'), e);});

//functie care afiseaza o alerta daca am introdus in casuta pinul 
var input = document.getElementById("cod_pin");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   alert('Save pin!');
  }
});

function telefonValid() {
    var val = document.getElementById('telefon').value;
    if (val.match(regx_phon)!=null) {
        isPhoneValid = true;
    } else {
        isPhoneValid = false;
    }
    
}

function Captcha(){
     var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9');
     var i;
     for (i=0;i<3;i++){
         var a = alpha[Math.floor(Math.random() * alpha.length)];
         var b = alpha[Math.floor(Math.random() * alpha.length)];
         var c = alpha[Math.floor(Math.random() * alpha.length)];
     }
         var code = a + ' ' + b + ' ' + ' ' + c;
         document.getElementById("mainCaptcha").innerHTML = code
		 document.getElementById("mainCaptcha").value = code
       }
function ValidCaptcha(){
     var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
     var string2 =         removeSpaces(document.getElementById('txtInput').value);
     if (string1 == string2){
            return "Corect cod Captcha!";
     }else{        
          return "Incorect cod Captcha!";
          }
}
function removeSpaces(string){
     return string.split(' ').join('');
}