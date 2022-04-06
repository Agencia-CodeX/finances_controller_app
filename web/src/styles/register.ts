import styled from "styled-components";

export const MainBackgroundRegister = styled.main`
    width: 100%;
    background-image: url("/images/bg_image.png");
    background-size: cover;
    background-repeat: no-repeat;
`;

export const ContentRegister = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    display: flex;

    @media (max-width: 1050px) and (min-height: 1000px) {
        flex-direction: column;
    }

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;
