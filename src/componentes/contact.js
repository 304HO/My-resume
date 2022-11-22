import React from "react";
import styled from "styled-components";
import Tags from "./tag";

const Contact = ({ contactRef }) => {
  const info = [
    { img: "user", lable: "이름", value: "제경모" },
    { img: "phone", lable: "연락처", value: "010-4165-7579" },
    { img: "email", lable: "이메일", value: "lonnie4165@gmail.com" },
  ];

  return (
    <RootContainer ref={contactRef}>
      <ContactTitle>Contact</ContactTitle>
      <InfoContainer>
        {info.map((el, i) => {
          return (
            <Tags key={i} img={el.img} lable={el.lable} value={el.value} />
          );
        })}
      </InfoContainer>

      <ContactForm
        method="POST"
        data-email="lonnie4165@gmail.com"
        action="https://script.google.com/macros/s/AKfycbzydGQl7shfvdwTCXvflyeR1m50Fsuy0mx-dK6wivLywc8EAT6ja72O1XDIQHdJ2NLCdw/exec"
      >
        <div>
          <div>
            <InputTitle>* 이름</InputTitle>
            <InputBox name="name" placeholder="이름을 입력하세요." />
          </div>

          <div>
            <InputTitle>* Phone</InputTitle>
            <InputBox
              name="phone"
              type="tel"
              placeholder="전화번호를 입력하세요."
            />
          </div>

          <div>
            <InputTitle>* Email</InputTitle>
            <InputBox
              name="email"
              type="email"
              placeholder="사용자의 이메일을 입력하세요."
            />
          </div>

          <div>
            <div>Message</div>
            <TextArea
              name="message"
              rows="10"
              placeholder="메세지를 입력해주세요."
            />
          </div>

          <Button>이메일 전송하기</Button>
        </div>
      </ContactForm>
    </RootContainer>
  );
};

export default Contact;

const InfoContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1000px;
  width: 100%;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: 10em;
  height: 4em;
  background-color: rgb(46, 142, 255);
  color: white;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 0px;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 5rem;
  height: auto;
  font-size: 15px;
  margin-bottom: 1.5rem;
  resize: none;
`;

const InputBox = styled.input`
  width: 100%;
  height: 2.3rem;
  font-size: 15px;
  margin-bottom: 1rem;
`;

const InputTitle = styled.div`
  font-size: 1.2rem;
`;

const ContactForm = styled.form`
  padding: 0 2rem;
  background-color: white;
  width: 30rem;
`;

const ContactTitle = styled.h1`
  color: black;
  border-bottom: 1px solid rgb(204, 204, 204);
  line-height: 1.5;
`;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 4rem 4rem;
`;
