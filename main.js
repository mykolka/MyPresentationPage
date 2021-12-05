
const portfolioElements = {
	koalaTasc: {
		titlePhoto: "images/koala.jpeg",
		description: "Верстка/scss та компіляцією на koala / без адаптиву.",
		link: "https://mykolka.github.io/koala/#list"
	},
	autoScool: {
		titlePhoto: "./images/autoscool.jpeg",
		description: "Презентаційна сторінка зі слайдером та картами.",
		link: "https://mykolka.github.io/autoScool/"
	},
	porsche: {
		titlePhoto: "./images/porsche.jpeg",
		description: "Адаптивна верстка з поп-апами та слайдером.",
		link: "https://mykolka.github.io/tasc_Front_End/"
	},
	layout: {
		titlePhoto: "./images/layout.jpeg",
		description: "Верстка макету з scss / без адаптиву.",
		link: "https://mykolka.github.io/landingPage/"
	},	
	table: {
		titlePhoto: "./images/table.jpeg",
		description: "Таблиця з частковим функціоналом на React.js / без адаптиву.",
		link: "https://mykolka.github.io/DZ/"
	},
	landing: {
		titlePhoto: "./images/landing.jpeg",
		description: "Верстка макету. Адаптив / scss / js",
		link: "https://mykolka.github.io/tascAdaptiveLanding/"
	}
}


const box = document.querySelector(".portfolioBox");

let createPortfolioList = function() {	
	const portfolioElementsName = [
		'landing','koalaTasc','autoScool', 'porsche', 'layout', 'table', 
	];


	portfolioElementsName.forEach(item => {
		const card = document.createElement('cards');
		card.innerHTML = `

		<style>
		
		</style>

			<div class="portfolioItem">
				<div class="scrinItem">
					<img src=${portfolioElements[item].titlePhoto} alt="">
				</div>			
					<p>${portfolioElements[item].description}</p>						
					<a target="blank" href=${portfolioElements[item].link}>перейти на сторінку</a>	
							
			</div>
		`	
		box.appendChild(card);
	})
}



let closeContacts = document.getElementById("closeContacts"),
	closeEducation = document.getElementById("closeEducation"),
	closeAbout = document.getElementById("closeAbout"),
	closeSkills = document.getElementById("closeSkills"),
	closePortfolio = document.getElementById("closePortfolio"),

	portfolioBlock = document.querySelector(".portfolioPage"),
	skillsBlock = document.querySelector(".technicalSkillsPage"),
	aboutMyBlock = document.querySelector(".aboutMyPage"),
	contactsBlock = document.querySelector(".contactsPage"),	
	educationBlock = document.querySelector(".educationPage");



let contactsShow = function() {
	 contactsBlock.style.display = "block";
}
let educationShow = function() {
	educationBlock.style.display = "block";	
}
let AboutMyShow = function() {
	aboutMyBlock.style.display = "block";	
}
let skillsShow = function() {
	skillsBlock.style.display = "block";	
}
let portfolioShow = function() {
	portfolioBlock.style.display = "block";	
}



closeContacts.onclick = function(e) {	
	contactsBlock.style.display = "none";
}

closeEducation.onclick = function(e) {	
	educationBlock.style.display = "none";
}
closeAbout.onclick = function(e) {	
	aboutMyBlock.style.display = "none";
}
closeSkills.onclick = function(e) {	
	skillsBlock.style.display = "none";
}
closePortfolio.onclick = function(e) {	
	portfolioBlock.style.display = "none";
	box.innerHTML="";
}



const screenWidth = window.screen.width;
if(screenWidth <= 425) {
	const mobiBtn = document.querySelector(".mobileMenu");
	const header = document.getElementById("header");
	
	mobiBtn.style.display = "block";
	mobiBtn.addEventListener('click', () => {
		const mobileMenuList = document.createElement("div");
		mobileMenuList.innerHTML = `

	<style>
		ul{
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			background-color: rgb(72, 86, 116);
			padding-top: 10px;

		}
		li{
			text-align: center;
			font-weight: bolder;
			color: white;
			text-transform: uppercase;
			padding: 5px 0;
			border-bottom: 1px solid grey;
			list-style: none;

		}
		li>a{
			color: white;
		}
	</style>

	<ul>
		<li onclick="portfolioShow(), createPortfolioList()">portfolio</li>
		<li><a target="blank" href="https://github.com/mykolka">github</a></li>
		<li onclick="skillsShow()">technical skills</li>
		<li onclick="contactsShow()">contacts</li>
		<li onclick="educationShow()">education</li>
		<li onclick="AboutMyShow()">about my</li>
	</ul>

		`
		header.appendChild(mobileMenuList);


	window.onclick = function(e) {
		let target = e.target;
			
			if(target !== mobiBtn) {
				mobileMenuList.style.display = 'none';
			}

	}
	})	
}







