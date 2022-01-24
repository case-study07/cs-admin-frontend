// import { Layout } from "components/ui";
import { ReactNode } from "react";
import s from "../styles/adminProceeds.module.css";

export default function adminProceeds(): ReactNode {
  return (
    <div className={s.adminProceeds}>
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
          <h2>売上</h2>

          <nav>
              <ul>
                  <li>昨日</li>
                  <li>今日</li>
                  <li>明日</li>
              </ul>
          </nav>

          <div>
              <p>販売履歴</p>
              <p>グラフ</p>
          </div>

          <table>
            <tbody>
              <tr>
                <th>画像</th>
                <th>車両名</th>
                <th>メーカー</th>
                <th>評価</th>
                <th>型式</th>
                <th>年式</th>
                <th>走行距離</th>
                <th>排気量</th>
                <th>修復歴</th>
                <th>車検有無</th>
              </tr>
              <tr>
                <td>
                  <img src="" alt="" />
                </td>
                <td>86 2.0 GT HKS WORK18AW </td>
                <td>ホンダ</td>
                <td>S</td>
                <td>DBA-ZN6</td>
                <td>2014</td>
                <td>6.2万km</td>
                <td>2000cc</td>
                <td>2022年4月</td>
                <td>あり</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
// adminProceeds .Layout = Layout;
