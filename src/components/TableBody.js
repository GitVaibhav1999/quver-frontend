import React from 'react'
import Grid from '@material-ui/core/Grid';
import QuestionCountButton from './QuestionCountButton';

import './TableBody.css'

const TableBody = () => {

    return (

        <div className='table_body'>
            <Grid container>
                <Grid item xs={12}>


                    <Grid container column spacing>
                        <div className='subject_name'>
                            Physics:

                        </div>

                        <Grid container column>
                            <Grid item xs={5}>
                                <div className='chapter_name'>
                                    Unit and Measurement
                                </div>

                            </Grid>
                            <Grid item xs={2}>
                                <div className='question_count_button'>
                                    <QuestionCountButton />
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <div className='difficulty_div1'>
                                <Grid container justify='center' alignItems='center' xs={12}>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={3}>7</Grid>
                                   </Grid>
                                </div>
                            </Grid>



                        </Grid>
                        <Grid container column>
                            <Grid item xs={5}>
                                <div className='chapter_name'>
                                    Optics
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <div className='question_count_button'>
                                    <QuestionCountButton />
                                </div>

                            </Grid>
                            <Grid item xs={5}>
                                <div className='difficulty_div2'>
                                <Grid container justify='center' alignItems='center' xs={12}>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={3}>7</Grid>
                                   </Grid>
                                </div>
                            </Grid>



                        </Grid>
                        <Grid container column>
                            <Grid item xs={5}>
                                <div className='chapter_name'>
                                    Wave
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <div className='question_count_button'>
                                    <QuestionCountButton />
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <div className='difficulty_div1'>
                                <Grid container justify='center' alignItems='center' xs={12}>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={3}>7</Grid>
                                   </Grid>
                                </div>
                            </Grid>



                        </Grid>
                    </Grid>
                    <Grid container column spacing>
                        <div className='subject_name'>
                            Chemistry:

                        </div>

                        <Grid container column>
                            <Grid item xs={5}>
                                <div className='chapter_name'>
                                    Reactions
                                </div>

                            </Grid>
                            <Grid item xs={2}>
                                <div className='question_count_button'>
                                    <QuestionCountButton />
                                </div>
                            </Grid>
        
                            <Grid item xs={5}>
                                <div className='difficulty_div2'>
                                <Grid container justify='center' alignItems='center' xs={12}>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={3}>7</Grid>
                                   </Grid>
                                </div>
                            </Grid>



                        </Grid>
                        <Grid container column>
                            <Grid item xs={5}>
                                <div className='chapter_name'>
                                    Inert Gasses
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <div className='question_count_button'>
                                    <QuestionCountButton />
                                </div>

                            </Grid>
                            <Grid item xs={5}>
                                <div className='difficulty_div1'>
                                <Grid container justify='center' alignItems='center' xs={12}>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={3}>7</Grid>
                                   </Grid>
                                </div>
                            </Grid>



                        </Grid>
                        <Grid container column>
                            <Grid item xs={5}>
                                <div className='chapter_name'>
                                    Ions
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <div className='question_count_button'>
                                    <QuestionCountButton />
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <div className='difficulty_div2'>
                                <Grid container justify='center' alignItems='center' xs={12}>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={3}>7</Grid>
                                   </Grid>
                                </div>
                            </Grid>



                        </Grid>
                    </Grid>
                    <Grid container column spacing>
                        <div className='subject_name'>
                            Maths:

                        </div>

                        <Grid container column>
                            <Grid item xs={5}>
                                <div className='chapter_name'>
                                    Calculus
                                </div>

                            </Grid>
                            <Grid item xs={2}>
                                <div className='question_count_button'>
                                    <QuestionCountButton />
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <div className='difficulty_div1'>
                                <Grid container justify='center' alignItems='center' xs={12}>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={3}>7</Grid>
                                   </Grid>
                                </div>
                            </Grid>



                        </Grid>
                        <Grid container column>
                            <Grid item xs={5}>
                                <div className='chapter_name'>
                                    More Calculus
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <div className='question_count_button'>
                                    <QuestionCountButton />
                                </div>

                            </Grid>
                            <Grid item xs={5}>
                                <div className='difficulty_div2'>
                                <Grid container justify='center' alignItems='center' xs={12}>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={3}>7</Grid>
                                   </Grid>
                                </div>
                            </Grid>
                            


                        </Grid>
                        <Grid container column>
                            <Grid item xs={5}>
                                <div className='chapter_name'>
                                    Calculus again
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <div className='question_count_button'>
                                    <QuestionCountButton />
                                </div>
                            </Grid>

                            <Grid item xs={5}>
                                <div className='difficulty_div1'>
                                   <Grid container justify='center' alignItems='center' xs={12}>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={4}>4</Grid>
                                    <Grid item  xs={3}>7</Grid>
                                   </Grid>
                                </div>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>





            </Grid>
        </div>
    )

}
export default TableBody;