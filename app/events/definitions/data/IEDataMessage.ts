import { IUser } from '../IUser';

export enum EventMessageTypeDescriptor {
	MESSAGE = 'msg', // regular message
	MESSAGE_PINNED = 'message_pinned', // item for demonstrate when a message was pinned at the channel
}

export interface IEDataMessage {
	t: EventMessageTypeDescriptor;
	u: IUser;
	msg: string;
	_msgSha: string;
	mentions?: Array<string>;
	channels?: Array<string>;
	reactions?: Array<object>;
	drid?: string;
	file?: {
		_id: string;
		name: string;
		type: string;
	};
	pinned?: Array<object>;
	starred?: Array<object>;
	deleted?: boolean;
}
