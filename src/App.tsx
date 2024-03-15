import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Label from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";

function App() {
  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        placeholder="이메일을 입력하세요"
        value=""
        errorMessage="이메일을 확인해주세요"
        isError={false}
        iconAlt="delete"
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <div className="my-20" />
      <Label htmlFor="address">주소</Label>
      <DefaultTextField
        id="address"
        placeholder="주소을 입력하세요"
        value=""
        errorMessage="주소을 확인해주세요"
        isError={false}
        iconAlt="delete"
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        onChange={() => {}}
        onIconClick={() => {}}
      />
    </>
  );
}

export default App;
