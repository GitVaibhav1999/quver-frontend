import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

import './Table.css'
import TableBody from './TableBody';

function Table() {
    return (
        <div>
            <div className='table_div' >
            </div>
            <div className='ontop'>
                <div className='table_header'>
                    <Grid container spacing={0}>
                        <Grid item xs={5}>
                            Chapter
                        </Grid >
                        <Grid item xs={2}>
                            <div > Question Count </div>
                        </Grid >
                        <Grid item xs={5}>
                                <Grid container column xs={12} justify='center' >
                                
                                    <div> Difficulty </div>
                                </Grid>
                                <Grid container column xs={12} justify='center' >
                                    <Grid container>
                                    <Grid item xs={4}>Easy</Grid>
                                    <Grid item xs={4}>Medium</Grid>
                                    <Grid item xs={4}>Hard</Grid>
                                </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                   
                </div>
                <TableBody />

            </div>
        </div>

    )
}

export default Table;