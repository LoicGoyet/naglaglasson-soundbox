import React from 'react';
import useSound from 'use-sound';
import styled from 'styled-components';


const SoundButton = ({children, source, color, ...props}) => {
    const [play, { stop, isPlaying }] = useSound(source);

    const handleMouseDown = () => {
        if (isPlaying) stop();
        return play();
    }

    const rotate = Math.floor(Math.random() * 51) - 25;


    return (
        <Wrapper type="button" {...props} isPlaying={isPlaying} onMouseDown={handleMouseDown} color={color}>
            <Label rotate={rotate}>{children}</Label>
        </Wrapper>
    )
};

export default SoundButton;

const Wrapper = styled.button`
    display: block;
    width: 100%;
    padding-top: 100%;
    border-radius: 0.5rem;
    background-color: ${props => props.isPlaying ? 'deeppink' : props.color};
    border: 0;
    position: relative;
    font-family: fantasy;
    font-weight: bold;
    color: white;
    font-size: 1rem;

    &:focus {
        outline: 0;
    }
`;

const Label = styled.label`
    transform: rotate(${props => props.rotate}deg);
    transition: transform 100ms ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;