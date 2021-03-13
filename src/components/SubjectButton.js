import React, { useContext, useEffect } from 'react';
import Select from 'react-select';
import { DataContext } from './DataContext';


const SubjectButton = () => {

  const {value1,value2} = useContext(DataContext)

  const [data,setData] = value1;
  const [subjectSelected,setSubjectSelected] = value2;
  
  var options = []


  data.map(function (element) {
      
        options.push({ 'label': element.SubjectName })
  }
  )

  const selectSubject = (event) => {
    
      setSubjectSelected((event.label))
       
      
  }

  

  return (
   
    <Select
    onChange =  {selectSubject}
        
      options={options}


    />
  )
}

export default SubjectButton;