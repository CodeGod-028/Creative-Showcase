import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const submit = async () => {
  console.log("Register clicked", email, password);

  try {
    const res = await API.post("/auth/register", { email, password });
    console.log("Register success:", res.data);
    alert("Registration successful");
  } catch (error) {
  alert(error.response?.data?.detail || "Registration failed");
}
};


  return (
    <div className="container">
      <h2>Register</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={submit}>Register</button>
    </div>
  );
}
