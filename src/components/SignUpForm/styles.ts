import styled from "styled-components"

export const SignUpStyled = styled.form`
    width: 400px;
    margin: auto;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justyfy-content: center;
    align-items: center;
`;

export const SignUpEmailInput = styled.input`
    width: 544px;
    height: 56px;
    font-size: 17px;
    border: 1px solid rgba(49, 48, 55, 0.1);
    border-radius: 4px;
`;

export const SignUpPasswordInput = styled(SignUpEmailInput)`
`;

export const SignUpLabel = styled.label`
    
`;
