"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<string>(searchParams.get("name") || "");

  const search = (value: string) => {
    if (value === "") return router.replace("?");
    const params = new URLSearchParams({ name: value }).toString();
    return router.replace(`?${params}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
    return search(value);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="theme-animate text-foreground flex gap-2 text-4xl items-center font-semibold">
        <p>Search</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div className="theme-animate bg-background flex justify-center items-center w-full border-2 border-foreground rounded-xl">
        <input
          type="text"
          placeholder="Search for projects"
          className="theme-animate outline-0 text-foreground bg-background w-full text-xl px-4 py-4 rounded-3xl grow"
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
