import React, { useContext, useState } from "react";
import  swal  from "sweetalert2";
import { Link } from "react-router-dom";
import '../css/login-register.css';
import { AuthContext } from "../auth/AuthContext";

export const RegisterPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        nombre: ''
    });
    const { register, auth } = useContext(AuthContext);

    const onChange = ({target}) => {
        const {name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const onSubmit = async(ev) => {
        ev.preventDefault();
        const ok = await register(form);
        if (!ok) {
            swal.fire('Error', 'Usuario ya registrado')
        }
    }
    const todoOk = () => {
        return (form.email.length > 0 && form.password.length > 0 ) ? true: false;
    }

    return(
        <div className="limiter">
		    <div className="container-login100">
			    <div className="wrap-login100 p-t-50 p-b-90">
                    <form onSubmit={onSubmit} className="login100-form validate-form flex-sb flex-w">
                        <span className="login100-form-title mb-3">
                            Chat - Registro
                        </span>

                        <div className="wrap-input100 validate-input mb-3">
                            <input onChange={onChange}
                            className="input100" 
                            value={form.nombre}
                            type="text" name="nombre" 
                            placeholder="Nombre" />
                            <span className="focus-input100"></span>
                        </div>

                        
                        <div className="wrap-input100 validate-input mb-3">
                            <input onChange={onChange}
                            className="input100" 
                            type="email" 
                            name="email" 
                            value={form.email}
                            placeholder="Email" />
                            <span className="focus-input100"></span>
                        </div>
                        
                        
                        <div className="wrap-input100 validate-input mb-3">
                            <input onChange={onChange}
                             className="input100" 
                             type="password" 
                             name="password" 
                             value={form.password}
                             placeholder="Password" />
                            <span className="focus-input100"></span>
                        </div>
                        
                        <div className="row mb-3">
                            <div className="col text-right">
                                <Link to="/auth/login" className="txt1">
                                    Ya tienes cuenta?
                                </Link>
                            </div>
                        </div>

                        <div className="container-login100-form-btn m-t-17">
                            <button 
                            type="submit"
                            disabled={!todoOk()}
                            className="login100-form-btn">
                                Crear cuenta
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}