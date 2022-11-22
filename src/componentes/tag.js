import React from "react";
import styled from "styled-components";
import { FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Tags = ({ img, lable, value }) => {
  return (
    <RootContainer>
      <Icon>
        {img === "user" ? (
          <FaUser size={50} />
        ) : img === "phone" ? (
          <FaPhoneAlt size={50} />
        ) : img === "email" ? (
          <FaEnvelope size={50} />
        ) : (
          ``
        )}
      </Icon>
      <div>
        <Lable>{lable}</Lable>
        <Value>{value}</Value>
      </div>
    </RootContainer>
  );
};

export default Tags;

const Value = styled.div`
  font-size: 1rem;
`;

const Lable = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Icon = styled.div`
  padding-right: 1rem;
`;

const RootContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  width: 100%;
`;
