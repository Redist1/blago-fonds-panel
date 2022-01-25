/* eslint-disable react/jsx-pascal-case */
import './adminka.page.style.scss';
import { ListBlocks_Contract } from 'PAGES/Home_page/components/modules/list.blocks.contract';
import { Header_ADM_BTN } from './components/header.adm.btns/header.adm.to_home.btn';
import { HeaderWR_Adminka } from './components/wrapper.header/wrapper.header.adm';
import { WrapperItems } from './components/wrapper.wrapper_items/wrapper_items.adm';
import { ModalMenus_Contract } from './modules/modal.menus.contract';

export const ADMINKA_PAGE = () => {
   let { ListBlocks, list } = ListBlocks_Contract({ path: '/adminka' });
   let { ModalMenus } = ModalMenus_Contract({ list });
   return (
      <div className="adminka">
         <div className="adminka--wrapper">
            <HeaderWR_Adminka
               HomeBtn={<Header_ADM_BTN path="/" Label="На главную" />}
               ExitBtn={<Header_ADM_BTN path="/logout" Label="Выйти из админки" />}
            />
            <WrapperItems key={'wrapper-items'} Items={ListBlocks} ModalMenus={ModalMenus} />
         </div>
      </div>
   );
};