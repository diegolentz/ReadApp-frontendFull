import { useForm } from 'react-hook-form';
import { InputApp } from '../../components/input/input';
import './login.css';
import { ButtonApp } from '../../components/button/buton';
import { loginService } from '../../services/loginService';

export const Login = () => {
  const { register, handleSubmit, getValues, formState: { errors }, reset } = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = async () => {
    try {
      const values = getValues();
      const res = await loginService.login(values);
      if (res) {
        sessionStorage.setItem('user', JSON.stringify(res));
      } 
    } catch (error) {
      console.error(error.message);
    }
    reset();
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