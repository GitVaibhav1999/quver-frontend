import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

import '../components/MainGrid.css'
import SubjectButton from './SubjectButton'
import ChapterButton from './ChapterButton'
import PieChart from './PieChart'
import Table from './Table'

const MainGrid = () => {

    return (
        <div className='main_div'>
            <Grid className='main_grid' container spacing={2}>
                <Grid item xs={8}>

                    <Grid container spacing={2}>
                        <Grid item xs={4} >
                            <SubjectButton />
                        </Grid>
                        <Grid item xs={8} >
                            <ChapterButton />
                        </Grid >
                        <Grid>
                            <div></div>&nbsp;&nbsp;&nbsp;
                            </Grid>
                        <Grid item xs={12}>
                            <Table />
                        </Grid>
                        <Grid item xs={12}>
                            <div className = 'slider'>
                                <Slider 
                                // value = {43,32}
                                
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                // getAriaValueText={100}
                              />
                           </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Button className='submit_button' variant="contained">
                                Submit
                                </Button>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={4}  >
                    <PieChart />
                </Grid>

            </Grid>
        </div>
    );

}

export default MainGrid;