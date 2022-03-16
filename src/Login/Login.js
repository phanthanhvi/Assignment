
import { Formik } from "formik"
import { Form, Button } from "react-bootstrap"
import style from "./Login.module.css"
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const LoginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Invalid email format"),
        password: Yup.string().required("Password is required").min(5, 'Must be min 5 digits'),
      });
    return (
        <>
            <div className={style.login}>
                <div className={style.loginLeft}>
                    <h1 className={style.titleLogin}>Welcome back</h1>
                    <p style={{textAlign:"center", fontSize:"14px",color:"#CCCCCC"}}>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                          }}
                          validationSchema={LoginSchema}
                          onSubmit={values=>{
                              navigate('/product')
                          }}
                          
                    >
                    {({ values,errors, touched, setFieldValue, handleSubmit, isValid, dirty,handleBlur})=>{
                        return(
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><b>Email:</b></Form.Label>
                            <Form.Control type="email" value={values.email} name="email" onChange={(e) =>setFieldValue("email",e.target.value)} onBlur={handleBlur}/>
                            {touched.email && (
                                <span className={style.error}>
                                {errors.email || null}
                                </span>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" style={{paddingTop:"1rem"}}>
                            <Form.Label><b>Password:</b></Form.Label>
                            <Form.Control type="password" value={values.password} name="password" onChange={(e) =>setFieldValue("password",e.target.value)} onBlur={handleBlur}/>
                            {touched.password && (
                                <span className={style.error}>
                                {errors.password || null}
                                </span>
                            )}
                        </Form.Group>

                        <Button className={style.btnLogin} onClick={handleSubmit} disabled={!(isValid&&dirty)}>
                            Sign In
                        </Button>
                    </Form>
                        )
                    }}
                    </Formik>
                </div>
                <div className={style.loginRight}>
                    <h1 className={style.titleImage}>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
                </div>
            </div>
        </>
    )
}
export default Login