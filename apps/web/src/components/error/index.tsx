import { FC } from "react";

export interface ErrorLayoutProps {}

export const ErrorLayout: FC<ErrorLayoutProps> = ({}) => {
  return (
    <main className="grid min-h-full h-full place-items-center bg-white px-6 py-48 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400"
          >
            Go back home
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:text-primary-500"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};