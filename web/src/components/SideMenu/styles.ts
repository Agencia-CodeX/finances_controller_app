import styled from "styled-components";

type MenuProps = {
    active?: true;
}

export const Container = styled.div`
    width: 330px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 50px 80px;
`;

export const Logo = styled.img`
    width: 200px;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const Icon = styled.img`
    margin-right: 15px;
    width: 25px;
`;

export const ItemMenu = styled.button<MenuProps>`
    width: 100%;
    display: flex;
    font-size: 1rem;
    align-items: center;
    padding: 15px 5px;
    border-radius: 1rem;
    border: 0;
    background: transparent;
    color: #ffffff;
    opacity: 0.7;
    font-weight: 500;

    transition: all 0.2s;

    &:hover {
        opacity: 1;
    }

    ${property => property.active && `
        padding-left: 30px;
        background: linear-gradient(92.47deg, #7388FF -4.2%, #8714CE 41.65%, #B102CD 83.75%);
        opacity: 1;

        transition: filter 0.2s;

        &:hover {
            opacity: 1;
            font-size: 1rem;

            filter: brightness(0.9);
        }
    `}
`;

export const Logout = styled.div`
    display: flex;
`;

export const Button = styled.button`
    color: #ffffff;
    opacity: 0.7;
    font-weight: 500;
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    padding: 15px;

    transition: all 0.2s;

    &:hover {
        opacity: 0.9;
        font-size: 1.2rem;
        opacity: 1;
    }
`;