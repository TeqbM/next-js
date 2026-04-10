"use client";

import { useState } from "react";

export default function Loginform() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  function formHandler(ele: React.FormEvent<HTMLFormElement>) {
    ele.preventDefault();

    if (!email.trim()) return;
    console.log({ email, password: pass });
  }

  return (
    <form
      className="w-full flex flex-col gap-3"
      onSubmit={formHandler}
      autoComplete="off"
    >
      <div className="mb-3">
        <label htmlFor="email" className="w-full">
          Email Address
        </label>
        <input
          className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:border-slate-700 focus:outline-0"
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          id="email"
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label className="w-full" htmlFor="password">
          Password
        </label>
        <input
          className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:border-slate-700 focus:outline-0"
          type="Password"
          value={pass}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
          id="Password"
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <button type="submit">Login ...</button>
      </div>
    </form>
  );
}
