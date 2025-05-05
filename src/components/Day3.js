import { useState } from "react";

const Day3 = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const chekStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 0) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 1) return "Weak";
    if (score === 2 || score === 3) return "Medium";
    if (score === 4) return "Strong";
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
    setStrength(chekStrength(password));
  };

  return (
    <>
      <h1>Password Strength</h1>
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={handleChange}
      />
      {password && (
        <h1
          style={{
            color:
              strength === "Strong"
                ? "green"
                : strength === "Medium"
                ? "orange"
                : "red",
          }}
        >
          {strength}
        </h1>
      )}
    </>
  );
};

export default Day3;
