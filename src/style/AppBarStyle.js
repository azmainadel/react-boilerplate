export const AppBarStyle = (theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
        height: '68px'
    },
    toolbarPublic: {
        flexWrap: 'wrap',
        minHeight: '68px'
    },
    toolbarTitle: {
        flexGrow: 1,
        verticalAlign: 'middle'
    },
    screen: {
        padding: theme.spacing(4),
    },
});