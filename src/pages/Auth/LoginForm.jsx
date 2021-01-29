import { Block, Button } from "../../components";
import "./Auth.scss";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import validateForm from "../../utils/validate";

const Auth = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={(values) => {
        const errors = {};
        validateForm.username(values, errors);
        validateForm.passwordAuth(values, errors);
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
              <h2>Войти в аккаунт</h2>
              <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
              <form onSubmit={handleSubmit}>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="username"
                    validateStatus={
                      errors.username && touched.username && errors.username
                        ? "error"
                        : "success"
                    }
                    help={
                      errors.username && touched.username && errors.username
                    }
                  >
                    <Input
                      size="large"
                      className="input-large"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    validateStatus={
                      errors.password && touched.password && errors.password
                        ? "error"
                        : "success"
                    }
                    help={
                      errors.password && touched.password && errors.password
                    }
                  >
                    <Input
                      size="large"
                      className="input-large"
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </Form.Item>
                  <Form.Item onClick={handleSubmit}>
                    <Button className="button" type="primary" size="large">
                      Войти в аккаунт
                    </Button>
                  </Form.Item>
                  <Link to="/register" className="auth__link">
                    Зарегестрироваться
                  </Link>
                </Form>
              </form>
            </Block>
          </div>
        </section>
      )}
    </Formik>
  );
};

export default Auth;
