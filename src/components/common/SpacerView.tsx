import styled from 'styled-components/native';

interface SpacerProps {
  height: string;
}

export const Spacer = styled.View<SpacerProps>`
  height: ${props => props.height};
`;
