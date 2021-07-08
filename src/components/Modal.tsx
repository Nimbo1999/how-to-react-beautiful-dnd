import { FC } from 'react';
import ReactModal, { Props } from 'react-modal';

const ModalComponent: FC<Props> = ({ children, ...modalProps }) => (
	<ReactModal
		{...modalProps}
		overlayClassName="ReactModalOverlayOverride"
		className="ReactModalContentOverride"
		closeTimeoutMS={400}
		ariaHideApp={false}
	>
		{children}
	</ReactModal>
);

export default ModalComponent;
