import './boxInput.css'



export const BoxInput = ({ label, value, register}) => {


    return (

        <>
            <div className="container__radiobox">
                <label className="radiobox-input">
                    <input
                        className="event-type-radio"
                        type="checkbox"
                        value={value}
                        {...register}
                    />
                    <span className="keySpan">{label}</span>
                </label>

           
            </div>
        </>

    )



}