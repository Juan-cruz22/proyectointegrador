import { useState } from 'react';
import valdation from '../Validation';
import style from './Form.module.css';

const Form = (props) => {
    const { login } = props;

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setErrors(valdation({ ...userData, [event.target.name]: event.target.value }));
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <div  className={style.container}>
            <form onSubmit={handleSubmit}>
                <div className={style.Email}>
                    <input className={style.inputEmail} name='email' type="text" placeholder="Email" value={userData.email} onChange={handleChange} />
                    {errors.email1 ? (
                        <p>{errors.email1}</p>
                    ) : errors.email2 ? (
                        <p>{errors.email2}</p>
                    ) : (
                        <p>{errors.email3}</p>
                    )}
                </div>
                <div className={style.Password}>
                    <input className={style.impotPassword} name='password' type="password" placeholder="Password" value={userData.password} onChange={handleChange} />
                    {errors.password1 ? (
                        <p>{errors.password1}</p>
                    ) : (
                        <p>{errors.password2}</p>
                    )}
                </div>
                <button className={style.Enviar} type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Form;
