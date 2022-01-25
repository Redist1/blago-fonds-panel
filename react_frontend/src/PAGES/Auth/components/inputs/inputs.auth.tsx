import './inputs.style.scss';

export interface I_Inputs_Auth {
   (props: { input_type: 'login' | 'password'; Label: string }): JSX.Element;
}

export const Inputs_Auth: I_Inputs_Auth = ({ input_type, Label }) => {
   let _type = useTypeContract(input_type);
   let end_input_type = `input_type--${input_type}`;
   return (
      <>
         <div className="input_type--label">{Label}</div>
         <input className={end_input_type} name={`${input_type}-input`} type={_type} id={`${input_type}-input`} />
      </>
   );
};

const useTypeContract = (input_type: string) => {
   let _type: 'text' | 'password' = 'text';
   if (input_type === 'login') {
      _type = 'text';
   } else if (input_type === 'password') {
      _type = 'password';
   }
   return _type;
};
