import { Van, InputType } from "./types";

type Creds = {
  user: {
    name: string;
    id: string;
    email: string;
  };
};

export async function getVan(id: string): Promise<Van | Error> {
  const url = `/api/vans/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.vans;
  } catch (error) {
    throw new Error("Failed to fetch van");
  }
}

export async function getVans(): Promise<Van[]> {
  const url = "/api/vans";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.vans;
  } catch (error) {
    throw new Error("vans not found");
  }
}

export async function getHostVans(hostId: string): Promise<Van[]> {
  const url = "/api/host/vans";
  const headers = {
    "Content-Type": "application/json",
    ...(hostId && { HostId: hostId }),
  };
  const res = await fetch(url, { headers });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch host vans");
  }
  return data.vans;
}

export async function getHostVan(hostId: string, id: string): Promise<Van> {
  const url = `/api/host/vans/${id}`;
  const headers = {
    "Content-Type": "application/json",
    ...(hostId && { HostId: hostId }),
  };
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error("Failed to fetch host van");
  }
  const data = await res.json();
  return data.vans;
}

export async function getUser(creds: InputType): Promise<Creds> {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
    };
  }
  return data;
}

export async function getTransactions(hostId: string) {
  const url = "/api/transactions";
  const headers = {
    "Content-Type": "application/json",
    ...(hostId && { HostId: hostId }),
  };
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error("Failed to fetch transactions");
  }
  const data = await res.json();
  return data.transactions;
}

export async function getReviews(hostId: string) {
  const url = "/api/reviews";
  const headers = {
    "Content-Type": "application/json",
    ...(hostId && { HostId: hostId }),
  };
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }
  const data = await res.json();
  return data.reviews;
}
