import { useRef, useState, useEffect } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import axios from "../api/axios";

const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
const REGISTER_URL = "/register";

const Register = () => {
  const nameRef = useRef();
  const errRef = useRef();
  const emailRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  //   user validation
  useEffect(() => {
    const result = NAME_REGEX.test(name);
    console.log(result);
    console.log(name);
    setValidName(result);
    // setValidName(NAME_REGEX.test(user));
  }, [name]);

  // email validation
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
    // setValidName(NAME_REGEX.test(user));
  }, [email]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPassword; // boolean
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [name, password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = NAME_REGEX.test(name);
    const v2 = PASSWORD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ name, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      console.log(JSON.stringify(response));
      setNameFocus("");
      setPassword("");
      setMatchPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="/login">Sign In</a>
          </p>
        </section>
      ) : (
        <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl mx-auto text-center">
            <span className="text-2xl font-light">Create an account</span>
            <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
              <div className="h-2 bg-pink-700 rounded-t-md"></div>
              <div className="py-6 px-8">
                {errMsg ? (
                  <p className="text-sm" ref={errRef}>
                    {errMsg}
                  </p>
                ) : null}
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name" className="block font-semibold">
                    Name
                    {validName ? <AiOutlineCheck /> : null}
                    {validName || !name ? null : <AiOutlineClose />}
                  </label>
                  <input
                    type="text"
                    id="name"
                    ref={nameRef}
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name"
                    required
                    aria-invalid={validName ? "false" : "true"}
                    onFocus={() => setNameFocus(true)}
                    onBlur={() => setNameFocus(false)}
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pink-700 rounded-md"
                  />
                  {nameFocus && name && !validName ? (
                    <p>
                      4 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>
                  ) : null}
                  <label className="block mt-3 font-semibold">Email</label>
                  {validEmail ? <AiOutlineCheck /> : null}
                  {validEmail || !email ? null : <AiOutlineClose />}
                  <input
                    type="text"
                    placeholder="Email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pink-700 rounded-md"
                  />
                  {emailFocus && email && !validEmail ? (
                    <p>Please insert a valid email.</p>
                  ) : null}
                  <label className="block mt-3 font-semibold">Password</label>
                  {validPassword ? <AiOutlineCheck /> : null}
                  {validPassword || !password ? null : <AiOutlineClose />}
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    aria-describedby="passwordnote"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pink-700 rounded-md"
                  />
                  {passwordFocus && !validPassword ? (
                    <p className="text-sm">
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters, a number and
                      a special character.
                      <br />
                      Allowed special characters:
                      <span aria-label="exclamation mark">!</span>
                      <span aria-label="at symbol">@</span>
                      <span aria-label="hashtag">#</span>
                      <span aria-label="dollar sign">$</span>
                      <span aria-label="percent">%</span>
                    </p>
                  ) : null}
                  <label
                    className="block mt-3 font-semibold"
                    htmlFor="confirm_pwd"
                  >
                    Confirm Password:
                    {validMatch && matchPassword ? <AiOutlineCheck /> : null}
                    {validMatch || !matchPassword ? null : <AiOutlineClose />}
                  </label>
                  <input
                    type="password"
                    id="confirm_pwd"
                    placeholder="Re-enter your password"
                    onChange={(e) => setMatchPassword(e.target.value)}
                    value={matchPassword}
                    required
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pink-700 rounded-md"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <div className="flex justify-between items-baseline">
                    <button className="mt-4 bg-pink-700 hover:bg-pink-600 text-white py-2 px-6 rounded-lg">
                      Register
                    </button>

                    <a href="/login" className="text-sm hover:underline ml-3">
                      Already have an account?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
