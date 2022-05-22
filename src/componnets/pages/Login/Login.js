import React from 'react';
import { useForm } from 'react-hook-form';
import ReactHelmet from '../../hook/ReactHelmet';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <ReactHelmet>Login</ReactHelmet>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs"
                         {...register("email"),{
                             
                         }
                        
                        
                        }/>
                        <label class="label">
                            <span class="label-text-alt"></span>
                        </label>
                    </div>

                    <input className='btn' type="submit" value='Login' />
                </form>
            </div>

        </div>
    );
};

export default Login;