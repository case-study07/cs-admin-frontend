import { Layout } from "../components/ui";
import { ReactNode } from "react";
import s from "../styles/login.module.css";

export default function Login(): ReactNode {
  return (
    <div className={s.login}>
        <h2>ログイン(admin)</h2>
        <form action="">
            <div>
                <label htmlFor="">ユーザーID</label><br />
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">パスワード</label><br />
                <input type="password" name="" id="" />
            </div>
            <input type="submit" value="ログイン" />
        </form>
    </div>
  );
}
Login.Layout = Layout;
