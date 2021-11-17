import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const useForm = (callback, url, defaults, validate, validate_single) => {

    let history = useHistory();

    const [values,setValues] = useState(defaults);
    const [errors,setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Callback to handle change of focus for a field
    const handleBlur = e => {
        const field = e.target.name;
        // console.log(field)
        setErrors(validate_single(values,field));
        setIsSubmitting(false);
    };

    // Callback to handle change of a field value
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    
    // Callback to handle submit form
    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmitting(true);
        const localErrors = validate(values)
        
        if (Object.keys(localErrors).length > 0) {
            console.log(errors)
        }
        else {
            console.log()
            // console.log(isSubmitting)
            // TODO: place correct submit callback function
            const a = callback(values)
            if (a.ok) {
                console.log(a.ok)
                // history.push(url)
            }
            else {
                console.log(a.ok)
            }
        }
    };
        
    useEffect(
        (isSubmitting,handleSubmit,values) => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                handleSubmit(values)
            }
        },
        [errors]
    );
    
    return { handleBlur, handleChange, handleSubmit, values, errors };
    };
    
export default useForm;