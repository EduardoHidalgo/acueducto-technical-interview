"use client";
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ProductsContext } from "@/app/context";
import { useDebounce } from "./useDebounce";

export interface NavbarSearchInputProps {}

export const NavbarSearchInput: FC<NavbarSearchInputProps> = ({}) => {
  const { fetchProducts } = useContext(ProductsContext);

  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce<string>(inputValue);

  useEffect(() => {
    submit();
  }, [debouncedValue]);

  const submit = async () => {
    fetchProducts!(debouncedValue);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          className="block w-full text-gray-600 outline-primary-500 rounded-md border border-gray-300 bg-white py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
          id="search"
          name="search"
          onChange={(e) => onChange(e)}
          placeholder="Search"
          type="search"
        />
      </div>
    </>
  );
};
