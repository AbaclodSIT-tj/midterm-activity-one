import {useEffect} from 'react'
const StudentPage=()=>{
    const studentData=[
 { 
    id: 1, name: 'Abaclod', course: 'BSIT' 
},
  { 
    id: 2, name: 'Bautista', course: 'BSIT' 
},
  { 
    id: 3, name: 'Cruz', course: 'BSIT' 
},
  { 
    id: 4, name: 'Dela Rosa', course: 'BSIT' 
},
  {
    id: 5, name: 'Enriquez', course: 'BSIT' 
},
  { 
    id: 6, name: 'Flores', course: 'BSIT' 
},
  { 
    id: 7, name: 'Gonzales', course: 'BSIT' 
},
  { 
    id: 8, name: 'Hernandez', course: 'BSIT' 
},
  { 
    id: 9, name: 'Ilagan', course: 'BSIT' 
},
  { 
    id: 10, name: 'Javier', course: 'BSIT' 
}
    ];
function students(){
    useEffect(()=>{
        console.log("student list is now LOADED!", studentData);
    }, []);
}
    return(
        <>
        
        </>
    );
}
export default StudentPage;