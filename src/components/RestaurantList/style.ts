import styled from "styled-components";
import { colors } from "../../app/style";

export const RestaurantListContainer = styled.section`
background-color: ${colors.cream};
width: 100%;

& > div {
    padding-top: 80px;
    padding-bottom: 120px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 80px;
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;

}
`;
