import styled from "styled-components";
import { colors } from "../../style";

export const ModalBackdrop = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 4;
    width: 100vw;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    justify-content: flex-start;
    align-items: center;
    padding-top: 10%;

    
    div {
        position: sticky;
        top: 25%;
        display: flex;
        flex-direction: row;
        max-width: 1024px;
        padding: 32px;
        background-color: ${colors.vermillion};
        align-items: flex-start;
        gap:24px;

        img {
            width: 280px;
            height: 280px;
            object-fit: cover;
        }

        div {
            display: flex;
            flex-direction: column;

            justify-content: space-between;

            padding: 0px;
            gap:16px;
            height: 100%;
            max-height: 280px;

            div {
                display: flex;
                flex-direction: column;
                gap:16px;
                padding: 0px;
                justify-content: flex-start;
    
                span {
                    color: #FFF;
                    font-weight: 900;
                    font-size: 18px;
                }
    
                p {
                    font-size: 14px;
                    color: #FFF;
                    line-height: 22px;
                }
    
                
            }
            button {
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${colors.vermillion};
                background-color: ${colors.pale};
                border-width: 0px;
                width: fit-content;
                padding: 8px;
                font-weight: 700;
            }
        }

    }
`

