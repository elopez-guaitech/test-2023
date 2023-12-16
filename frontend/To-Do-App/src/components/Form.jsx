import axios from 'axios';
import {useRef} from 'react';
import './../../style/form.css'

const Form = ({ API, setLoad }) => {
    const form = useRef(null);

    const createTasks = (description) =>{
        axios.post(`${API}`, {
            description: description
        })
        .then((response) => {setLoad(response)})
        .catch((err)=>console.error(err))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(form.current);
        const record = {
            'description': formData.get('newTasks')
        }
        createTasks(record.description);
    }




    return (
        <section>
            <form ref={form} onSubmit={handleSubmit}>
                <label id="newTasks" htmlFor="">Lista de tareas</label>
                <textarea name="newTasks" id="newTasks" cols="30" rows="10"></textarea>
                <button type="submit">Add</button>
            </form>
        </section>
    );
}

export default Form;