console.log("Benvenuto");

const images = [
    {
        image: 'img/1.jpeg',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/2.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/3.jpeg',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/4.jpg',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }
];

const indiceUltimaSlide = images.length - 1;

// Costruiamo noi delle slide da aggiungere in pagina tramite un ciclo sul nostro array.

// Con un ciclo creo le slide e le inietto in pagina (tutte visibili)
const slideContainer = document.getElementById("slideContainer");
const thumbnailsContainer = document.getElementById("thumbnailsContainer");

for (let i = 0; i < images.length; i++) {
	const slide = images[i];

	let imagePosition = "";
	if(i==2 || i==3) {
		imagePosition = `object-position: bottom;`;
	}

	let slideHtml = `
	<div class="slide">
		<img src="${slide.image}" style="${imagePosition}" />
		<div class="caption">
			<h2>${slide.title}</h2>
			<p>${slide.text}</p>
		</div>
	</div>`;
	
	slideContainer.innerHTML += slideHtml;
	
	let thumbnail = document.createElement("img");
	thumbnail.src = slide.image;
	thumbnailsContainer.append(thumbnail);

	thumbnail.addEventListener("click", function() {
		console.log("Hai cliccato sulla thumbnail", i);
		showSlide(i);
	});
	
}

// Rendo visibile la prima slide
let slideSelected = 0;
document.querySelectorAll(".slide")[slideSelected].classList.add("active");
document.querySelectorAll("#thumbnailsContainer > img")[slideSelected].classList.add("active"); 

// Al click sulle frecce cambiamo slide (previous)
document.getElementById("btnPrev").addEventListener("click", function() {
	console.log("Hai cliccato su #btnPrev");

	if( slideSelected <= 0 ){
		showSlide(indiceUltimaSlide);
	} else {
		showSlide( slideSelected-1 );
	}

});

// Al click sulle frecce cambiamo slide (next)
document.getElementById("btnNext").addEventListener("click", function() {
	console.log("Hai cliccato su #btnNext");
	
	if( slideSelected >= indiceUltimaSlide ){
		showSlide( 0 );
	} else {
		showSlide( slideSelected+1 );
	}

});

function showSlide(quale) {
	document.querySelectorAll(".slide")[slideSelected].classList.remove("active");
	document.querySelectorAll("#thumbnailsContainer > img")[slideSelected].classList.remove("active");

	slideSelected = quale;

	document.querySelectorAll(".slide")[slideSelected].classList.add("active");
	document.querySelectorAll("#thumbnailsContainer > img")[slideSelected].classList.add("active");
}