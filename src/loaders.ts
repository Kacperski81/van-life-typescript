import { defer } from "react-router-dom";
import {
  getVan,
  getVans,
  getHostVans,
  getHostVan,
  getTransactions,
} from "./api";
import { requireAuth } from "./utils";

export async function vansLoader() {
  try {
    const vans = getVans();
    return defer({ vans });
  } catch (error) {
    throw new Error("Failed to fetch vans");
  }
}

export async function vanLoader({ params }: { params: { id?: string } }) {
  if (!params.id) throw new Error("Van id is required");
  try {
    const van = getVan(params.id);
    return defer({ van });
  } catch (error) {
    throw new Error("Failed to fetch van");
  }
}

export async function hostVansLoader() {
  try {
    const loggedUser = await requireAuth();
    const hostVans = getHostVans(loggedUser.userId);
    return defer({ hostVans });
  } catch (error) {
    throw new Error("Failed to fetch host vans");
  }
}

export async function hostVanLoader({ params }: { params: { id?: string } }) {
  if (!params.id) throw new Error("Van id is required");
  try {
    const loggedUser = await requireAuth();
    const van = getHostVan(loggedUser.userId, params.id);
    return defer({ van });
  } catch (error) {
    throw new Error("Failed to fetch host van");
  }
  return null;
}

export async function hostIncomeLoader() {
  try {
    const loggedUser = await requireAuth();
    const transactions = getTransactions(loggedUser.userId);
    return defer({ transactions });
  } catch (error) {
    throw new Error("Failed to fetch host income");
  }
}
