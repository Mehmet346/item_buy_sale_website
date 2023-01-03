import React, { useState } from "react";
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from "../../dbconnection/firebase"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import sampleImage from "../../assets/mabed2.png"
import CircularProgress from '@mui/material/CircularProgress';
import { TbCameraPlus } from 'react-icons/tb';
import CheckIcon from '@mui/icons-material/Check';
import { useFormik } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';

const initialValues = {
    categories: { category: "" }
};

function AddItems() {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [tick, setTick] = React.useState(false);
    const [active, setActive] = React.useState(false);
    const timer = React.useRef();

    const buttonSx = {
        ...(success && {
            mt: 2,
            '&:hover': {
                mt: 2,
            },
        }),
        mt: 2,
    };

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!(loading && tick)) {
            setSuccess(false);
            setLoading(true);
            setActive(true);
            timer.current = window.setTimeout(() => {
                setLoading(false);
                setTick(true)
                timer.current = window.setTimeout(() => {
                    setTick(false)
                    setActive(false);
                }, 1500);
            }, 2000);
        }
    };

    const { handleSubmit, handleChange, values, setFieldValue } = useFormik({
        initialValues: {
            title: '',
            category: '',
            price: '',
            description: '',
        },
        onSubmit: values => {
            console.log(values)

            if (!(loading && tick)) {
                setSuccess(false);
                setLoading(true);
                setActive(true);
                timer.current = window.setTimeout(() => {
                    setLoading(false);
                    setTick(true)
                    timer.current = window.setTimeout(() => {
                        setTick(false)
                        setActive(false);
                    }, 1500);
                }, 2000);
            }

            const title = values.title;
            const category = values.category;
            const price = values.price;
            const description = values.description;

            if (title == '' || category == '' || price == '') {
                return
            }
            const user = auth.currentUser;
            const useruid = user.uid;
            const useremail = user.email;
            const today = new Date();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '  ' + today.getHours() + ':' + today.getMinutes();

            const ProductCollRef = collection(db, 'product')
            addDoc(ProductCollRef, { useruid, useremail, title, category, price, description, date })
                .then(response => {
                    console.log(response.id)
                    window.location.reload(false);
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    })

    return (

        <div className="text-center my-5  border rounded-lg border-[#e8e8e8] bg-[#f8f8f8]">
            <form initialValues={initialValues} onSubmit={handleSubmit}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>

                    <p className="flex  justify-center items-center">
                        <TbCameraPlus className="absolute items-center justify-center w-16 h-16 cursor-pointer" />
                        <img src={sampleImage} alt='example' className="rounded-lg border border-slate-700 hover:opacity-40 hover:cursor-pointer"></img></p>

                    <p><TextField
                        sx={{ mt: 3, width: 315 }}
                        value={values.title}
                        onChange={handleChange}
                        label="Title"
                        id="title" />
                    </p>

                    <p className="flex justify-center gap-4"><Autocomplete
                        onChange={(e, value) =>
                            setFieldValue("category", value)}
                        id="category"
                        options={serverCategories}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Category" />}
                    />

                        <TextField
                            sx={{ width: 100 }}
                            label="Price"
                            type="number"
                            id="price"
                            value={values.price}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }} /></p>

                    <p><TextField
                        sx={{ width: 500 }}
                        label="Description"
                        id="description"
                        value={values.description}
                        onChange={handleChange}
                        multiline
                        rows={4}
                    /></p>

                    <p className="items-center justify-center flex">
                        {loading && <CircularProgress sx={{ position: 'absolute', mt: 2 }} size="1.5rem" color="success" />}
                        {tick && <CheckIcon sx={{ position: 'absolute', mt: 2, zIndex: 20 }} color="success" />}
                        <Button
                            type="submit"
                            sx={buttonSx}
                            disabled={active}
                            variant="outlined"
                            color="success">
                            Add Item</Button>
                    </p>
                </Box>
            </form>
        </div>

    )
}

export default AddItems

const serverCategories = [
    'Mabed2',
    'Rones2',
    'M2-Ultimate',
    'Rohan2',
]

