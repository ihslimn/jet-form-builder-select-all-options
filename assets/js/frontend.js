(

	function( $ ) {

		let allOption = '_jfb_select_all';

		$( window ).on( 'jet-form-builder/init', init );

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

		function init() {

			const {
				addAction,
			} = window.JetPlugins.hooks;

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

					if ( ! input.nodes[0].closest( '[data-select-all]' ) ) {
						return;
					}

					storeValues( input );

					if ( needButtons( input ) ) {
						addButtons( input );
						return;
					}

					setInputWatcher( input );

				}
			);

			$( window ).off( 'jet-form-builder/init', init );
		}

		function addButtons( input ) {

			const root = input.nodes[0].closest( '[data-select-all="buttons"]' );

			if ( ! root ) {
				return;
			}

			const label = root.querySelector( '.jet-form-builder__label' );

			if ( label ) {
				insertAfterLabel( root, label );
			} else {
				insertIntoRoot( root );
			}

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

			return wrapper;

		}

		function insertAfterLabel( root, label ) {

			const buttons = createButtons( root );

			label.after( buttons );

		}

		function insertIntoRoot( root ) {

			const buttons = createButtons( root );

			root.insertBefore( buttons, root.firstChild );

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

				console.log( 'input change', isChangeBlocked( input ) );
				
				if ( isChangeBlocked( input ) ) {
					unblockChange( input );
					return;
				}
				
				let values = input.jfb_select_all.values,
					curr = input.value.current;

				console.log( values, prev, curr );
					
				let maxNumber = values.length;
				
				if ( curr.length === maxNumber - 1 && ! hasAll( curr ) && ! hasAll( prev ) ) {
					blockChange( input );
					console.log( 'switch all option ON' );
					input.value.current = values;
					return;
				}
				
				if ( ! hasAll( curr ) && hasAll( prev ) && input.inputType === 'checkbox' ) {
					blockChange( input );
					console.log( 'remove all options' );
					input.value.current = [];
					return;
				}
				
				if ( prev.length === maxNumber && hasAll( curr ) ) {
					blockChange( input );
					console.log( 'switch all except all' );
					input.value.current = getValuesExceptAll( input.value.current );
					return;
					
				}
				
				if ( hasAll( curr ) && ! hasAll( prev ) ) {
					blockChange( input );
					console.log( 'switch all' );
					input.value.current = values;
					return;
					
				}
				
			} );

		}

	}

)( jQuery );
