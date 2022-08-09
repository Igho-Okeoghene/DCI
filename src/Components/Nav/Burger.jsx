import styled from "styled-components";
import {useState} from 'react';
import RightNav from "./RightNav";

//styling for Burger
const Hamburger = styled.div `
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;

    @media (max-width:768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div{
        width: 2rem;
        height: 0.25rem;
        /*When the burger is clicked, it should change colour to a lighter shade */
        background-color: ${({open}) => open ? "#ccc": "#333"};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

    &:nth-child(1){
        transform: ${({open}) => open ? 'rotate(45deg)': 'rotate(0)'};
    }

    &:nth-child(2){
        transform: ${({open}) => open ? 'translateX(100%)': 'translateX(0)'};
        opacity: ${({open}) => open ? 0 : 1};
    }

    &:nth-child(3){
        transform: ${({open}) => open ? 'rotate(-45deg)': 'rotate(0)'};
    }
}
`;
const Burger = () => {
    /** This is to set the burger to close by default */
    const [open, SetOpen] = useState(false)

    return ( 
        <>
        {/*The function below is to set open to true onClick */}
        <Hamburger open={open} onClick = {() => SetOpen(!open)}>
            <div />
            <div />
            <div />
        </Hamburger>
        <RightNav open={open} />
        </>
     );
}
 
export default Burger;