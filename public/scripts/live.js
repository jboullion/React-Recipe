"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Ingredient(props) {
	var ingredientList = [];
	for (var i = 0; i < props.recipe.ingredients.length; i++) {
		ingredientList.push(React.createElement(
			"li",
			{ key: i },
			props.recipe.ingredients[i]
		));
	}

	return React.createElement(
		"table",
		{ className: "table table-striped" },
		React.createElement(
			"tbody",
			null,
			React.createElement(
				"tr",
				{ role: "button", className: 'recipe-' + props.recipe.id },
				React.createElement(
					"td",
					{ className: "index", "data-toggle": "collapse", href: '#recipe-' + props.recipe.id, "aria-expanded": "false" },
					props.index
				),
				React.createElement(
					"td",
					{ className: "name", "data-toggle": "collapse", href: '#recipe-' + props.recipe.id, "aria-expanded": "false" },
					props.recipe.name
				),
				React.createElement(
					"td",
					{ className: "description", "data-toggle": "collapse", href: '#recipe-' + props.recipe.id, "aria-expanded": "false" },
					props.recipe.description
				),
				React.createElement(
					"td",
					{ className: "date", "data-toggle": "collapse", href: '#recipe-' + props.recipe.id, "aria-expanded": "false" },
					props.recipe.date
				),
				React.createElement(
					"td",
					{ className: "edit" },
					React.createElement(
						"button",
						{ type: "button", className: "btn btn-warning", "data-toggle": "modal", "data-target": "#editModal", "data-recipe": props.recipe.id },
						"Edit"
					)
				),
				React.createElement(
					"td",
					{ className: "delete" },
					React.createElement(
						"button",
						{ type: "button", className: "btn btn-danger", "data-recipe": props.recipe.id },
						"Delete"
					)
				)
			),
			React.createElement(
				"tr",
				{ className: 'recipe-' + props.recipe.id },
				React.createElement(
					"td",
					{ colSpan: "6" },
					React.createElement(
						"div",
						{ className: "collapse recipe", id: 'recipe-' + props.recipe.id },
						React.createElement(
							"div",
							{ className: "col-50" },
							React.createElement(
								"div",
								{ className: "instructions" },
								React.createElement(
									"h3",
									null,
									"Instructions"
								),
								props.recipe.instructions
							)
						),
						React.createElement(
							"div",
							{ className: "col-50" },
							React.createElement(
								"div",
								{ className: "ingredients" },
								React.createElement(
									"h3",
									null,
									"Ingredients"
								),
								React.createElement(
									"ul",
									null,
									ingredientList
								)
							)
						),
						React.createElement("div", { className: "clearfix" })
					)
				)
			)
		)
	);
}

function Ingredients(props) {
	var recipes = props.recipes;

	return React.createElement(
		"div",
		null,
		recipes.map(function (recipe, index) {
			return React.createElement(Ingredient, { key: recipe.id,
				recipe: recipe,
				index: index + 1 });
		})
	);
}

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this.state = {
			recipes: [{
				id: 1,
				name: 'Recipe 1',
				date: '01/10/2017',
				description: 'This is a description',
				instructions: 'These are the instructions',
				ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']
			}, {
				id: 2,
				name: 'Recipe 2',
				date: '01/11/2017',
				description: 'This is a description 2',
				instructions: 'These are the instructions about something else',
				ingredients: ['Ingredient 11', 'Ingredient 21', 'Ingredient 31']
			}]
		};
		return _this;
	}

	_createClass(App, [{
		key: "componentWillMount",
		value: function componentWillMount() {}
	}, {
		key: "handleClick",
		value: function handleClick() {}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(Ingredients, { recipes: this.state.recipes });
		}
	}]);

	return App;
}(React.Component);

// ========================================

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));