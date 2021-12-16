import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={value} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}
react-hook-form을 쓰지 않을경우!! */

interface IForm {
  email: string;
  userName: string;
  password: string;
  password1: string;
  extraError?: string; // ? : NOT REQUIRED
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@gmail.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true } // 포커스 설정
      ); // 에러 임의설정
    }
    setError("extraError", { message: "Server Offline" }); // 폼 전체 에러설정
  };
  // register: state를 만들어줌
  // watch: form의 입력값을 추적할 수 있음
  // formState: validation을 담당!
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@gmail.com$/,
              message: "Only gmail.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("userName", {
            required: "write here",
            validate: {
              noLee: (value) =>
                value.includes("lee") ? "No lee allowed" : true,
            },
          })}
          placeholder="Username"
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
