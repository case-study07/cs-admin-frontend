// import { Layout } from "components/ui";
import { ReactNode } from "react";
import s from "../styles/adminAuctionList .module.css";

export default function adminAuctionList (): ReactNode {
  return (
    <div className={s.adminAuctionList}>
      <article>
        <h2>管理者</h2>
      </article>
      <div>
        <div>
          <nav>
            <ul>
              <li>TOP</li>
              <li>プロフィール</li>
              <li>オークション情報一覧</li>
              <li>顧客一覧</li>
              <li>車両一覧</li>
              <li>売上一覧</li>
              <li>終了オークション一覧</li>
              <li>オークション登録</li>
            </ul>
          </nav>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>オークション名</th>
                <th>サブタイトル</th>
                <th>開始時間</th>
                <th>出品車両数</th>
              </tr>
              <tr>
                <td>
                  <img src="" alt="" />
                </td>
                <td>大晦日大感謝祭！幻の車限定オークション</td>
                <td>サブタイトルサブタイトル</td>
                <td>2021年12月24日17時00分</td>
                <td>12台</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
// adminAuctionList .Layout = Layout;
