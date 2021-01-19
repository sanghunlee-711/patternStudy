import React from "react";
import Item from "./components/Item";
import ProgressBar from "./components/ProgressBar";
import { useState, useEffect, useCallback } from "react";
import api from "./utility/api";
import styled from "styled-components";
import { ItemInterface, ItemListInterFace } from "./interface/ItemInterface";

//Observer Pattern 적용
function ToDo(): React.ReactElement {
  const [item, setItemInput] = useState<ItemInterface>({
    title: "",
    typedValue: "",
    id: 0,
    check: false,
  });
  const [itemList, setItemList] = useState<ItemListInterFace>([]);
  const [text, setText] = useState<string>("");
  const [changeValue, setChangeValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // call data.json and setState Session
    let dataDir = "./data/data.json";
    api(dataDir)
      .then((res) => {
        setItemList(
          res?.map((el) => ({ ...el, check: false, todoCheck: false }))
        );
      })
      .catch((error) => {
        console.log("Have Error in UseEffect", error);
      });
  }, []);

  useEffect(() => {
    todoCount(itemList);
  }, [itemList]);

  const makeNew = (text: string) => {
    setItemList(
      itemList?.concat({
        title: `sample${itemList.length + 1}`,
        typedValue: text,
        id: itemList.length + 1,
        check: false,
        todoChecking: false,
      })
    );
    setText("");
  };

  const deleteFunc = (id: number) => {
    setItemList(itemList?.filter((el: ItemInterface) => el.id !== id));
  };

  const modifyFunc = (id: number, value: string) => {
    setChangeValue(value);
    setItemList(
      itemList?.map((el) =>
        el.id === id
          ? {
              ...el,
              check: true,
            }
          : el
      )
    );
  };

  const modifyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (String(name) === "modify") {
      setChangeValue(value);
    } else if (String(name) === "make") {
      setText(value);
    }
  };

  const doneFunc = (id: number, value: string, changeValue: string) => {
    setItemList(
      itemList?.map((el) =>
        el.id === id
          ? {
              ...el,
              typedValue: changeValue.length > 0 ? changeValue : el.typedValue,
              check: false,
            }
          : el
      )
    );
    setChangeValue("");
  };

  const todoCheck = (id: number, todoChecking: boolean | undefined) => {
    if (todoChecking) {
      setItemList(
        itemList?.map((el) =>
          el.id === id
            ? {
                ...el,
                todoChecking: false,
              }
            : el
        )
      );
    } else {
      setItemList(
        itemList?.map((el) =>
          el.id === id
            ? {
                ...el,
                todoChecking: true,
              }
            : el
        )
      );
    }
  };

  const todoCount = (itemList: ItemListInterFace) => {
    let doCount = 0;
    let doLen = itemList?.length !== undefined ? itemList.length : 1;
    itemList?.forEach((el) =>
      el.todoChecking ? (doCount = doCount + 1) : doCount
    );
    setCount((doCount / doLen) * 100);
  };

  return (
    <TodoContainer>
      <TodoWrapper>
        <TitleWrapper>
          <Title>TODOLIST</Title>
        </TitleWrapper>
        <InputWrapper>
          <input
            name="make"
            type="text"
            value={text}
            onChange={(e) => modifyInput(e)}
          />
          <i
            className="fas fa-plus-square fa-3x"
            onClick={() => makeNew(text)}
          ></i>
        </InputWrapper>
        <Item
          item={item}
          itemList={itemList}
          deleteFunc={deleteFunc}
          modifyFunc={modifyFunc}
          doneFunc={doneFunc}
          changeValue={changeValue}
          modifyInput={modifyInput}
          todoCheck={todoCheck}
        />
        <ProgressBar count={count} itemList={itemList?.length} />
      </TodoWrapper>
    </TodoContainer>
  );
}

const TodoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #489cc1;
  width: 100vw;
  height: 100vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TodoWrapper = styled.div`
  position: static;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #ffff;
  width: 60vw;
  height: 70vh;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 70%;
    height: 40px;
    margin-left: 10px;
    border: 1px solid goldenrod;
  }
  i {
    margin-left: 10px;
    /* background-color: #f7f7f7; */
    color: #489cc1;
  }
`;

const Title = styled.span`
  color: #525e65;
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
  /* position: absolute; */
  animation-duration: 3s;
  animation-name: slideIn;

  @keyframes slideIn {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

export default ToDo;
