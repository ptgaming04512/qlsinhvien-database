import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password", "");

  const onSubmit = (data) => alert(`Đăng ký thành công với\nEmail: ${data.email}`);

  return (
    <>
      <h2>Đăng ký</h2>
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
            {...register("password", {
              required: "Mật khẩu không được để trống",
              minLength: { value: 6, message: "Mật khẩu ít nhất 6 ký tự" },
            })}
          />
          {errors.password && <p className="error-msg">{errors.password.message}</p>}
        </div>

        <div>
          <label>Nhập lại mật khẩu</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Xác nhận mật khẩu không được để trống",
              validate: (value) => value === password || "Mật khẩu không khớp",
            })}
          />
          {errors.confirmPassword && <p className="error-msg">{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit">Đăng ký</button>
      </form>

      <p className="switch-auth">
        Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
      </p>
    </>
  );
}
