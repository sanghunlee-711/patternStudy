import React from "react";
import Item from "./components/Item";
import { useState, useEffect } from "react";
import api from "./utility/api";
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

  const checkfunction = () => {};

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

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

  const modifyFunc = (id: number) => {
    console.log(id);
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
    setChangeValue(e.target.value);
  };

  const doneFunc = (
    id: number,
    value: string | undefined,
    changeValue: string
  ) => {
    console.log(id, value);

    setItemList(
      itemList?.map((el) =>
        el.id === id
          ? {
              ...el,
              typedValue: changeValue,
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

  return (
    <div className="ToDo" onClick={() => checkfunction()}>
      {/* submit button click -> it'll be rerender  */}
      <input type="text" value={text} onChange={(e) => inputChange(e)} />
      {text}
      <input type="submit" onClick={() => makeNew(text)} />
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
    </div>
  );
}

export default ToDo;
