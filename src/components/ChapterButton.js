import React, { useContext, useEffect } from 'react';
import Select from 'react-select';
import { DataContext } from './DataContext';



const Selector = () => {

  const { value1, value2, value_chapter } = useContext(DataContext)

  const [data, setData] = value1;
  const [subjectSelected, setSubjectSelected] = value2;
  const [chaptersSelected, SetChapterSelected] = value_chapter

  var options = [];

  useEffect(function () {


    data.map(function (element) {
      if (element.SubjectName == subjectSelected) {
        options.push({ 'label': element.ChapterName, 'value':element.ChapterName })
      }
    })

  }, [subjectSelected]);


  const AddChapter = (event) => {
    console.log(event)
  }



return (
  <Select
    // onChange={AddChapter}
    options={options}

    isMulti

  />
)
}

export default Selector;