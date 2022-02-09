import { API, MAIN_PATHES } from 'api/consts';
import './header.btn.style.scss';
import './dropdown.btn.style.scss';

type _path = keyof typeof MAIN_PATHES | keyof typeof API;

// type drop_el = [dropdown_el: { click_action: () => void; label: string }];

interface IBTN {
	(props: {
		label: string;
		// path: _path;
		dropdown_list: {
			click_action: () => void;
			label: string;
		}[];
		favorite_count?: number | string;
	}): JSX.Element;
}

export const BTN: IBTN = ({ label, dropdown_list, favorite_count }) => {
	return (
		<>
			<div className="dropdown">
				<button
					// onClick={() => {
					// 	!dropdown && ();
					// }}
					className="header-btn dropbtn"
					children={
						<div>
							<div>{label}</div>
							{favorite_count && <div className="header-btn--fav_count_color">{favorite_count}</div>}
						</div>
					}
				/>
				{dropdown_list && (
					<div className="dropdown-content">
						{/* {dropdown_list.map(({ click_action: click_action, label }) => {
							return <a onClick={click_action}>{label}</a>;
						})} */}
						{/* <a href={path}>Выйти</a> */}
					</div>
				)}
			</div>
		</>
	);
};
