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

    useEffect(()=>{
        console.log("student list is now LOADED!", studentData);
    }, []);

    return(
        <>
        <div classname="p-2">
            <h3>Student List</h3>
            <table classname="table table-striped table border">
            <thead classname="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
            {studentData.map(student=>(
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                </tr>    
                ))
            }
            </tbody>
            </table>
        
        </div>
        </>
    );
}
export default StudentPage;