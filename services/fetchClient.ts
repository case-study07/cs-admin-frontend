const baseURL = "http://localhost:9000";

interface Res<T> {
  data: T;
  status: number;
}

export const fetchClient = {
  get: async <T>(path: string, headers: Record<string, string> = {}): Promise<Res<T>> => {
    const res = await fetch(baseURL + path, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("取得エラー");
        return await res.json();
      })
      .catch((err) => {
        throw Error(err);
      });
    return {
      data: await res,
      status: res.status,
    };
  },

  post: async <T>(
    path: string,
    headers: Record<string, string> = {},
    json: Record<string, unknown>
  ): Promise<Res<T>> => {
    const res = await fetch(baseURL + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(json),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("取得エラー");
        return await res.json();
      })
      .catch((err) => {
        throw Error(err);
      });
    return {
      data: await res,
      status: res.status,
    };
  },

  patch: async <T>(
    path: string,
    headers: Record<string, string> = {},
    json: Record<string, unknown>
  ) => {
    const res = await fetch(baseURL + path, {
      method: "PATCH",
      headers: {
       "Content-Type": "application/json",
        ...headers, 
      },
      body: JSON.stringify(json)
    })
  }
};
