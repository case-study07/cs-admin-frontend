// import { Layout } from "components/ui";
import { ReactNode } from "react";
import s from "../styles/adminRegisteredCarList.module.css";

export default function adminRegisteredCarList(): ReactNode {
  return (
    <div className={s.adminRegisteredCarList}>
      <h2>登録車一覧</h2>
      <table>
        <tbody>
          <tr>
            <th>車両名</th>
            <th>価格</th>
            <th>メーカー</th>
            <th>形状</th>
            <th>評価点</th>
            <th>入札情報</th>
          </tr>
          <tr>
            <td>text</td>
            <td>text</td>
            <td>text</td>
            <td>text</td>
            <td>text</td>
            <td>text</td>
          </tr>
        </tbody>
      </table>

      <div>
        <ul>
          <li>&lt;</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>&gt;</li>
        </ul>
      </div>
    </div>
  );
}
// adminRegisteredCarList .Layout = Layout;
