import { BaseService } from '@rebox/domains/shared/services/base.service';
import { TOGGLE_SIDEBAR } from '@rebox/domains/common/actions/common.action';

export class CommonService extends BaseService {
	constructor() {
		super();
	}

	public toggleSidebar = () => {
		this.dispatch(TOGGLE_SIDEBAR);
	};
}
