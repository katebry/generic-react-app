import styled from 'styled-components'

export interface ResponsiveImageProps {
    src: string
    maxWidth: string
}

export const ResponsiveImage = styled.img<ResponsiveImageProps>`
    width: 100%;
    max-width: ${props => (props.maxWidth ? props.maxWidth : '100%')};
    display: block;
    height: auto;
    flex-shrink: 0;
`