import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
// import  Pie  from 'react-minimal-pie-chart';


import './PieChart.css'
import Diag from './Diag'


function PieChart() {
    return (
        <div>
            <div className='pie_chart_div' >
            </div>
            <div className='top'>
                <Grid container column>
                    <h3>
                        Question Distribution
                    </h3>
                </Grid>
                <Grid container column>
                   <Diag />
                </Grid>


            </div>
        </div>


    )
}

export default PieChart;