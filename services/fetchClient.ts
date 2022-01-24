const baseURL = "http://localhost:9000";

interface Res<T> {
  data: T;
  status: number;
}

export const fetchClient = {
  get: async <T>(path: string): Promise<Res<T> | boolean> => {
    try {
      const res = await fetch(baseURL + path, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("取得エラー");
          }
          return res.json();
        })
        .catch((err) => {
          console.error(err);
        });

      return {
        data: await res,
        status: res.status,
      };
    } catch (err) {
      return false;
    }
  },
};
