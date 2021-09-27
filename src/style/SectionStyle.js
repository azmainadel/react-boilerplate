export const SectionStyle = (theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    screen: {
        marginBottom: theme.spacing(16),
    },
    tryScreen: {
        marginBottom: theme.spacing(16),
        padding: theme.spacing(16, 4, 16, 4),
        backgroundColor: '#FAFBFF'
    },
    footerScreen: {
        padding: theme.spacing(16, 4, 16, 4),
        backgroundColor: '#FAFBFF'
    },
});