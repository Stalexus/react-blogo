import { ROUTE } from '../../router/routes';
import { Portal, PortalTarget } from '../Portal';
import { ModalButton, ModalStyled, ModalText, ModalTitle, ModalBackground } from './styles';

interface ModalProps {
    isOpen: boolean;
    handleModal: () => void;
}

export const Modal = ({ isOpen, handleModal }: ModalProps) => {
    return isOpen ? (
        <Portal target={PortalTarget.MODAL}>
            <ModalBackground onClick={handleModal}>
                <ModalStyled>
                    <ModalTitle>Are you registered</ModalTitle>
                    <ModalText>Welcome to Blogologo</ModalText>
                    <ModalButton to={ROUTE.HOME}>Explore</ModalButton>
                </ModalStyled>
            </ModalBackground>
        </Portal >
    ) : null;
};