import getMuiTheme from 'material-ui/styles/getMuiTheme';

const colors = {
    primary: '#41a5ff'
}

let muiTheme = getMuiTheme({
    fontFamily: 'ASAP, sans-serif',
    palette: {
        primary1Color: colors.primary,
        primary2Color: colors.primary
    }
});

export default muiTheme;