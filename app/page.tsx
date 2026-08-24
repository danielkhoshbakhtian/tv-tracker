import { redirect } from "next/navigation";

export default function FrontDoor() {
  // Instantly teleport to the prototype aisles, completely bypassing any login UI
  redirect("/home");
}