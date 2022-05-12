import styled from "styled-components";

export const MainBackground = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    background-image: url("/images/bg_image.png");
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;