import { Block, Button } from "../../components";
import "./Auth.scss";
import { Form, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import validateForm from "../../utils/validate";
const Auth = () => (
  <div>
    <Formik
      initialValues={{
        email: "",
        password: "",
        repeatPassword: "",
        username: "",
      }}
      validate={(values) => {
        const errors = {};
        validateForm.email(values, errors);
        validateForm.password(values, errors);
        validateForm.repeatPassword(values, errors);
        validateForm.username(values, errors);
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <section className="auth">
          <div className="auth__content">
            <div className="auth__top">
              <h2>Зарегистрировать аккаунт</h2>
              <p>Пожалуйста, зарегистрируйте новый аккаунт</p>
            </div>
            {true ? (
              <Block>
                <form onSubmit={handleSubmit}>
                  <Form name="normal_login" className="login-form">
                    <Form.Item
                      name="mail"
                      validateStatus={
                        errors.email && touched.email && errors.email
                          ? "error"
                          : "succes"
                      }
                      help={errors.email && touched.email && errors.email}
                    >
                      <Input
                        size="large"
                        className={`input-large`}
                        prefix={
                          <MailOutlined className="site-form-item-icon" />
                        }
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </Form.Item>
                    <Form.Item
                      name="username"
                      validateStatus={
                        errors.username && touched.username && errors.username
                          ? "error"
                          : "succes"
                      }
                      help={
                        errors.username && touched.username && errors.username
                      }
                    >
                      <Input
                        size="large"
                        className={`input-large`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        type="username"
                        name="username"
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      validateStatus={
                        errors.password && touched.password && errors.password
                          ? "error"
                          : "succes"
                      }
                      help={
                        errors.password && touched.password && errors.password
                      }
                    >
                      <Input
                        size="large"
                        className={`input-large`}
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </Form.Item>

                    <Form.Item
                      name="repeat-password"
                      validateStatus={
                        errors.repeatPassword &&
                        touched.repeatPassword &&
                        errors.repeatPassword
                          ? "error"
                          : "succes"
                      }
                      help={
                        errors.repeatPassword &&
                        touched.repeatPassword &&
                        errors.repeatPassword
                      }
                    >
                      <Input
                        size="large"
                        className={`input-large `}
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Repeat password"
                        name="repeatPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.repeatPassword}
                      />
                    </Form.Item>
                    <Form.Item onClick={handleSubmit}>
                      <Button className="button" type="primary" size="large">
                        Зарегистрироваться
                      </Button>
                    </Form.Item>
                    <Link to="/login" className="auth__link">
                      Войти в аккаунт
                    </Link>
                  </Form>
                </form>
              </Block>
            ) : (
              <div className="auth__succes">
                <InfoCircleTwoTone style={{ fontSize: "55px" }} />
                <h3>Подтвердите свой аккаунт</h3>
                <p>
                  На вашу почту отправлено письмо с ссылкой на подтверждение
                  аккаунта
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </Formik>
  </div>
);

// const Auth = () => {
//   const succes = true;

//   return (
//     <section className="auth">
//       <div className="auth__content">
//         <div className="auth__top">
//           <h2>Зарегистрировать аккаунт</h2>
//           <p>Пожалуйста, зарегистрируйте новый аккаунт</p>
//         </div>
//         {succes ? (
//           <Block>
//             <Form name="normal_login" className="login-form">
//               <Form.Item name="mail">
//                 <Input
//                   size="large"
//                   className="input-large"
//                   prefix={<MailOutlined className="site-form-item-icon" />}
//                   placeholder="E-mail"
//                 />
//               </Form.Item>
//               <Form.Item name="username">
//                 <Input
//                   size="large"
//                   className="input-large"
//                   prefix={<UserOutlined className="site-form-item-icon" />}
//                   placeholder="Username"
//                 />
//               </Form.Item>
//               <Form.Item name="password">
//                 <Input
//                   size="large"
//                   className="input-large"
//                   prefix={<LockOutlined className="site-form-item-icon" />}
//                   type="password"
//                   placeholder="Password"
//                 />
//               </Form.Item>
//               <Form.Item name="password">
//                 <Input
//                   size="large"
//                   className="input-large"
//                   prefix={<LockOutlined className="site-form-item-icon" />}
//                   type="password"
//                   placeholder="Repeat password"
//                 />
//               </Form.Item>
//               <Form.Item>
//                 <Button className="button" type="primary" size="large">
//                   Зарегистрироваться
//                 </Button>
//               </Form.Item>
//               <Link to="/login" className="auth__link">
//                 Войти в аккаунт
//               </Link>
//             </Form>
//           </Block>
//         ) : (
//           <div className="auth__succes">
//             <InfoCircleTwoTone style={{ fontSize: "55px" }} />
//             <h3>Подтвердите свой аккаунт</h3>
//             <p>
//               На вашу почту отправлено письмо с ссылкой на подтверждение
//               аккаунта
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

export default Auth;
