export const baseURL = "http://localhost:9000";

interface Res<T> {
  data: T;
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
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new Error(err);
      });
    return {
      data: await res.json(),
      status: res.status,    };
  },
};
