import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

import '../components/MainGrid.css'
import SubjectButton from './SubjectButton'
import ChapterButton from './ChapterButton'
import PieChart from './PieChart'
import Table from './Table'
import RangeSlider from '../Slider';
import { DataProvider } from './DataContext';

const MainGrid = () => {

    return (
        <div className='main_grid'>
            <Grid container spacing={2}>
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
                        <div className='table_parent'>
                            <Grid item xs={12}>

                                <Table />


                            </Grid>
                        </div>
                        <Grid item xs={12}>
                            <Grid container>
                                <h7>Toughness Selector</h7>
                                <div className='slider'>
                                    <RangeSlider />
                                </div>
                            </Grid>

                        </Grid>
                        <Grid item xs={12}>
                            <Button className='submit_button' variant="contained" color="primary" disableElevation>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={4}  >
                    <PieChart />
                </Grid>

            </Grid>

        </div >
    );

}

export default MainGrid;