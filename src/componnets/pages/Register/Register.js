import React from 'react';
import ReactHelmet from '../../hook/ReactHelmet';
import Signup from '../../../assets/register.png';
import google from '../../../assets/gogle.png'
import { useForm } from 'react-hook-form';
const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit =async data => {
        const image = data?.images[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=d8f126949cd18812585609f4e724582e`, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result?.data){
                const images =result?.data?.url;
                const name=data.name;
                const email=data.email;
                const password=data.password;
                console.log(images,name,email,password)

            }
        })
    };
    return (
        <div className='mb-10'>
            <ReactHelmet>Register</ReactHelmet>
            <div>
                <div className='px-5 py-16'>
                    <div className='md:flex gap-5 justify-around items-center w-full md:h-[80vh] '>
                        <div>
                            <img className=' md:w-[396px] lg:w-[596px] mx-auto' src={Signup} alt="Signup images" />
                        </div>
                        <div class="card w-[326px] md:w-96 bg-base-100 mx-auto shadow-2xl">
                            <div class="card-body">
                                <h1 className='text-center'>Signup</h1>
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="form-control w-full max-w-xs">
                                            <label class="label">
                                                <span class="label-text">Name</span>
                                            </label>
                                            <input type="text"
                                                placeholder="your name"
                                                class="input input-bordered w-full max-w-xs"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: 'your name'
                                                    },
                                                }
                                                )}
                                            />
                                            <label class="label">
                                                {errors.name?.type === 'required' && <span className=' text-red-600'>{errors.name.message}</span>}
                                            </label>
                                        </div>
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
                                        </div>
                                        <div class="form-control w-full max-w-xs">
                                            <label class="label">
                                                <span class="label-text">profile</span>
                                            </label>
                                            <input type="file"

                                                class="input input-bordered w-full max-w-xs"
                                                {...register("images", {
                                                    required: {
                                                        value: true,
                                                        message: 'your photo'
                                                    },
                                                }
                                                )}
                                            />
                                            <label class="label">
                                                {errors.images?.type === 'required' && <span className=' text-red-600'>{errors.images.message}</span>}
                                            </label>
                                        </div>
                                        <input className='form-control w-full max-w-xs btn' type="submit" value='Login' />

                                    </form>
                                    <button class="btn mt-5 w-full btn-outline btn-secondary">
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