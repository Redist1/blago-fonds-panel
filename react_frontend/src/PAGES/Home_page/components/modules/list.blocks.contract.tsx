import { useItemList } from 'app/hooks/useItemList';
import { ListItem } from '../list.item/list.item';

export const ListBlocks_Contract = () => {
   const { list } = useItemList();

   let ListBlocks: JSX.Element[] = list.map((value, i) => {
      return (
         <div key={`element_${i}`} className="home-page--wrapper--element" id="home-page--wrapper--element">
            <ListItem index={i} value={value.name} />
            <ListItem index={i} value={value.link1} />
            <ListItem index={i} value={value.link2} />
            <ListItem index={i} value={value.info} />
         </div>
      );
   });

   return { ListBlocks };
};
