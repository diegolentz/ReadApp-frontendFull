import React from "react";
import { useForm } from 'react-hook-form';
import { ButtonApp } from '../../components/button/buton';
import { InputApp } from '../../components/input/input';
import { loginService } from '../../services/loginService';
import './login.css';
import { useToast } from "../../context/toast/toastContext";


export const Login = () => {
  const { register, getValues, reset, formState: { errors }, handleSubmit } = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const { open } = useToast();

  const onSubmit = async () => {

    try {
      const values = getValues();
      const res = await loginService.login(values);
      if (res) {
        sessionStorage.setItem('user', JSON.stringify(res.id));
        sessionStorage.setItem('name', JSON.stringify(res.name));
        sessionStorage.setItem('lastname', JSON.stringify(res.lastname));
        sessionStorage.setItem('img', JSON.stringify(res.img));

        open('Iniciando sesión', "success");
        reset();
      }

    } catch (error) {
      reset();

      console.log('Login error:', error);
      open(error.response.data.message, "error");
    }
  };

  return (
    <div className="loginView">
      <div className="loginContainer">
        <h1 className="loginTitle">Read App</h1>
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <InputApp
            label="Usuario"
            type="text"
            register={register('username', { required: 'El usuario es obligatorio' })}
            readonly={false}
            error={errors.username?.message}
          />
          <InputApp
            label="Contraseña"
            type="password"
            register={register('password', { required: 'La contraseña es obligatoria' })}
            readonly={false}
            error={errors.password?.message}
          />
          <ButtonApp label="Ingresar" isCancel={false} onClick={() => { }} />
        </form>
      </div>
    </div>
  );
};