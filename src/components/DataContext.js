import React from 'react';
import {createContext,useState} from 'react';

export const DataContext = createContext();


export const DataProvider = (props) =>{

    const [data, setData] = useState([
       {
        ID: '43243',
        SubjectID: '41',
        SubjectName: 'Physics',
        ChapterName: 'thermodynamics',
       },

       {
        ID: '43244',
        SubjectID: '41',
        SubjectName: 'Physics',
        ChapterName: 'stars',
       },
       {
        ID: '43432',
        SubjectID: '42',
        SubjectName: 'Chemistry',
        ChapterName: 'p-block',
       },
       {
        ID: '53243',
        SubjectID: '42',
        SubjectName: 'Chemistry',
        ChapterName: 'reaction',
       },
       {
        ID: '34343',
        SubjectID: '43',
        SubjectName: 'Maths',
        ChapterName: 'calculus',
       }

    ]);

    const [subjectSelected, setSubjectSelected] = useState('');                   // for the subject selected
    const [chaptersSelected, setChapterSelected] = useState([]);                   // for the chapter selected                                                             

    return(
        <DataContext.Provider value = {
            {
                value1: [data,setData], 
                value2: [subjectSelected, setSubjectSelected],
                value_chapter: [chaptersSelected,setChapterSelected],
            }} >   
            {props.children}
        </DataContext.Provider>
    )

}

