
function Ingredient(props) {
	var ingredientList = [];
	for (var i=0; i < props.recipe.ingredients.length; i++) {
	    ingredientList.push(<li key={i}>{props.recipe.ingredients[i]}</li>);
	}

	return <table className="table table-striped">
			<tbody>
				<tr role="button" className={'recipe-'+props.recipe.id}>
					<td className="index" data-toggle="collapse" href={'#recipe-'+props.recipe.id} aria-expanded="false">{props.index}</td>
					<td className="name" data-toggle="collapse" href={'#recipe-'+props.recipe.id} aria-expanded="false">{props.recipe.name}</td>
					<td className="description" data-toggle="collapse" href={'#recipe-'+props.recipe.id} aria-expanded="false">{props.recipe.description}</td>
					<td className="date" data-toggle="collapse" href={'#recipe-'+props.recipe.id} aria-expanded="false">{props.recipe.date}</td>
					<td className="edit"><button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editModal" data-recipe={props.recipe.id}>Edit</button></td>
					<td className="delete"><button type="button" className="btn btn-danger" data-recipe={props.recipe.id}>Delete</button></td>
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
				<Ingredient key={recipe.id}
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
		}
	}

	componentWillMount(){

	}

	handleClick(){

	}

	render() {
		return <Ingredients recipes={this.state.recipes} />;
	}
}

// ========================================

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
