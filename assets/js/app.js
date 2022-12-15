const cl = console.log;

const imgUrl = `https://image.tmdb.org/t/p/w1280`;

let movieSection = document.getElementById("movieSection");

let result = ``;
movieArr.forEach(function(movie){
	result += `
		<div class="col-md-3">
			<div class="card mb-4">
				<figure class="posterImg">
					<img src="${imgUrl}${movie.backdrop_path}" alt="${movie.title} Image" title="${movie.title}">
					<figcaption class="posterInfo p-3 bg-dark">
						<div class="row">
							<div class="col-md-10">
								<h4>${movie.title}</h4>
							</div>
							<div class="col-md-2 py-2">
									${movie.vote_average}	
							</div>
						</div>
					</figcaption>
					<div class="overview bg-white p-4">
						<h4 class="text-capitalize">overview:</h4>
						<p class="text-justify">${movie.overview}</p>
					</div>
				</figure>
			</div>
		</div>
	`;
});

movieSection.innerHTML = result;