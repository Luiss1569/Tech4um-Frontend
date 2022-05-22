import styled from "styled-components";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export const Avatar = styled(AvatarPrimitive.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: ${(props) => props.size || 40}px;
  height: ${(props) => props.size || 40}px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.primaryDark};
  *{
    color: ${(props) => props.theme.colors.background};
  }
`;

export const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
`;
