"use client";

import { useState } from "react";
import { login } from "@/lib/auth";

export function LoginForm() {
  const [userName, setUserName] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  function handleLogin() {
    if (login(userName, passwordValue)) {
      window.location.href = "/";
      return;
    }

    alert("ログインできませんでした");
  }

  return (
    <div className="login-panel">
      <h1>Campus Contact Book</h1>
      <label>
        ユーザー名
        <input value={userName} onChange={(event) => setUserName(event.target.value)} />
      </label>
      <label>
        パスワード
        <input
          type="password"
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
        />
      </label>
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
}
