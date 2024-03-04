import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Student = () => {
    const params = useParams()
    const [student, setStudent] = useState({})
    console.log(params.id)
    const getStudent = () => {
        axios(`http${params.id}`)
            .then(({data}) => setStudent(data[0]))
            .catch((err) => alert(err))
    }
    useEffect(() => {
        getStudent(params.id)
    }, [params])
    console.log(student)
  return (
    <section className={'student'}>
        <div className='container'>
            <p>
            {
                student.name
            }
            </p>
            <p>
                contact: {student.contact}
            </p>
        </div>
    </section>
  )
}

export default Student  