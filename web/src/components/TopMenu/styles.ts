import styled from "styled-components";
import { User } from "phosphor-react";

export const Container = styled.div`
    width: calc(100% - 330px);
    margin-left: 330px;
    margin-top: 50px;
    padding: 0 50px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;
export const Greetings = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Text = styled.h1`
    color: var(--white);
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2.7rem;
`;
export const UserInfo = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;
export const NickName = styled.p`
    color: var(--white);
    opacity: 0.9;
    font-size: 1.3rem;
`;
export const AvatarContainer = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: #DDDDDD;
    overflow: hidden;
`;

export const Avatar = styled.img`
    width: 100%;
`;

export const AvatarIcon = styled(User)`
    width: 2rem;
    height: 2rem;
    color: var(--black);
`;