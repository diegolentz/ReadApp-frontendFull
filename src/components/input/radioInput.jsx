import './radioInput.css'



export const RadioInput = ({ label, register, helper}) => {
    return (
        <>
            <div className='container__radiobox' style={{ animationDelay: `${helper * 0.3}s` }}>
                <label className="radiobox-input">
                    <input className="event-type-radio"
                        type="radio"
                        value={label}
                        {...register}
                    />
                    <span className="keySpan">{label}</span>
                </label>
           </div>
            
        </>
    )

}