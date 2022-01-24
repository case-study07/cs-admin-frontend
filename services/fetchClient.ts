const baseURL = "http://localhost:9000";

interface Res<T> {
  data: T | [];
  status: number;
}

export const fetchClient = {
  get: async <T>(path: string): Promise<Res<T>> => {
    const res = await fetch(baseURL + path, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("取得エラー");
        const data = await res.json();
        if (data.lenth === 0) return [];
        return data;
      })
      .catch((err) => {
        throw Error(err);
      });
    return {
      data: await res,
      status: res.status,
    };
  },
};
