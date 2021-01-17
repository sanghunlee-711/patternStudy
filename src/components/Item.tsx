import React from "react";
import styled from "styled-components";
import { ItemInterface, ItemListInterFace } from "../interface/ItemInterface";

function Item(props: {
  item: ItemInterface;
  itemList: ItemListInterFace;
  deleteFunc: (id: number) => void;
  modifyFunc: (id: number) => void;
  doneFunc: (
    id: number,
    value: string | undefined,
    changeValue: string
  ) => void;
  changeValue: string;
  modifyInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  todoCheck: (id: number, todoChecking: boolean | undefined) => void;
}): React.ReactElement {
  return (
    <ListWrapper>
      {props.itemList?.map((el: ItemInterface, index) => {
        return (
          <li key={`thisKey${el.id + index}`}>
            <input
              type="checkbox"
              onClick={() => props.todoCheck(el.id, el.todoChecking)}
            />
            <ListCheck forlining={el.todoChecking}>
              <span>{el.title}</span>
              {el.check ? (
                <input
                  type="text"
                  value={
                    props.changeValue.length > 0
                      ? props.changeValue
                      : el.typedValue
                  }
                  onChange={(e) => props.modifyInput(e)}
                />
              ) : (
                <span>{el.typedValue}</span>
              )}
              {el.check ? (
                <button
                  onClick={() =>
                    props.doneFunc(el.id, el.typedValue, props.changeValue)
                  }
                >
                  DONE
                </button>
              ) : (
                <button onClick={() => props.modifyFunc(el.id)}>MODIFY</button>
              )}
              <button onClick={() => props.deleteFunc(el.id)}>DELETE</button>
            </ListCheck>
          </li>
        );
      })}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  background-color: red;
`;

const ListCheck = styled.div<{ forlining: boolean | undefined }>`
  background-color: ${(props) => (props.forlining ? "blue" : "black")};
`;

export default Item;
