import * as colors from '@material-ui/core/colors';

const palette = {
    light: {
        type: 'light',
        primary: {
            main: colors.pink[500], //'#e91e63',
            light: colors.pink[400],
            dark: colors.pink[800],
        },
        secondary: {
            main: colors.indigo[500],//'#3f51b5',
            light: colors.indigo[400],
            dark: colors.indigo[800],
        },
        warning: {
            main: '#ff9800',
            light: '#ffb74d',
            dark: '#f57c00'
        },
        tonalOffset: 0.2,
        background: {
            default: '#f5f5f5',
            white: '#ffffff',
        },
        common: {
            black: '#343a40',
            darkBlack: 'rgb(36, 40, 44)',
            white: '#ffffff',
            lightGrey: '#d3d3d3',
            grey: colors.grey[500],
        },
        spacing: 8,
        breakpoints: {
            values: {
                xl: 1920,
                lg: 1280,
                md: 960,
                sm: 600,
                xs: 0
            }
        },
        border: {
            borderColor: 'rgba(0, 0, 0, 0.13)',
            borderWidth: 2,
        },
        typography: {
            useNextVariants: true
        }
    }
};

export default palette;
