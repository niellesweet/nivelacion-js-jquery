$(document).ready( function(){
	$('.js-back').hide(0);
	$('.js-menu').show(0);

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);


});

$(function(printNews){
	$('#etapa-2').append('NUEVAS RECETAS');
});

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	var arreglo = recipesArray.filter(function(elementos){
		return elementos.highlighted;

	})
		console.log('Recipes: ', recipesArray);

	arreglo.forEach(function(recipes){
		renderRecipe(recipes);
	});

}
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

function renderRecipe(recipes) {
	console.log('Voy a pintar la receta: ', recipes);
	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+ 
									recipes.title + '</span><span class="metadata-recipe"><span class="author-recipe">'+ 
									recipes.source.name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/'+ 
									recipes.name + '.jpg"></a>');
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	if (activitiesArray.length > 0){
		activitiesArray.forEach(function(meow){
			renderActivity(meow);
		$('.wrapper-message').remove();
		});
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}
