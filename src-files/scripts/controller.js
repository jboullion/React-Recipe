
class AddModal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			instructions: '',
			ingredients: '',
			errors: {
				name: '',
				description: '',
				instructions: '',
				ingredients: ''
			}
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//Set this components state based on the name of the input
	handleInputChange(event) {
		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	}

	//Validation and submission to parent for state change
	handleSubmit(event) {
		const errors = this.state.errors;
		let hasErrors = false;

		if(! this.state.name){
			errors.name = 'has-error';
			hasErrors = true;
		}else{
			errors.name = '';
		}

		if(! this.state.description){
			errors.description = 'has-error';
			hasErrors = true;
		}else{
			errors.description = '';
		}

		if(! this.state.instructions){
			errors.instructions = 'has-error';
			hasErrors = true;
		}else{
			errors.instructions = '';
		}

		if(! this.state.ingredients){
			errors.ingredients = 'has-error';
			hasErrors = true;
		}else{
			errors.ingredients = '';
		}

		if(hasErrors === false){
			//Success!
			this.props.onClick(this.state);
		}else{
			//Error!
			this.setState({
				errors: errors
			});
		}

	}

	render() {
		return (
			<div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="addModalLabel">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="addModalLabel">Add Recipe</h4>
						</div>
						<div className="modal-body">
							<table className="table">
								<tbody>
									<tr>
										<th>Name</th>
										<td className={this.state.errors.name}><input type="text" className="form-control" id="add-name"
										name="name"
										value={this.state.name}
										onChange={this.handleInputChange} /></td>
									</tr>
									<tr>
										<th>Description</th>
										<td className={this.state.errors.description}><input type="text" className="form-control" id="add-description"
										name="description"
										value={this.state.description}
										onChange={this.handleInputChange} /></td>
									</tr>
									<tr>
										<th>Instructions</th>
										<td className={this.state.errors.instructions}><textarea className="form-control" style={{resize: "none"}} id="add-instructions" rows="5"
										name="instructions"
										value={this.state.instructions}
										onChange={this.handleInputChange} /></td>
									</tr>
									<tr>
										<th>Ingredients</th>
										<td className={this.state.errors.ingredients}><textarea className="form-control" style={{resize: "none"}} id="add-ingredients" rows="5"
										name="ingredients"
										value={this.state.ingredients}
										onChange={this.handleInputChange} /></td>
									</tr>
								</tbody>
							</table>

						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary" id="add-save" onClick={() => this.handleSubmit(this.state)}>Save</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class EditModal extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
		 <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="addModalLabel">Edit Recipe</h4>
						</div>
						<div className="modal-body">
							<table className="table">
								<tbody>
									<tr>
										<th>Name</th>
										<td><input type="text" className="form-control" id="edit-name"/></td>
									</tr>
									<tr>
										<th>Description</th>
										<td><input type="text" className="form-control" id="edit-description"/></td>
									</tr>
									<tr>
										<th>Instructions</th>
										<td><textarea className="form-control" style={{resize: "none"}} id="edit-instructions" rows="5"></textarea></td>
									</tr>
									<tr>
										<th>Ingredients</th>
										<td><textarea className="form-control" style={{resize: "none"}} id="edit-ingredients" rows="5"></textarea></td>
									</tr>
								</tbody>
							</table>

						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary" id="edit-save" data-edit="" onClick={() => this.props.onClick(props.recipe)}>Save</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class DeleteModal extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="addModalLabel">Delete Recipe</h4>
						</div>
						<div className="modal-body">
							<h3>Are you sure you want to delete "Recipe Name"?</h3>

						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">CANCEL</button>
							<button type="button" className="btn btn-danger" id="delete" data-delete="" onClick={() => this.props.onClick(props.recipe)}>DELETE</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


function Ingredient(props) {
	var ingredientList = [];
	for (var i=0; i < props.recipe.ingredients.length; i++) {
	    ingredientList.push(<li key={props.index+''+i}>{props.recipe.ingredients[i]}</li>);
	}

	return <table className="table table-striped">
			<tbody>
				<tr role="button" className={'recipe-'+props.recipe.id}>
					<td className="index" data-toggle="collapse" href={'#recipe-'+props.recipe.id} aria-expanded="false">{props.index}</td>
					<td className="name" data-toggle="collapse" href={'#recipe-'+props.recipe.id} aria-expanded="false">{props.recipe.name}</td>
					<td className="description" data-toggle="collapse" href={'#recipe-'+props.recipe.id} aria-expanded="false">{props.recipe.description}</td>
					<td className="date" data-toggle="collapse" href={'#recipe-'+props.recipe.id} aria-expanded="false">{props.recipe.date}</td>
					<td className="edit"><button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editModal" data-recipe={props.recipe.id}>Edit</button></td>
					<td className="delete"><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#deleteModal" data-recipe={props.recipe.id}>Delete</button></td>
				</tr>
				<tr className={'recipe-'+props.recipe.id}>
					<td colSpan="6">
						<div className="collapse recipe" id={'recipe-'+props.recipe.id}>
							<div className="col-50">
								<div className="instructions">
									<h3>Instructions</h3>
									{props.recipe.instructions}
								</div>
							</div>
							<div className="col-50">
								<div className="ingredients">
									<h3>Ingredients</h3>
									<ul>
										{ingredientList}
									</ul>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>;
}

function Ingredients(props) {
	const recipes = props.recipes;

	return <div>
			{recipes.map((recipe, index) =>
				<Ingredient key={'ingredient'+recipe.id}
					recipe={recipe}
					index={index+1} />
				)}
			</div>;
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			recipes: [
				{
					id: 1,
					name: 'Recipe 1',
					date: '01/10/2017',
					description: 'This is a description',
					instructions: 'These are the instructions',
					ingredients: ['Ingredient 1','Ingredient 2','Ingredient 3']
				},
				{
					id: 2,
					name: 'Recipe 2',
					date: '01/11/2017',
					description: 'This is a description 2',
					instructions: 'These are the instructions about something else',
					ingredients: ['Ingredient 11','Ingredient 21','Ingredient 31']
				}
			],
			recipeID: 3
		}

		this.addRecipe = this.addRecipe.bind(this);
	}

	componentWillMount(){
		//save data. Will save to local storage first and fallback to cookies
		storeLocal("recipes", this.state.recipes);
		// Retrieve
		var localRecipes = getLocal("recipes");

	}

	/**
	 * Add a new recipe to our state
	 */
	addRecipe(inputState){
		const ingredients = inputState.ingredients.split(",");
		const d = new Date();

		const newRecipe = {
			id: inputState.recipeID,
			name: inputState.name,
			date: d.getMonth()+'/'+d.getDate()+'/'+d.getFullYear(),
			description:  inputState.description,
			instructions: inputState.instructions,
			ingredients: ingredients
		}

		this.setState({
			recipes: this.state.recipes.concat([newRecipe]),
			recipeID: this.state.recipeID++
		});

	}

	editRecipe(){

	}

	deleteRecipe(){

	}

	render() {
		return <div>
				<Ingredients recipes={this.state.recipes} />
				<AddModal onClick={this.addRecipe} />
				<EditModal onClick={this.editRecipe} />
				<DeleteModal onClick={this.deleteRecipe} />
			</div>;
	}
}


// ========================================

ReactDOM.render(
	<App />,
	document.getElementById('app')
);



// ====================================
//              FUNCTIONS
// ====================================


 /**
  * SAVE any value to local storage
  * @param string Storage name
  * @param mixed Storage Value
  */
 function storeLocal(name, value){
 	if (typeof(Storage) !== "undefined") {
 		localStorage.setItem(name, JSON.stringify(value));
 	}else{
 		//if we do not have local storage for some reason try to use cookies
 		//we are just saving for 1 day for now
 		setCookie(name, JSON.stringify(value), 1);
 	}
 }

 /**
  * GET any value to local storage
  * @param  string cname  Storage Name
  * @return string        Storage Value
  */
 function getLocal(name){

 	if (typeof(Storage) !== "undefined") {
 		return JSON.parse(localStorage.getItem(name));
 	}else{
 		//if we do not have local storage for some reason try to use cookies
 		return JSON.parse(getCookie(name));
 	}
 }

 /**
  * Set a Cookie
  * @param string cname  Cookie Name
  * @param mixed cvalue  Cookie Value
  * @param int exdays How many days before expire
  */
 function setCookie(cname, cvalue, exdays) {
 	var d = new Date();
 	d.setTime(d.getTime() + (exdays*24*60*60*1000));
 	var expires = "expires="+ d.toUTCString();
 	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

 /**
  * Get a cookie
  * @param  string cname  Cookie Name
  * @return string        Cookie Value
  */
 function getCookie(cname) {
 	var name = cname + "=";
 	var ca = document.cookie.split(';');
 	for(var i = 0; i <ca.length; i++) {
 		var c = ca[i];
 		while (c.charAt(0)==' ') {
 			c = c.substring(1);
 		}
 		if (c.indexOf(name) == 0) {
 			return c.substring(name.length,c.length);
 		}
 	}
 	return "";
 }

 /**
  * Delete a Cookie
  * @param string cname  Cookie Name
  */
 function deleteCookie(cname) {
 	setCookie(cname, '', -1);
 }
