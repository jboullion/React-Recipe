'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddModal = function (_React$Component) {
	_inherits(AddModal, _React$Component);

	function AddModal(props) {
		_classCallCheck(this, AddModal);

		var _this = _possibleConstructorReturn(this, (AddModal.__proto__ || Object.getPrototypeOf(AddModal)).call(this, props));

		_this.state = {
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

		_this.handleInputChange = _this.handleInputChange.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	//Set this components state based on the name of the input


	_createClass(AddModal, [{
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var value = event.target.value;
			var name = event.target.name;

			this.setState(_defineProperty({}, name, value));
		}

		//Validation and submission to parent for state change

	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			var errors = this.state.errors;
			var hasErrors = false;

			if (!this.state.name) {
				errors.name = 'has-error';
				hasErrors = true;
			} else {
				errors.name = '';
			}

			if (!this.state.description) {
				errors.description = 'has-error';
				hasErrors = true;
			} else {
				errors.description = '';
			}

			if (!this.state.instructions) {
				errors.instructions = 'has-error';
				hasErrors = true;
			} else {
				errors.instructions = '';
			}

			if (!this.state.ingredients) {
				errors.ingredients = 'has-error';
				hasErrors = true;
			} else {
				errors.ingredients = '';
			}

			if (hasErrors === false) {
				//Success!
				this.props.onClick(this.state);
			} else {
				//Error!
				this.setState({
					errors: errors
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				{ className: 'modal fade', id: 'addModal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'addModalLabel' },
				React.createElement(
					'div',
					{ className: 'modal-dialog', role: 'document' },
					React.createElement(
						'div',
						{ className: 'modal-content' },
						React.createElement(
							'div',
							{ className: 'modal-header' },
							React.createElement(
								'button',
								{ type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
								React.createElement(
									'span',
									{ 'aria-hidden': 'true' },
									'\xD7'
								)
							),
							React.createElement(
								'h4',
								{ className: 'modal-title', id: 'addModalLabel' },
								'Add Recipe'
							)
						),
						React.createElement(
							'div',
							{ className: 'modal-body' },
							React.createElement(
								'table',
								{ className: 'table' },
								React.createElement(
									'tbody',
									null,
									React.createElement(
										'tr',
										null,
										React.createElement(
											'th',
											null,
											'Name'
										),
										React.createElement(
											'td',
											{ className: this.state.errors.name },
											React.createElement('input', { type: 'text', className: 'form-control', id: 'add-name',
												name: 'name',
												value: this.state.name,
												onChange: this.handleInputChange })
										)
									),
									React.createElement(
										'tr',
										null,
										React.createElement(
											'th',
											null,
											'Description'
										),
										React.createElement(
											'td',
											{ className: this.state.errors.description },
											React.createElement('input', { type: 'text', className: 'form-control', id: 'add-description',
												name: 'description',
												value: this.state.description,
												onChange: this.handleInputChange })
										)
									),
									React.createElement(
										'tr',
										null,
										React.createElement(
											'th',
											null,
											'Instructions'
										),
										React.createElement(
											'td',
											{ className: this.state.errors.instructions },
											React.createElement('textarea', { className: 'form-control', style: { resize: "none" }, id: 'add-instructions', rows: '5',
												name: 'instructions',
												value: this.state.instructions,
												onChange: this.handleInputChange })
										)
									),
									React.createElement(
										'tr',
										null,
										React.createElement(
											'th',
											null,
											'Ingredients'
										),
										React.createElement(
											'td',
											{ className: this.state.errors.ingredients },
											React.createElement('textarea', { className: 'form-control', style: { resize: "none" }, id: 'add-ingredients', rows: '5',
												name: 'ingredients',
												value: this.state.ingredients,
												onChange: this.handleInputChange })
										)
									)
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'modal-footer' },
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
								'Close'
							),
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-primary', id: 'add-save', onClick: function onClick() {
										return _this2.handleSubmit(_this2.state);
									} },
								'Save'
							)
						)
					)
				)
			);
		}
	}]);

	return AddModal;
}(React.Component);

var EditModal = function (_React$Component2) {
	_inherits(EditModal, _React$Component2);

	function EditModal(props) {
		_classCallCheck(this, EditModal);

		return _possibleConstructorReturn(this, (EditModal.__proto__ || Object.getPrototypeOf(EditModal)).call(this, props));
	}

	_createClass(EditModal, [{
		key: 'render',
		value: function render() {
			var _this4 = this;

			return React.createElement(
				'div',
				{ className: 'modal fade', id: 'editModal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'editModalLabel' },
				React.createElement(
					'div',
					{ className: 'modal-dialog', role: 'document' },
					React.createElement(
						'div',
						{ className: 'modal-content' },
						React.createElement(
							'div',
							{ className: 'modal-header' },
							React.createElement(
								'button',
								{ type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
								React.createElement(
									'span',
									{ 'aria-hidden': 'true' },
									'\xD7'
								)
							),
							React.createElement(
								'h4',
								{ className: 'modal-title', id: 'addModalLabel' },
								'Edit Recipe'
							)
						),
						React.createElement(
							'div',
							{ className: 'modal-body' },
							React.createElement(
								'table',
								{ className: 'table' },
								React.createElement(
									'tbody',
									null,
									React.createElement(
										'tr',
										null,
										React.createElement(
											'th',
											null,
											'Name'
										),
										React.createElement(
											'td',
											null,
											React.createElement('input', { type: 'text', className: 'form-control', id: 'edit-name' })
										)
									),
									React.createElement(
										'tr',
										null,
										React.createElement(
											'th',
											null,
											'Description'
										),
										React.createElement(
											'td',
											null,
											React.createElement('input', { type: 'text', className: 'form-control', id: 'edit-description' })
										)
									),
									React.createElement(
										'tr',
										null,
										React.createElement(
											'th',
											null,
											'Instructions'
										),
										React.createElement(
											'td',
											null,
											React.createElement('textarea', { className: 'form-control', style: { resize: "none" }, id: 'edit-instructions', rows: '5' })
										)
									),
									React.createElement(
										'tr',
										null,
										React.createElement(
											'th',
											null,
											'Ingredients'
										),
										React.createElement(
											'td',
											null,
											React.createElement('textarea', { className: 'form-control', style: { resize: "none" }, id: 'edit-ingredients', rows: '5' })
										)
									)
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'modal-footer' },
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
								'Close'
							),
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-primary', id: 'edit-save', 'data-edit': '', onClick: function onClick() {
										return _this4.props.onClick(props.recipe);
									} },
								'Save'
							)
						)
					)
				)
			);
		}
	}]);

	return EditModal;
}(React.Component);

var DeleteModal = function (_React$Component3) {
	_inherits(DeleteModal, _React$Component3);

	function DeleteModal(props) {
		_classCallCheck(this, DeleteModal);

		return _possibleConstructorReturn(this, (DeleteModal.__proto__ || Object.getPrototypeOf(DeleteModal)).call(this, props));
	}

	_createClass(DeleteModal, [{
		key: 'render',
		value: function render() {
			var _this6 = this;

			return React.createElement(
				'div',
				{ className: 'modal fade', id: 'deleteModal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'deleteModalLabel' },
				React.createElement(
					'div',
					{ className: 'modal-dialog', role: 'document' },
					React.createElement(
						'div',
						{ className: 'modal-content' },
						React.createElement(
							'div',
							{ className: 'modal-header' },
							React.createElement(
								'button',
								{ type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
								React.createElement(
									'span',
									{ 'aria-hidden': 'true' },
									'\xD7'
								)
							),
							React.createElement(
								'h4',
								{ className: 'modal-title', id: 'addModalLabel' },
								'Delete Recipe'
							)
						),
						React.createElement(
							'div',
							{ className: 'modal-body' },
							React.createElement(
								'h3',
								null,
								'Are you sure you want to delete "Recipe Name"?'
							)
						),
						React.createElement(
							'div',
							{ className: 'modal-footer' },
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
								'CANCEL'
							),
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-danger', id: 'delete', 'data-delete': '', onClick: function onClick() {
										return _this6.props.onClick(props.recipe);
									} },
								'DELETE'
							)
						)
					)
				)
			);
		}
	}]);

	return DeleteModal;
}(React.Component);

function Ingredient(props) {
	var ingredientList = [];
	for (var i = 0; i < props.recipe.ingredients.length; i++) {
		ingredientList.push(React.createElement(
			'li',
			{ key: props.index + '' + i },
			props.recipe.ingredients[i]
		));
	}

	return React.createElement(
		'table',
		{ className: 'table table-striped' },
		React.createElement(
			'tbody',
			null,
			React.createElement(
				'tr',
				{ role: 'button', className: 'recipe-' + props.recipe.id },
				React.createElement(
					'td',
					{ className: 'index', 'data-toggle': 'collapse', href: '#recipe-' + props.recipe.id, 'aria-expanded': 'false' },
					props.index
				),
				React.createElement(
					'td',
					{ className: 'name', 'data-toggle': 'collapse', href: '#recipe-' + props.recipe.id, 'aria-expanded': 'false' },
					props.recipe.name
				),
				React.createElement(
					'td',
					{ className: 'description', 'data-toggle': 'collapse', href: '#recipe-' + props.recipe.id, 'aria-expanded': 'false' },
					props.recipe.description
				),
				React.createElement(
					'td',
					{ className: 'date', 'data-toggle': 'collapse', href: '#recipe-' + props.recipe.id, 'aria-expanded': 'false' },
					props.recipe.date
				),
				React.createElement(
					'td',
					{ className: 'edit' },
					React.createElement(
						'button',
						{ type: 'button', className: 'btn btn-warning', 'data-toggle': 'modal', 'data-target': '#editModal', 'data-recipe': props.recipe.id },
						'Edit'
					)
				),
				React.createElement(
					'td',
					{ className: 'delete' },
					React.createElement(
						'button',
						{ type: 'button', className: 'btn btn-danger', 'data-toggle': 'modal', 'data-target': '#deleteModal', 'data-recipe': props.recipe.id },
						'Delete'
					)
				)
			),
			React.createElement(
				'tr',
				{ className: 'recipe-' + props.recipe.id },
				React.createElement(
					'td',
					{ colSpan: '6' },
					React.createElement(
						'div',
						{ className: 'collapse recipe', id: 'recipe-' + props.recipe.id },
						React.createElement(
							'div',
							{ className: 'col-50' },
							React.createElement(
								'div',
								{ className: 'instructions' },
								React.createElement(
									'h3',
									null,
									'Instructions'
								),
								props.recipe.instructions
							)
						),
						React.createElement(
							'div',
							{ className: 'col-50' },
							React.createElement(
								'div',
								{ className: 'ingredients' },
								React.createElement(
									'h3',
									null,
									'Ingredients'
								),
								React.createElement(
									'ul',
									null,
									ingredientList
								)
							)
						),
						React.createElement('div', { className: 'clearfix' })
					)
				)
			)
		)
	);
}

function Ingredients(props) {
	var recipes = props.recipes;

	return React.createElement(
		'div',
		null,
		recipes.map(function (recipe, index) {
			return React.createElement(Ingredient, { key: 'ingredient' + recipe.id,
				recipe: recipe,
				index: index + 1 });
		})
	);
}

var App = function (_React$Component4) {
	_inherits(App, _React$Component4);

	function App() {
		_classCallCheck(this, App);

		var _this7 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this7.state = {
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
			}],
			recipeID: 3
		};

		_this7.addRecipe = _this7.addRecipe.bind(_this7);
		return _this7;
	}

	_createClass(App, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			//save data. Will save to local storage first and fallback to cookies
			storeLocal("recipes", this.state.recipes);
			// Retrieve
			var localRecipes = getLocal("recipes");
		}

		/**
   * Add a new recipe to our state
   */

	}, {
		key: 'addRecipe',
		value: function addRecipe(inputState) {
			var ingredients = inputState.ingredients.split(",");
			var d = new Date();

			var newRecipe = {
				id: inputState.recipeID,
				name: inputState.name,
				date: d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear(),
				description: inputState.description,
				instructions: inputState.instructions,
				ingredients: ingredients
			};

			this.setState({
				recipes: this.state.recipes.concat([newRecipe]),
				recipeID: this.state.recipeID++
			});
		}
	}, {
		key: 'editRecipe',
		value: function editRecipe() {}
	}, {
		key: 'deleteRecipe',
		value: function deleteRecipe() {}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(Ingredients, { recipes: this.state.recipes }),
				React.createElement(AddModal, { onClick: this.addRecipe }),
				React.createElement(EditModal, { onClick: this.editRecipe }),
				React.createElement(DeleteModal, { onClick: this.deleteRecipe })
			);
		}
	}]);

	return App;
}(React.Component);

// ========================================

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

// ====================================
//              FUNCTIONS
// ====================================


/**
 * SAVE any value to local storage
 * @param string Storage name
 * @param mixed Storage Value
 */
function storeLocal(name, value) {
	if (typeof Storage !== "undefined") {
		localStorage.setItem(name, JSON.stringify(value));
	} else {
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
function getLocal(name) {

	if (typeof Storage !== "undefined") {
		return JSON.parse(localStorage.getItem(name));
	} else {
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
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	var expires = "expires=" + d.toUTCString();
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
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
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