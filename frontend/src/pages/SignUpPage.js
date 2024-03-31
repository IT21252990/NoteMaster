import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSignup } from "../hooks/useSignup";

import logo from "../images/Note Master Logo.png";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className=" lg:grid  sm:flex sm:flex-1 sm:flex-col bg-[#FFE6C7] min-h-full lg:grid-cols-2 justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:mt-40">
          <img className="w-auto mx-auto h-36" src={logo} alt="Note Master" />
          <h2 className="mt-10 text-4xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Create a new Account
          </h2>
        </div>

        <div className="mt-32 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-black"
              >
                Email address :
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#454545] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password :
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#454545]  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-[#FF6000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FFA559] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
            {error && <div className="error">{error}</div>}
            <div>
              <button
                type="reset"
                onClick={() => {
                  navigate("/");
                }}
                className="flex w-full justify-center rounded-md bg-[#454545] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#807f7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancel
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-[#454545]">
            Already have an Account?{" "}
            <a
              href="/login"
              className="font-semibold ml-1 leading-6 text-[#FF6000] hover:text-[#FFA559]"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
