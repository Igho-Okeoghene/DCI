import styled from 'styled-components';

//Styled Component for the unordered list
const UL = styled.ul`
        list-style-type: none;
        display: flex;
        flex-flow: row nowrap;
    li{
        padding: 18px 10px;
    }
    /*Media query of the nav for smaller screens*/
    @media (max-width:768px){
        flex-flow: column nowrap;
        background-color: #0d2538;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

    li{
        color: #fff;
    }
    }
`;
const RightNav = ({open}) => {
    return ( 
        <UL open={open}>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Gallery</li>
            <li>Tutors</li>
        </UL>
     );
}
 
export default RightNav;