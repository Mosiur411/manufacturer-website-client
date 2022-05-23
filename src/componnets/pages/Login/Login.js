import React from 'react';
import { useForm } from 'react-hook-form';
import ReactHelmet from '../../hook/ReactHelmet';
import login from '../../../assets/login.png';
import google from '../../../assets/gogle.png'
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user)
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <ReactHelmet>Login</ReactHelmet>
            <div className='p-5'>
                <div className='md:flex gap-5 justify-around items-center w-full md:h-[80vh] '>
                    <div>
                        <img className=' md:w-[396px] lg:w-[596px] mx-auto' src={login} alt="Login images" />
                    </div>
                    <div class="card w-[326px] md:w-96 bg-base-100 mx-auto shadow-2xl">
                        <div class="card-body">
                            <h1 className='text-center'>Login</h1>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-control w-full max-w-xs">
                                        <label class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input type="email"
                                            placeholder="valid email"
                                            class="input input-bordered w-full max-w-xs"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Not validation  Email'
                                                },
                                            }
                                            )}
                                        />
                                        <label class="label">
                                            {errors.email?.type === 'required' && <span className=' text-red-600'>{errors.email.message}</span>}
                                        </label>
                                    </div>
                                    <div class="form-control w-full max-w-xs">
                                        <label class="label">
                                            <span class="label-text">Password</span>
                                        </label>
                                        <input type="password"
                                            placeholder="your password"
                                            class="input input-bordered w-full max-w-xs"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Not validation  Email'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'your strong password and 6 digit ? '
                                                },

                                            }
                                            )}
                                        />
                                        <label class="label">
                                            {errors.password?.type === 'required' && <span className=' text-red-600'>{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className=' text-red-600'>{errors.password.message}</span>}
                                        </label>
                                        <label class="label mt-[-20px]">
                                            <span class="label-text-alt">Forget</span>
                                            <span class="label-text-alt">Register</span>
                                        </label>
                                    </div>
                                    <input className='form-control w-full max-w-xs btn' type="submit" value='Login' />

                                </form>
                                <button onClick={() =>signInWithGoogle()} class="btn mt-5 w-full btn-outline btn-secondary">
                                    <img className='w-[32px]' src={google} alt="" />
                                    <h1 className='pl-2'>CONTINUE WITH GOOGLE</h1>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;