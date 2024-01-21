import { 
		SELECT_ALL_ENABLED, 
		SELECT_ALL_LABEL, 
		DESELECT_ALL_LABEL, 
		SUPPORTED_BLOCKS, 
		CHECKBOX_FIELD, 
		SELECT_FIELD, 
		ADD_AS_OPTION } from './constants';

const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;

const { InspectorControls } = wp.blockEditor;
const { TextControl, ToggleControl, Panel, PanelRow, PanelBody } = wp.components;

const addControls = createHigherOrderComponent( ( BlockEdit ) => {



	return ( props ) => {

		let blockName = props.name,
			supportType = SUPPORTED_BLOCKS[ blockName ] || false;

		if ( ! supportType ) {
			return ( <BlockEdit { ...props } /> );
		}

		const {
			attributes,
			setAttributes,
			isSelected,
		} = props;

		console.log( blockName, supportType,  attributes, attributes[ supportType ] );

		if ( supportType !== 'all' && ! attributes[ supportType ] ) {
			return ( <BlockEdit { ...props } /> );
		}

		if ( typeof attributes[ SELECT_ALL_LABEL ] === 'undefined' ) {
			setAttributes( attributes[ SELECT_ALL_LABEL ] );
		}

		return (
			<>
				<BlockEdit { ...props } />
				{ isSelected &&
					<InspectorControls>
						<Panel>
							{ 
							<PanelBody title="Select All" initialOpen={ false }>
								
								{ <PanelRow>
										<ToggleControl
											label="Enable 'Select All'"
											help={
												attributes[ SELECT_ALL_ENABLED ]
													? 'Enabled.'
													: 'Disabled.'
											}
											checked={ attributes[ SELECT_ALL_ENABLED ] }
											onChange={ () => {
												setAttributes( { [ SELECT_ALL_ENABLED ] : ! attributes[ SELECT_ALL_ENABLED ] } );
											} }
										/>
									</PanelRow> 
								}
								{ attributes[ SELECT_ALL_ENABLED ] &&
									<PanelRow>
										<ToggleControl
											label="Add as option"
											help={
												attributes[ ADD_AS_OPTION ]
													? 'The first option will be a "Select All" option'
													: '"Select All" and "Deselect All" buttons will be added'
											}
											checked={ attributes[ ADD_AS_OPTION ] }
											onChange={ () => {
												setAttributes( { [ ADD_AS_OPTION ] : ! attributes[ ADD_AS_OPTION ] } );
											} }
										/>
									</PanelRow> 
								}
								{ attributes[ SELECT_ALL_ENABLED ] &&
									<PanelRow>
										<TextControl
											label="Select All label"
											help={ '' }
											value={ attributes[ SELECT_ALL_LABEL ] }
											onChange={ newValue => {
												setAttributes( { [ SELECT_ALL_LABEL ] : newValue } );
											} }
										/>
									</PanelRow> 
								}
								{ attributes[ SELECT_ALL_ENABLED ] && ! attributes[ ADD_AS_OPTION ] &&
									<PanelRow>
										<TextControl
											label="Deselect All label"
											help={ '' }
											value={ attributes[ DESELECT_ALL_LABEL ] }
											onChange={ newValue => {
												setAttributes( { [ DESELECT_ALL_LABEL ] : newValue } );
											} }
										/>
									</PanelRow> 
								}
							</PanelBody>
							}
						</Panel>
					</InspectorControls>
				}
			</>
		);
	};

}, 'addControls' );

addFilter(
	'editor.BlockEdit',
	'jet-form-builder/update-fields',
	addControls
);
