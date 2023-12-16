import axios from 'axios';
import './../../style/listOfTasks.css'

const ListOfTasks = ({ data, API, setLoad }) => {

    const deleteTask = (id) =>{
        axios.delete(`${API}/${id}`)
            .then((response) => {setLoad(response)})
            .catch((err)=>{console.error(err)})
    }

    const updateTasks = (id) =>{
        axios.patch(`${API}/${id}`,{
            status : false
        })
        .then((response) => {setLoad(response)})
        .catch((err)=>{console.error(err)})
    }

    return (
        <section>
            <ul>
                {data && 
                    data.map((item) =>(
                        <div key={item.id}>
                            <button onClick={()=>updateTasks(item.id)}>Done</button>
                            <li >{item.description}</li>
                            <button onClick={()=>deleteTask(item.id)}>delete</button>
                        </div>
                        ))
                }
            </ul>
        </section>
    );
}

export default ListOfTasks;