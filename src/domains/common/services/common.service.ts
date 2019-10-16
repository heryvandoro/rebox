import { BaseService } from '@rebox/domains/shared/services/base.service';
import {
	SET_WINDOW_WIDTH,
	TOGGLE_SIDEBAR,
} from '@rebox/domains/common/actions/common.action';

export class CommonService extends BaseService {
	constructor() {
		super();
	}

	public setWindowWidth(width: number) {
		this.dispatch(SET_WINDOW_WIDTH, width);
	}

	public toggleSidebar = () => {
		this.dispatch(TOGGLE_SIDEBAR);
	};
}
