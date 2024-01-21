import { SELECT_ALL_ENABLED, SELECT_ALL_LABEL, DESELECT_ALL_LABEL, SUPPORTED_BLOCKS, ADD_AS_OPTION } from './constants';

function registerAttributes( settings, name ) {

	if ( ! SUPPORTED_BLOCKS[ name ] ) {
		return settings;
	}

	settings.attributes = {
		...settings.attributes,
		[ SELECT_ALL_ENABLED ]: {
			type: 'boolean',
			default: false,
		},
		[ ADD_AS_OPTION ]: {
			type: 'boolean',
			default: false,
		},
		[ SELECT_ALL_LABEL ]: {
			type: 'string',
			default: 'Select All',
		},
		[ DESELECT_ALL_LABEL ]: {
			type: 'string',
			default: 'Deselect All',
		},
	};

	return settings;
}

export default registerAttributes;