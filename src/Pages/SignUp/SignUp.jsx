import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";



const SignUp = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

const navigate = useNavigate();
  const onSubmit = data => {

    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        .then( () => {

const saveUser = {name:data.name, email:data.email}

           fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
           })

           .then(res =>res.json())
           .then(data => {
            if(data.insertedId){
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created Successfully.",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/');
    
            }
           })

          
        })
        .catch(error => console.log(error))

      })


  };
  return (
    <>
      
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="ml-4 text-5xl text-blue-800 font-bold text-center">Please Sign Up!</h1>

          </div>
          <div className="card  ml-0 w-[600px] border border-purple-700 m-20 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body  ">
              <div className="form-control">
                <label className="label -mt-4">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered w-80 " required />
                {errors.name && <span>Name is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered w-80" required />
                {errors.photoURL && <span>Photo URL is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", {
                  required: true
                })} name="email" placeholder="email" className="input input-bordered w-80" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  minLength: 8,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/
                })} placeholder="password" className="input input-bordered w-80" required />
                {/* {errors.password && <span className="text-red-700">Password should must be at least 6 to 20 characters.</span>} */}

                {errors.password?.type === 'minLength' && <p
                  className="text-red-700">Password should must ai least 8 characters</p>}
                {errors.password?.type === 'maxLength' && <p
                  className="text-red-700">Password can not be more than 20 characters</p>}
                {errors.password?.type === 'pattern' && <p
                  className="text-red-700">Password must need minimum one upper case one lower case , one number and one special character</p>}



<div className="form-control my-6">
       
       {/* <button >Sign Up</button> */}
<input className="btn btn-primary  w-80 " type="submit" value="Sign Up" />
     </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover"></a>
                </label>
              </div>
             

            </form>
            <p className=" -mt-2 ml-8 mb-4"><small>Already Have an Account?<Link className="text-blue-600" to="/login">Please Login</Link>  </small></p>
{/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>

    </>
  );
};

export default SignUp;