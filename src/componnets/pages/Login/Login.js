import React from 'react';
import { useForm } from 'react-hook-form';
import ReactHelmet from '../../hook/ReactHelmet';
import login from '../../../assets/login.png';
import google from '../../../assets/gogle.png'
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
    /* ================== auth ======================  */
    const [signInWithEmailAndPassword,user,loadingerror,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        if(email && password){
            signInWithEmailAndPassword(email,password)
        }
    };
    const Navigate = useNavigate()
    if (user || GoogleUser) {
        toast(`Hello email Verify code `)
        Navigate('/')
    }
    return (
        <div>
            <ReactHelmet>Login</ReactHelmet>
            <div className='p-5'>
                <div className='md:flex gap-5 justify-around items-center w-full md:h-[80vh] '>
                    <div>
                        <img className=' md:w-[396px] lg:w-[596px] mx-auto' src={login} alt="Login images" />
                    </div>
                    <div className="card w-[326px] md:w-96 bg-base-100 mx-auto shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-center'>Login</h1>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email"
                                            placeholder="valid email"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Not validation  Email'
                                                },
                                            }
                                            )}
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className=' text-red-600'>{errors.email.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password"
                                            placeholder="your password"
                                            className="input input-bordered w-full max-w-xs"
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
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className=' text-red-600'>{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className=' text-red-600'>{errors.password.message}</span>}
                                        </label>
                                        <label className="label mt-[-20px]">
                                            <span className="label-text-alt">Forget</span>
                                            <span className="label-text-alt text-lime-400 font-medium">
                                                <Link to='/register'>Register</Link>
                                            </span>
                                        </label>
                                    </div>
                                    <input className='form-control w-full max-w-xs btn' type="submit" value='Login' />

                                </form>
                                <button onClick={() => signInWithGoogle()} className="btn mt-5 w-full btn-outline btn-secondary">
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