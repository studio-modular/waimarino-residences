"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logIn(formData: FormData) {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("auth_logged_in");
  const password = formData.get("password");
  console.log(isLoggedIn);
  if (password === "stillwaters") {
    cookieStore.set("auth_logged_in", "true", { secure: true });
    return redirect(`/`);
  }
  redirect(`/`);
}
