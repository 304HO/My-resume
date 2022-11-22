import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const ImgSlider = ({ img }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <RootContainer>
      <StyledSlider {...settings}>
        {img.map((el, i) => {
          return <ImgContainer src={el} key={i} alt={i} />;
        })}
      </StyledSlider>
    </RootContainer>
  );
};

export default ImgSlider;

const ImgContainer = styled.img`
  object-fit: scale-down;
  height: 30rem;
`;

const StyledSlider = styled(Slider)`
  width: 50vw;
  margin: 0 auto;
`;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
