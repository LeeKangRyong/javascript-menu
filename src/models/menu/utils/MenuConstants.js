const MENU = Object.freeze({
    'NAME_OF_COACH_START' : 2,
    'NAME_OF_COACH_END' : 4,

    'NUMBER_OF_COACH_START' : 2,
    'NUMBER_OF_COACH_END' : 5,

    'NUMBER_OF_CANNT_EAT_MENU_END' : 2,


    'SAMPLE_MENU_SEPARATOR' : ', '
});

const MENU_ERROR = Object.freeze({
    'INVALID_SEPARATOR' : 'Invalid separator',
    'INVALID_LENGTH_OF_NAME' : 'Length of coach name has to be between 2 and 4',
    'INVALID_NUMBER_OF_COACH' : 'The number of coach has to be between 2 and 5',
    'DUPLICATED_NAME_EXISTS' : 'Duplicated coach name exists',
    'INVALID_NUMBER_OF_CANNOT_EAT_MENU' : 'The number of menu has to be 0 and 2',
    'NON_SAMPLE_MENU' : 'Non-sample menu exists'
});

export { MENU, MENU_ERROR };