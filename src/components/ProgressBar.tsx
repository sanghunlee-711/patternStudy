import React from "react";
import styled from "styled-components";
import { ItemInterface, ItemListInterFace } from "../interface/ItemInterface";

function ProgressBar(props: {
  count: number;
  itemList: number | null | undefined;
}): React.ReactElement {
  return (
    <ProgressBarContainer>
      <ProgressBarWrapper>
        <ProgressBarRange count={props.count}></ProgressBarRange>
      </ProgressBarWrapper>
      <ProgressNum>
        {isNaN(props.count)
          ? 0
          : props.count.toLocaleString(undefined, {
              maximumFractionDigits: 3,
            })}
        %
      </ProgressNum>
    </ProgressBarContainer>
  );
}

const ProgressBarContainer = styled.div`
  position: fixed;
  bottom: 5vh;
  right: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBarWrapper = styled.div`
  margin-left: 10vw;
  min-width: 10vw;
  max-width: 10vw;
  height: 5vh;
  border: 1px solid goldenrod;
  border-radius: 4px;
`;
const ProgressBarRange = styled.div<{ count: number }>`
  transition: all 0.5s ease-in-out;
  background-color: #f7e43b;
  width: ${(props) =>
    props.count === undefined || props.count === null || isNaN(props.count)
      ? 0
      : props.count}%;
  height: 100%;
  border-radius: 4px;

  div {
    transition: all 0.5s ease-in-out;
    color: goldenrod;
    position: absolute;
    padding: 15px 0px 15px 30px;
    margin: auto 0;
  }
  animation-name: chargeShowing;
  animation-duration: 3s;

  @keyframes chargeShowing {
    from {
      background-color: goldenrod;
      width: 100%;
    }
    to {
      background-color: white;
      width: 0;
    }
  }
`;

const ProgressNum = styled.span`
  color: goldenrod;
  text-align: center;
  width: 100%;
  margin-left: 1vw;
`;

export default ProgressBar;
