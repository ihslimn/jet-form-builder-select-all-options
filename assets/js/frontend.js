const {
		addAction,
	} = window.JetPlugins.hooks,
	allOption = '_jfb_select_all';

addAction(
	'jet.fb.input.makeReactive',
	'jfb-select-all-options/on-observe',
	function( input ) {

		if ( ! input.nodes?.length ) {
			return;
		}

		if ( input.nodes[0]?.type !== 'select-multiple' && input.inputType !== 'checkbox' ) {
			return;
		}

		storeValues( input );

		if ( input.nodes[0].closest( '[data-select-all-default="true"]' ) ) {
			input.value.current = input.jfb_select_all.values;
		}

		if ( ! input.nodes[0].closest( '[data-select-all]' ) ) {
			return;
		}

		if ( needButtons( input ) ) {
			addButtons( input );
			return;
		}

		setInputWatcher( input );

	}
);

function needButtons( input ) {

	if ( ! input.nodes?.length ) {
		return false;
	}

	return ! ! input.nodes[0].closest( '[data-select-all="buttons"]' );

}

function storeValues( input ) {

	if ( ! input.nodes?.length ) {
		return [];
	}

	let options = null,
		values = [],
		valuesExceptAll = [],
		storeExceptAll = ! needButtons( input );

	switch ( input.inputType ) {
		case 'select':
			options = input.nodes[0].options;
			break;
		case 'checkbox':
			options = input.nodes;
			break;
	}

	if ( ! options ) {
		return;
	}

	input.jfb_select_all = {};

	if ( storeExceptAll ) {
		input.jfb_select_all.type = 'option';
	} else {
		input.jfb_select_all.type = 'buttons';
	}

	for ( const option of options ) {
		if ( storeExceptAll && option.value !== '_jfb_select_all' ) {
			valuesExceptAll.push( option.value );
		}
		values.push( option.value );
	}

	input.jfb_select_all.values = values;

	if ( storeExceptAll ) {
		input.jfb_select_all.valuesExceptAll = valuesExceptAll;
		input.jfb_select_all.changingValueBlocked = false;
	}

}

function addButtons( input ) {

	const root = input.nodes[0].closest( '[data-select-all="buttons"]' );

	if ( ! root ) {
		return;
	}

	const label = root.querySelector( '.jet-form-builder__label' );

	let buttons = [];

	if ( label ) {
		buttons = insertAfterLabel( root, label );
	} else {
		buttons = insertIntoRoot( root );
	}

	buttons[1].addEventListener( 'click', selectAllOptions );
	buttons[2].addEventListener( 'click', deselectAllOptions );

}

function getInput( node ) {

	const field = node.closest( '[data-select-all="buttons"]' );

	if ( ! field ) {
		return;
	}

	const form   = node.closest( 'form' ),
			formId = form.dataset.formId,
			fieldName = field.querySelector( '[data-field-name]' )?.dataset.fieldName;

	if ( ! fieldName ) {
		return;
	}

	return JetFormBuilder[ formId ].getInput( fieldName );

}

function selectAllOptions( e ) {

	e.preventDefault();

	const input = getInput( this );

	input.value.current = input.jfb_select_all.values;

}

function deselectAllOptions( e ) {

	e.preventDefault();

	const input = getInput( this );

	input.value.current = [];

}

function createButtons( root ) {

	const selectAllLabel = root.dataset.selectAllButtonsSelectLabel,
			deselectAllLabel = root.dataset.selectAllButtonsDeselectLabel;

	let wrapper = document.createElement( 'div' ),
		selectAll = document.createElement( 'button' ),
		deselectAll = document.createElement( 'button' );

	wrapper.classList.add( 'select-all-buttons-wrapper' );

	selectAll.classList.add( 'select-all-button' );
	deselectAll.classList.add( 'deselect-all-button' );

	selectAll.innerHTML = selectAllLabel;
	deselectAll.innerHTML = deselectAllLabel;

	wrapper.appendChild( selectAll );
	wrapper.appendChild( deselectAll );

	return [ wrapper, selectAll, deselectAll ];

}

function insertAfterLabel( root, label ) {

	const buttons = createButtons( root );

	label.after( buttons[0] );

	return buttons;

}

function insertIntoRoot( root ) {

	const buttons = createButtons( root );

	root.insertBefore( buttons[0], root.firstChild );

	return buttons;

}

function hasAll( value ) {
	return value?.includes( allOption );
}

function isChangeBlocked( input ) {
	return ! ! input.jfb_select_all.changingValueBlocked;
}

function blockChange( input ) {
	input.jfb_select_all.changingValueBlocked = true;
}

function unblockChange( input ) {
	input.jfb_select_all.changingValueBlocked = false;
}

function getValuesExceptAll( values ) {
	if ( ! values.length ) {
		return [];
	}
	
	return values.filter( function( value ) {
		return value !== allOption;
	} );
}

function setInputWatcher( input ) {

	input?.value.watch( function( prev ) {
	

		if ( ! input?.value ) {
			return;
		}
		
		if ( isChangeBlocked( input ) ) {
			unblockChange( input );
			return;
		}
		
		let values    = input.jfb_select_all.values,
			maxNumber = values.length,
			curr      = input.value.current;
		
		if ( curr.length === maxNumber - 1 && ! hasAll( curr ) && ! hasAll( prev ) ) {
			blockChange( input );
			input.value.current = values;
			return;
		}
		
		if ( ! hasAll( curr ) && hasAll( prev ) && input.inputType === 'checkbox' ) {
			blockChange( input );
			input.value.current = [];
			return;
		}
		
		if ( prev?.length === maxNumber && hasAll( curr ) ) {
			blockChange( input );
			input.value.current = getValuesExceptAll( input.value.current );
			return;
		}
		
		if ( hasAll( curr ) && ! hasAll( prev ) ) {
			blockChange( input );
			input.value.current = values;
			return;
		}
		
	} );

}

