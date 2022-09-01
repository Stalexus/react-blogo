import { ROUTE } from '../../router/routes';
import { Portal, PortalTarget } from '../Portal';
import { ModalButton, ModalStyled, ModalHeader, ModalText, ModalTitle, StyledSpan } from './styles';

interface ModalProps {
    isOpen: boolean;
    handleModal: () => void;
}

export const Modal = ({ isOpen, handleModal }: ModalProps) => {
    return isOpen ? (
        <Portal target={PortalTarget.MODAL}>
            <div
                className="modal d-flex justify-content-center align-items-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                onClick={handleModal}
            >
                <ModalStyled>
                    <ModalHeader>
                        <ModalTitle>Are you registered</ModalTitle>
                    </ModalHeader>
                    <ModalText>Welcome to Blogogog</ModalText>
                    <ModalButton to={ROUTE.HOME} className="btn btn-primary">
                        Explore
                    </ModalButton>
                </ModalStyled>
            </div>
        </Portal>
    ) : null;
};