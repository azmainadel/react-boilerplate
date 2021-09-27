import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import {lighten} from "@material-ui/core";

const BorderLinearProgress = withStyles({
    root: {
        height: 8,
        backgroundColor: lighten('#28D9C3', 0.5),
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#28D9C3',
    },
})(LinearProgress);

const SuspenseLoader = () => {
    return (
        <div style={{width: '100%'}}>
            <BorderLinearProgress color="secondary"/>
        </div>
    );
}

export default SuspenseLoader;
