const MENU = Object.freeze({
    'NAME_OF_COACH_START' : 2,
    'NAME_OF_COACH_END' : 4,

    'NUMBER_OF_COACH_START' : 2,
    'NUMBER_OF_COACH_END' : 5
});

const MENU_ERROR = Object.freeze({
    'INVALID_SEPARATOR' : 'Invalid separator',
    'INVALID_LENGTH_OF_NAME' : 'Length of coach name has to be between 2 and 4',
    'INVALID_NUMBER_OF_COACH' : 'The number of coach has to be between 2 and 5'
});

export { MENU, MENU_ERROR };