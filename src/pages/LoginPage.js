import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  swal  from "sweetalert2";
import { AuthContext } from "../auth/AuthContext";
import '../css/login-register.css';

export const LoginPage = () => {
    let navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: '',
        rememberme: true
    });
    const { login, auth } = useContext(AuthContext);
    useEffect(() => {
        const remembermeEmial = localStorage.getItem('email');
        if (remembermeEmial) {
            setForm( (form) => ({
                ...form,
                rememberme: true,
                email: remembermeEmial
            }))
        }
    }, [])
    const onChange = ({target}) => {
        const {name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const toggleCheck = () => {
        setForm({
            ...form,
            rememberme: !form.rememberme
        })
    }
    const onSubmit = async(ev) => {
        ev.preventDefault();
        if (form.rememberme) {
            localStorage.setItem('email', form.email);
        } else {
            localStorage.removeItem('email');
        }
        const ok = await login(form);
        if (!ok) {
            swal.fire('Error', 'verifique sus credenciales')
        } else {
            navigate("/chat", { replace: true });
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
                            Chat - Ingreso
                        </span>
                        
                        <div className="wrap-input100 validate-input mb-3">
                            <input 
                            onChange={onChange}
                            value={form.email}
                            className="input100" 
                            type="email" name="email" 
                            placeholder="Email" />
                            <span className="focus-input100"></span>
                        </div>
                        
                        
                        <div className="wrap-input100 validate-input mb-3">
                            <input 
                            onChange={onChange}
                            value={form.password}
                            className="input100" 
                            type="password" 
                            name="password" 
                            placeholder="Password" />
                            <span className="focus-input100"></span>
                        </div>
                        
                        <div className="row mb-3">
                            <div className="col"
                                onClick={() => toggleCheck()}>
                                <input 
                                readOnly
                                checked={form.rememberme}
                                className="input-checkbox100" 
                                id="ckb1" type="checkbox" 
                                name="rememberme" />
                                <label className="label-checkbox100">
                                    Recordarme
                                </label>
                            </div>

                            <div className="col text-right">
                                <Link  to="/auth/register" className="txt1">
                                    Nueva cuenta?
                                </Link>
                            </div>
                        </div>

                        <div className="container-login100-form-btn m-t-17">
                            <button 
                            type="submit"
                            disabled={!todoOk()}
                                className="login100-form-btn">
                                Ingresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}