import styled from "styled-components";
import { colors } from "../../style";

export const RestaurantDishesContainer = styled.div`
    display: flex;
        flex-direction: column;
        width: 100%;

    .restaurant-banner {
        display: flex;
        flex-direction: column;
        min-height: 280px;
        background-size: cover;
        background-repeat: no-repeat;
        justify-content: center;
        align-items: center;
        position: relative;

        .backdrop {
            position: absolute;
            width: 100%;
            min-height: 280px;
            /* backdrop-filter: grayscale(50%); */
            background-color: rgba( 0, 0, 0, 0.5 );
            max-width: 100%;
            z-index: 1;
        }
        
        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 280px;
            max-width: 1024px;
            width: 100%;
            padding: 24px 0;
            z-index: 2;


            .restaurant-category {
                font-size: 32px;
                font-weight: 100;
                color: #FFF
            }

            .restaurant-name {
                font-size: 32px;
                font-weight: 900;
                color: #FFF
            }
        }
    }

    .dishes-list-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        background-color: ${colors.cream};

        
        .dishes-list {
            display: flex;
            flex-direction: row;
            max-width: 1024px;
            padding-top: 60px;
            padding-bottom: 120px;
            gap: 32px;
            flex-wrap: wrap;

        }
    }
`