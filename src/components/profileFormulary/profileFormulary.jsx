import React, { useEffect } from "react";
import './profileFormulary.css';
import { InputApp } from "../../components/input/input";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { userService } from "../../services/userService";

export const ProfileFormulary = ({ data }) => {
    const userId = sessionStorage.getItem("user");

    const { register, formState: { errors }, reset, handleSubmit } = useForm({
        mode: 'all',
        defaultValues: {
            username: '',
            email: '',
            adress: '',
            phone: '',
            birthdate: ''
        }
    });

    // 🔹 Cuando llega la data desde el padre, actualizamos el formulario
    useEffect(() => {
        if (data) {
            reset({
                username: data.username || '',
                email: data.email || '',
                adress: data.adress || '',
                phone: data.phone || '',
                birthdate: data.birthdate || ''
            });
        }
    }, [data, reset]);

    const onSubmit = async (formData) => {
        console.log("Valores del formulario:", formData);
        await userService.updateUserData(userId, formData);
    }

    return (
        <section className="dataUser">
            <form className="formularyProfile" onSubmit={handleSubmit(onSubmit)}>
                <div className="sectionData">
                    <InputApp
                        label="Usuario"
                        type="text"
                        register={register('username', { required: 'El usuario es obligatorio' })}
                        readonly={false}
                        error={errors.username?.message}
                    />
                    <InputApp
                        label="Email"
                        type="email"
                        register={register('email', { required: 'El email es obligatorio' })}
                        readonly={false}
                        error={errors.email?.message}
                    />
                    <InputApp
                        label="Teléfono"
                        type="text"
                        register={register('phone', { required: 'El teléfono es obligatorio' })}
                        readonly={false}
                        error={errors.phone?.message}
                    />
                    <InputApp
                        label="Cumpleaños"
                        type="date"
                        register={register('birthdate', { required: 'La fecha de cumpleaños es obligatoria' })}
                        readonly={false}
                        error={errors.birthdate?.message}
                    />
                    <InputApp
                        label="Dirección"
                        type="text"
                        register={register('adress', { required: 'La dirección es obligatoria' })}
                        readonly={false}
                        error={errors.adress?.message}
                    />
                </div>

                <div className="buttonsProfile">
                    <Button variant="contained" color="error" size="large" type="button">
                        Cancelar
                    </Button>
                    <Button variant="contained" color="success" size="large" type="submit">
                        Aplicar
                    </Button>
                </div>
            </form>
        </section>
    );
};
