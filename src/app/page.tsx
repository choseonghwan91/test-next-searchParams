"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      home
      <button onClick={() => router.push("blog?a=1")}>test</button>
    </div>
  );
}
