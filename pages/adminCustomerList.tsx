import { Layout } from "../components/ui";
import { ReactNode } from "react";
import s from "../styles/adminRegisteredCustomerList.module.css";

export default function adminRegisteredCustomerList(): ReactNode {
  return (
    <div className={s.adminRegisteredCustomerList}>
      <h2>顧客一覧</h2>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>名前</th>
            <th>メールアドレス</th>
            <th>電話番号</th>
          </tr>
          <tr>
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
adminRegisteredCustomerList .Layout = Layout;
