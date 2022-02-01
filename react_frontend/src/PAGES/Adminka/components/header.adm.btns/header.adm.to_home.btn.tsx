import './header.adm.to_home.btn.style.scss';
import { API, MAIN_PATHES } from '_consts';

export interface IHeader_ADM_BTN {
   (props: { Label: string; path: keyof typeof API | keyof typeof MAIN_PATHES }): JSX.Element;
}

export const Header_ADM_BTN: IHeader_ADM_BTN = ({ Label, path }) => {
   return (
      <>
         <div
            onClick={() => {
               document.location.href = path;
            }}
            children={<div>{Label}</div>}
            className="adm-header-home_btn"
         />
      </>
   );
};
