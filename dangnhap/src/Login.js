import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(`Đăng nhập thành công với\nEmail: ${data.email}`);

  return (
    <>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email không được để trống",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email không hợp lệ",
              },
            })}
          />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
        </div>

        <div>
          <label>Mật khẩu</label>
          <input
            type="password"
            {...register("password", { required: "Mật khẩu không được để trống" })}
          />
          {errors.password && <p className="error-msg">{errors.password.message}</p>}
        </div>

        <button type="submit">Đăng nhập</button>
      </form>

      <p className="switch-auth">
        Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
      </p>
    </>
  );
}
