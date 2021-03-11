import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Grid";
import { useState } from 'react';
import './QuestionCountButton.css'

const QuestionCountButton = () => {

    const [questionCount, setQuestionCount] = useState(0)

    const inc = () => setQuestionCount(questionCount + 1);
    const dec = () => setQuestionCount(questionCount - 1);

    return (
        <div className='question'>

            <Grid container justify='center' xs={12}>
            <Button onClick={dec} className='count_button_dec' variant="contained" color="#5695e0" disableElevation>
                    <h4>-</h4>
                </Button>

                <div className='count'>{questionCount}</div>

                <Button onClick={inc} className='count_button_inc' variant="contained" color="#5777b4" disableElevation>
                    <h4>+</h4>
                </Button>
            </Grid>
                
            


        </div>

    );
};

export default QuestionCountButton