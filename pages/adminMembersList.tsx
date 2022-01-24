import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { fetchClient } from "../services/fetchClient";
import { Member } from "../types/Member.type";

type Props = {};

const adminMembersList: NextPage = () => {
  const [members, setMembers] = useState<Member[]>();

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
    <main>
      <p>管理者</p>
      <nav>
        <ul>
          <li>TOP</li>
          <li>プロフィール</li>
          <li>オークション情報一覧</li>
          <li>顧客一覧</li>
          <li>車両一覧</li>
          <li>売上一覧</li>
          <li>オークション登録</li>
        </ul>
      </nav>
      <article>
        <h2>車両一覧</h2>
        <input type="text" placeholder="キーワード" />
        <button>Search</button>
        <nav>
          <ul>
            <li>
              <select name="" id="">
                <option>車体名</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>乗車人数</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>走行距離</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>ボディタイプ</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>メーカー</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>年式</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>排気量</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option>価格</option>
              </select>
            </li>
          </ul>
        </nav>
        <ul>
          {members?.map((member, idx) => (
            <li key={idx}>
              <p>{member.id}</p>
              <p>{member.name}</p>
              <p>{member.companyName}</p>
              <p>{member.phoneNumber}</p>
              <p>{member.email}</p>
              <p>{member.creditCheck}</p>
              <p>{member.malicuousFlag}</p>
              <p>{member.iconImage}</p>
            </li>
          ))}
        </ul>

        <a href="">一覧へ</a>
      </article>
    </main>
  );
};

export default adminMembersList;
