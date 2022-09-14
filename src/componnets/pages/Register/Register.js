import React, { useEffect } from 'react';
import ReactHelmet from '../../hook/ReactHelmet';
import Signup from '../../../assets/register.png';
import google from '../../../assets/gogle.png'
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Spinner from '../../shared/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserToken from '../../shared/UserToken';

const Register = () => {
    /* ======================== auth  =========================  */
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, UPerror] = useUpdateProfile(auth);
    const RegisterProfile = async data => {
        const photoURL = data.images;
        const displayName = data.name;
        const email = data.data;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName, photoURL })
    }
    /* ================== input value   */
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        const image = data?.images[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=d8f126949cd18812585609f4e724582e`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result?.data) {
                    const images = result?.data?.url;
                    const name = data.name;
                    const email = data.email;
                    const password = data.password;
                    if (email && password && images) {
                        RegisterProfile({ data: email, password, images, name })
                    }
                }
            })
    };

    /*  ========================= useNavigate ============ */
    const Navigate = useNavigate()
    const [Token] = UserToken(user || GoogleUser);
    useEffect(() => {
        if (Token) {
            toast.success('Register Your SuccessFully')
            Navigate('/')
        }
    })

    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className='mb-10'>
            <ReactHelmet>Register</ReactHelmet>
            <div>
                <div className='px-5 py-16'>
                    <div className='md:flex gap-5 justify-around items-center w-full   '>
                        <div>
                            <img className=' md:w-[396px] lg:w-[596px] mx-auto rounded-md' src={Signup} alt="Signup images" />
                        </div>
                        <div className="card w-[326px] md:w-96 bg-base-100 mx-auto shadow-2xl">
                            <div className="card-body">
                                <h1 className='text-center text-2xl font-medium'>Signup...</h1>
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text"
                                                placeholder="your name"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: 'your name'
                                                    },
                                                }
                                                )}
                                            />
                                            <label className="label">
                                                {errors.name?.type === 'required' && <span className=' text-red-600'>{errors.name.message}</span>}
                                            </label>
                                        </div>
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
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">profile</span>
                                            </label>
                                            <input type="file"

                                                className="input input-bordered w-full max-w-xs"
                                                {...register("images", {
                                                    required: {
                                                        value: true,
                                                        message: 'your photo'
                                                    },
                                                }
                                                )}
                                            />
                                            <label className="label">
                                                {errors.images?.type === 'required' && <span className=' text-red-600'>{errors.images.message}</span>}
                                            </label>
                                        </div>
                                        <div className="label-text-alt text-lime-400 text-xl font-medium">
                                                <Link to='/login'>Login....</Link>
                                            </div>
                                        <input className='form-control w-full max-w-xs btn' type="submit" value='Register' />

                                    </form>
                                    <button onClick={() => signInWithGoogle()} className="btn mt-5 w-full btn-outline btn-primary">
                                        <img className='w-[32px]' src={google} alt="" />
                                        <h1 className='pl-2'>CONTINUE WITH GOOGLE</h1>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;