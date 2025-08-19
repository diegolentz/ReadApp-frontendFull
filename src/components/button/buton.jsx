import './buton.css'

export const ButtonApp = ({label,onClick,isCancel}) => {
  return (
    <button type={"submit"} className={`buttonApp ${isCancel ? 'cancel' : 'acept'}`}  onClick={onClick}>
      <span>{label}</span>
    </button>
  );
};
