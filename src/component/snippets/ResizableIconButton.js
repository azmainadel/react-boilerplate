import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import {withStyles} from '@material-ui/core/styles';

const ResizableIconButton = ({classes, size, ...props}) =>
    <IconButton className={classes[size]}
                {...props}/>;

const styles = {
    small: {
        '& svg': {
            fontSize: 32
        }
    },
    medium: {
        '& svg': {
            fontSize: 64
        }
    },
    large: {
        '& svg': {
            fontSize: 128
        }
    }
};

export default withStyles(styles)(ResizableIconButton);