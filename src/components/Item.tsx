import React from "react";
import styled from "styled-components";
import { ItemInterface, ItemListInterFace } from "../interface/ItemInterface";

function Item(props: {
  item: ItemInterface;
  itemList: ItemListInterFace;
  deleteFunc: (id: number) => void;
  modifyFunc: (id: number, value: string) => void;
  doneFunc: (id: number, value: string, changeValue: string) => void;
  changeValue: string;
  modifyInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  todoCheck: (id: number, todoChecking: boolean | undefined) => void;
}): React.ReactElement {
  return (
    <ListWrapper>
      {props.itemList?.map((el: ItemInterface, index) => {
        return (
          <EachList key={`thisKey${el.id + index}`}>
            <ListCheck forlining={el.todoChecking}>
              <TitleAndChekcWrapper>
                <div onClick={() => props.todoCheck(el.id, el.todoChecking)}>
                  {el.todoChecking ? (
                    <i className="far fa-check-square"></i>
                  ) : (
                    <i className="far fa-square"></i>
                  )}
                </div>
                {el.check ? (
                  <input
                    type="text"
                    name="modify"
                    value={
                      // props.changeValue.length > 0
                      //   ? props.changeValue
                      //   : el.typedValue
                      props.changeValue
                    }
                    onChange={(e) => props.modifyInput(e)}
                  />
                ) : (
                  <span>{el.typedValue}</span>
                )}
              </TitleAndChekcWrapper>
              <ButtonWrapper forlining={el.todoChecking}>
                {el.check ? (
                  <button
                    onClick={() =>
                      props.doneFunc(el.id, el.typedValue, props.changeValue)
                    }
                  >
                    <i className="fas fa-check-circle"></i>
                  </button>
                ) : (
                  <button
                    name="done"
                    onClick={() => props.modifyFunc(el.id, el.typedValue)}
                  >
                    <i className="fas fa-pen"></i>
                  </button>
                )}
                <button name="delete" onClick={() => props.deleteFunc(el.id)}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </ButtonWrapper>
            </ListCheck>
          </EachList>
        );
      })}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: spac;
  align-items: center;
  padding: 0;

  button {
    background-color: white;
    border: none;
  }
`;

const ButtonWrapper = styled.div<{ forlining: boolean | undefined }>`
  margin-right: 10px;

  button {
    background-color: ${(props) => (props.forlining ? "whitesmoke" : "white")};
  }
`;

const TitleAndChekcWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  input {
    margin-left: 10px;
  }
  span {
    margin-left: 10px;
  }
`;

const ListCheck = styled.div<{ forlining: boolean | undefined }>`
  background-color: ${(props) => (props.forlining ? "whitesmoke" : "white")};
  text-decoration: ${(props) => (props.forlining ? "line-through" : "none")};

  display: flex;
  justify-content: space-between;

  padding: 10px;
`;

const EachList = styled.li`
  width: 100%;
  /* padding: 20px 0; */
  border-top: 1px solid black;
  color: #489cc1;

  &:nth-child(odd) {
    border-top: 1px solid #f7f7f7;
    border-bottom: 1px solid #f7f7f7;
  }
  &:nth-child(even) {
    border-top: none;
    border-bottom: 1px solid #f7f7f7;
  }
`;

export default Item;
