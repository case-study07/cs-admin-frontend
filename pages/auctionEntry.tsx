import { Layout } from "../components/ui";
import { ReactNode } from "react";
import s from "../styles/auctionEntry.module.css";

export default function AuctionEntry() :ReactNode{
  return (
    <div className={s.auctionEntry}>
      <article>
        <h2>オークション登録</h2>
        <a href="">管理者TOPへ戻る</a>
        <form action="">
          <div>
            <label htmlFor="">オークション名</label>
            <br />
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">サブタイトル</label>
            <br />
            <input type="text" name="" id="" />
          </div>
          <div>
            <div>
              <label htmlFor="">開始時間</label>
              <br />
              <input type="text" name="" id="" />
            </div>
            <div>
              <div>
                <label htmlFor="fromFile">画像</label>
                <br />
                <input type="file" name="" id="fromFile" />
              </div>
              <div>
                <label htmlFor="">ラベル</label>
                <br />
                <input type="color" name="" id="" />
              </div>
            </div>
          </div>
        </form>

        <button>出品車両登録</button>

        <table>
          <tr>
            <th>No</th>
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
            <td>1</td>
            <td>
              <img src="./img/Featured image.png" alt="" />
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
        </table>

        <button>作成</button>
      </article>
    </div>
  );
}
AuctionEntry.Layout = Layout;
