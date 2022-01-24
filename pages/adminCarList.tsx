import { Layout } from "../components/ui";
import { ReactNode, useEffect, useState } from "react";
import s from "../styles/adminCarList.module.css";
import { CarBodyNumber } from "../types/CarBodyNumber.type";
import { fetchClient } from "../services/fetchClient";

export default function AdminCarList(): ReactNode {
  const [carBodyNumbers, setCarBodyNumbers] = useState<CarBodyNumber[] | null>(
    null
  );

  useEffect(() => {
    fetchClient.get<CarBodyNumber[]>("/car-body-number").then((res) => {
      console.log(res.data);
      setCarBodyNumbers(res.data);
    });
  }, []);

  return (
    <div className={s.adminCarList}>
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
          <h2>車両一覧</h2>
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
              {carBodyNumbers?.map((carBodyNumber, idx) => (
                <tr key={idx}>
                  <td>
                    <img src="" alt="" />
                  </td>
                  <td>{carBodyNumber.carModel.name}</td>
                  <td>{carBodyNumber.maker.name}</td>
                  <td>{carBodyNumber.evaluationPoint}</td>
                  <td>{carBodyNumber.format}</td>
                  <td>{carBodyNumber.modelYear}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
AdminCarList.Layout = Layout;
