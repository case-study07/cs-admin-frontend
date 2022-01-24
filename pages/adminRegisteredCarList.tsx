import { Layout } from "../components/ui";
import { ReactNode, useEffect, useState } from "react";
import s from "../styles/adminRegisteredCarList.module.css";
import { ListingCar } from "../types/ListingCar.type";
import { fetchClient } from "../services/fetchClient";

export default function AdminRegisteredCarList(): ReactNode {
  const [listingCars, setListingCars] = useState<ListingCar[] | null>(null);

  useEffect(() => {
    try {
      fetchClient.get<ListingCar[]>("/listing-car").then((res) => {
        console.log(res.data);
        setListingCars(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

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
          {listingCars?.map((listingCar, idx) => (
            <tr key={idx}>
              <td>{listingCar.carBodyNumber.carModel.name}</td>
              <td>価格入れるとこがない？</td>
              <td>{listingCar.carBodyNumber.maker.name}</td>
              <td>{listingCar.carBodyNumber.shape.name}</td>
              <td>{listingCar.evaluationPoint}</td>
              <td>{}</td>
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

AdminRegisteredCarList.Layout = Layout;
