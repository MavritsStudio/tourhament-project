import "../../assets/scss/signup.scss"
import { useForm } from "react-hook-form";

const SignupPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    return (
        <div className="page signup-page">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                    <label>Почта </label>
                    <input
                            id="email"
                            {...register("email", {
                            required: "required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format",
                            },
                            })}
                            type="email"
                        />
                        {errors.email && (
                            <span role="alert">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="input-container">
                    <label>Пароль </label>
                    <input
                            id="password"
                            {...register("password", {
                            required: "required",
                            minLength: {
                                value: 6,
                                message: "min length is 6",
                            },
                            maxLength: {
                                value: 128,
                                message: "max length is 128",
                            },
                            })}
                            type="password"
                        />
                        {errors.password && (
                            <span role="alert">{errors.password.message}</span>
                        )}
                        {/* {loading && <div>Loading...</div>} */}
                        {/* {error && <pre>{JSON.stringify(error, null, 2)}</pre>} */}
                    </div>
                    <div className="button-container">
                    <input type="submit" value="Зарегистрироваться"/>
                    </div>
                </form>
            </div>
        </div>
    )
}



  export default SignupPage;