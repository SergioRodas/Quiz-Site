var ul=document.querySelector(".thumb"),titlequiz=document.querySelector(".tittle-quiz"),container=document.querySelector("#container");function imgSlider(e){document.querySelector(".los-simpson").src=e}function changeBgColor(e){document.querySelector(".bg").style.background=e}function changeText(e){const a=document.querySelector(".content-title"),n=document.querySelector(".content-description");switch(e){case"dbz":a.innerHTML="Dragon Ball Z",n.innerHTML="Dragon Ball Z se centra en la vida adulta de Son Goku, quien tendrá que defender la tierra de los numerosos villanos que amenazan con destruirla. Además, la serie trama de forma paralela la madurez de su hijo Gohan. Millones de personas en todo el mundo se han autoproclamado Super Saiyans, ¿Tú eres uno?",titlequiz.innerHTML="Dragon Ball Z";break;case"marvel":a.innerHTML="Marvel",n.innerHTML='Editorial conocida popularmente como "La casa de las ideas". Preguntas sobre superhéroes y villanos, si eres un fan de los comics y películas podrás responderlas, evalúa cuánto sabes.',titlequiz.innerHTML="Marvel";break;case"animales":a.innerHTML="Animales",n.innerHTML="Preguntas acerca de los seres vivos que integran el reino animal. Si eres un amante de los animales y sabes mucho sobre ellos, de seguro te irá bien... Descubre animalia!",titlequiz.innerHTML="Animales";break;case"futbol":a.innerHTML="Fútbol",n.innerHTML="El fútbol (2.900 millones de personas) es el deporte más popular y seguido del mundo. ¿Eres fanático? ¿Cuánto sabes realmente de su historia?.",titlequiz.innerHTML="Fútbol";break;default:a.innerHTML="Los Simpson",n.innerHTML="Los Simpson son una familia políticamente incorrecta, de clase media, que habita en la ficticia localidad estadounidense de Springfield. Pon a prueba tu fanatismo por la familia más amarilla de la televisión.",titlequiz.innerHTML="Los Simpson"}}ul.addEventListener("click",function(e){for(var a=e.target;a&&a.parentNode!==ul;)if(!(a=a.parentNode))return;switch(a.id){case"dbz":imgSlider("/Images/dbz-2.png"),changeBgColor("#ff6600"),changeText("dbz"),container.className="dbz";break;case"marvel":imgSlider("/Images/marvel.png"),changeBgColor("#d81d23"),changeText("marvel"),container.className="marvel";break;case"animales":imgSlider("/Images/animales.png"),changeBgColor("#92ba3c"),changeText("animales"),container.className="animales";break;case"futbol":imgSlider("/Images/futbol.png"),changeBgColor("#4a91fc"),changeText("futbol"),container.className="futbol";break;default:imgSlider("/Images/los-simpson.png"),changeBgColor("#ffcc02"),changeText("simpsons"),container.className="simpsons"}});let el=document.querySelectorAll(".thumb li");for(let e=0;e<el.length;e++)el[e].onclick=function(){for(var a=0;a<el.length;)el[a++].className="check";el[e].className="check active"};