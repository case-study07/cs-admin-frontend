import { Layout } from "../components/ui";
import { ReactNode, useEffect, useState } from "react";
import s from "../styles/adminRegisteredCustomerList.module.css";
import { fetchClient } from "../services/fetchClient";
import { Member } from "../types/Member.type";

export default function AdminRegisteredCustomerList(): ReactNode {
  const [members, setMembers] = useState<Member[] | null>(null);

  useEffect(() => {
    try {
      fetchClient.get<Member[]>("/member").then((res) => {
        setMembers(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className={s.adminRegisteredCustomerList}>
      <h2>顧客一覧</h2>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>画像</th>
            <th>名前</th>
            <th>会社名</th>
            <th>電話番号</th>
            <th>メールアドレス</th>
            <th>信用チェック</th>
            <th>悪質フラグ</th>
          </tr>
          {members?.map((member, idx) => (
            <tr key={idx}>
              <td>{member.id}</td>
              <td>{member.iconImage}</td>
              <td>{member.name}</td>
              <td>{member.companyName}</td>
              <td>{member.phoneNumber}</td>
              <td>{member.email}</td>
              <td>{member.creditCheck ? "◯" : "X"}</td>
              <td>{member.malicuousFlag ? "◯" : "X"}</td>
            </tr>
          ))}
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
AdminRegisteredCustomerList.Layout = Layout;
