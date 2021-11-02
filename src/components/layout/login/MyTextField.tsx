import React from 'react';
import { useField, Field } from 'formik';
import { TextField } from 'formik-material-ui';

const MyTextField = (props:any) => {
    const [field, meta] = useField(props);
 

    return (
    <>
      <Field
          component={TextField}
          {...props}
          {...field}
          variant="outlined"
         
      />
      {meta.error && meta.touched ? (
        <div>{meta.error}</div>) : null}
    </>
    );
  };
 export default MyTextField;
 