import { FormikValues, useFormik } from "formik";

export function Form({
  initialValues,
  validationRules,
  onSubmit,
  children,
  validateOnBlur,
  validateOnChange,
}: FormikValues) {
  const formik = useFormik({
    validateOnBlur: validateOnBlur,
    validateOnChange: validateOnChange,
    initialValues: initialValues,
    validationSchema: validationRules,
    onSubmit: (values, helpers) => {
      onSubmit(values, helpers);
    },
  });
  return <>{children(formik)}</>;
}
