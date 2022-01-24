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
    });
    return {
      data: await res.json(),
      status: res.status,
    };
  },
};
