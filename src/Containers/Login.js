import React from 'react';
import { useGlobalContext } from '../context';

const Login = () => {

    const { name, password, setName, setPassword, setEdame } = useGlobalContext()

    function submitHandler(e) {
        e.preventDefault();

        setEdame(true)
    }

    return (
        <section className='wrapper-login'>
            <div className='login'>
                <header>
                    <h2 className='title-login'>Login User</h2>
                </header>
                <div className='wrapper-login-input'>
                    <div className='input-login'>
                        <label htmlFor="name">UserName</label>
                        <input
                            type="text"
                            required
                            id='name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='input-login'>
                        <label htmlFor="pass">Password</label>
                        <input
                            type="password"
                            required
                            id='pass'
                            name='pass'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='button' className='btn-login' onClick={(e) => submitHandler(e)}>
                        Login
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Login;
