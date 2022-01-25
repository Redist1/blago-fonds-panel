import { useItemList } from 'app/hooks/useItemList';
import { ListItem } from 'PAGES/Home_page/components/list.item/list.item';

export const AdminkaItems_Contract = () => {
   const { list } = useItemList();
   const _List = list.map((value, i) => {
      <div key={`element_${i}`} className="home-page--wrapper--element" id="home-page--wrapper--element">
         <ListItem index={i} value={value.name} />
         <ListItem index={i} value={value.link1} />
         <ListItem index={i} value={value.link2} />
         <ListItem index={i} value={value.info} />
      </div>;
   });
};