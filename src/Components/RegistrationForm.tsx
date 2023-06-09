import React, { useState } from 'react'
import "./RegistrationForm.css"
import { products } from "./Product.js"
import { StyleSheet, css } from "aphrodite";

import { useContext } from 'react';
import { mycontext } from '../MyContext';

type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const RegistrationForm = () => {
    const { data, SetData } = useContext(mycontext)

    const [datas, sets] = useState([])
    const [step, setStep] = useState(1)
    const [emildata, setemaildata] = useState([])

    const [name, setName] = useState<string>('');
    const [lastName, setlastName] = useState<string>('');
    const [email, setemail] = useState<string | undefined>('');
    const [address, setaddress] = useState<string>('');
    const [number, setnumber] = useState<string | undefined>("");
    const [password, setpassword] = useState<string | undefined>("");
    const [pen, setpen] = useState<string | undefined>("");

    const nextStep = () => {
        if (name == "" && lastName == "" && number == "" && address == "") {
            window.alert("Plz Fill Your Data")

        }
        else {

            setStep((prevStep) => prevStep + 1)
            SetData({ name, lastName, number, address })

        }
        step === 2 && !email && !password ? window.alert("Plz Fill Your Data") : setemaildata({ email, password })

    };

    const previousStep = () => {
        setStep((prevStep) => prevStep - 1);
    };



    const handleClick: ClickHandler = (event) => {
        console.log('Button clicked!');
        window.location.href = "/thanks"
    };
    return (
        <>

            <div className={css(styles.formsection)} style={{ display: "flex", width: "90%" }}>
                <div className={css(styles.boxOne)}>
                    <div className={css(styles.fromsectiondiv)} >
                        <div style={{ background: step === 1 ? "white" : "none", height: "22px" }} className='step-numbers'>
                            1
                        </div>

                        <div className={css(styles.steps)} >
                            <div>
                                STEP 1
                            </div>
                            <div>
                                YOUR INFO
                            </div>
                        </div>
                    </div>
                    <div className={css(styles.fromsectiondiv)}>
                        <div style={{ background: step === 2 ? "white" : "none", height: "22px" }} className='step-numbers'>
                            2
                        </div>
                        <div className={css(styles.steps)} style={{ display: "flex", gap: "12px" }}>
                            <div>
                                STEP 2
                            </div>
                            <div>

                                ACCOUNT INFO
                            </div>
                        </div>
                    </div>
                    <div className={css(styles.fromsectiondiv)}>
                        <div style={{ background: step === 3 ? "white" : "none", height: "22px" }} className='step-numbers'>
                            3
                        </div>
                        <div className={css(styles.steps)} style={{ display: "flex", gap: "12px" }}>
                            <div>
                                STEP 3
                            </div>
                            <div>
                                PRODUCTS
                            </div>
                        </div>
                    </div>
                    <div className={css(styles.fromsectiondiv)}>
                        <div style={{ background: step === 4 ? "white" : "none", height: "22px" }} className='step-numbers'>
                            4
                        </div>
                        <div className={css(styles.steps)} style={{ display: "flex", gap: "12px" }}>
                            <div>
                                STEP 4
                            </div>
                            <div>
                                CHECKOUT

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex" }}>

                    <div>
                        {step === 1 && (
                            <div>

                                <h2>Personal Information</h2>
                                <form className='step-number-one-form' >
                                    <label> First Name: </label>

                                    <input
                                        type="text"
                                        name="firstName"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='E.g Lokesh '
                                        required
                                    />

                                    <br />
                                    <label>
                                        Last Name:
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={lastName}
                                        onChange={(e) => setlastName(e.target.value)}
                                        placeholder='E.g Choudhary'
                                        required
                                    />
                                    <br />

                                    <label>
                                        Phone Number:
                                    </label>
                                    <input
                                        type="text"
                                        name="number"
                                        value={number}
                                        onChange={(e) => setnumber(e.target.value)}
                                        required
                                        placeholder='E.g +91 6377300***'
                                    />
                                    <br />
                                    <label> Address: </label>

                                    <input
                                        type="text"
                                        name="address"
                                        value={address}
                                        onChange={(e) => setaddress(e.target.value)}
                                        placeholder='City and any place'
                                        required
                                    />

                                    <br />


                                </form>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2> Account Information</h2>
                                <form className='step-number-one-form' onSubmit={handleSubmit}>
                                    <label>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                        placeholder='E.g xyz@gmail.com'
                                    />
                                    <br />
                                    <label>
                                        Password </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                        placeholder='Keep Scecrit'
                                    />

                                    <br />

                                    <div>


                                    </div>
                                </form>
                            </div>
                        )}


                        {
                            step == 3 && (
                                <>
                                    <h2 style={{ textAlign: "center" }}>Select Your Product </h2>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px", marginTop: "44px", }}>

                                        {products.map((el, index) => {
                                            return (
                                                <div onClick={(e) => { sets(el) }} style={{ border: "1px solid", display: "flex", gap: "68px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding: "20px", marginBottom: "12px", borderRadius: "12px", alignItems: "center" }}>
                                                    <div>
                                                        <img style={{ border: "1px solid black", borderRadius: "4px" }} src={el.thumbnail} width="98px" />
                                                    </div>
                                                    <div>
                                                        <p>Product : {el.title}</p>
                                                        <p>Brand : {el.brand}</p>
                                                        <p>Price : ${el.price}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}


                                    </div>
                                </>
                            )



                        }


                        {step === 4 && (
                            <div>

                                <h2>Checkout</h2>
                                <div style={{ border: "1px solid", display: "flex", gap: "68px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding: "20px", marginBottom: "12px", borderRadius: "12px", alignItems: "center" }}>
                                    <div>
                                        <img style={{ border: "1px solid black", borderRadius: "4px" }} src={datas.thumbnail} width="98px" />
                                    </div>
                                    <div>
                                        <p>Product : {datas.title}</p>
                                        <p>Brand : {datas.brand}</p>
                                        <p>Price : ${datas.price}</p>
                                    </div>
                                </div>


                            </div>
                        )}
                    </div>

                </div>
            </div >
            <div style={{ marginTop: "2px", width: "100%", justifyContent: "space-around", display: "flex" }}>
                <button disabled={step == 1} type="button" onClick={previousStep}>
                    <span className="box">
                        Previous
                    </span>
                </button>
                {step !== 4 ? <button disabled={step == 4} type="button" onClick={nextStep}>
                    <span className="box">
                        next
                    </span>
                </button> : <button onClick={handleClick} type="button">
                    <span className="box">
                        Checkout
                    </span>
                </button>}
            </div>


        </>
    )
}


export default RegistrationForm



// Style 

const styles = StyleSheet.create({
    heading: {
        textAlign: "right",
        backgroundColor: "red",
        "@media (min-width: 768px)": {
            textAlign: "center",
            backgroundColor: "green"
        }

    },
    formsection: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        margin: "auto",

        background: "rgb(207 212 255 / 61%)",
        justifyContent: "space-around",
        "@media (max-width: 480px)": {
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    boxOne: {
        padding: "53px",
        backgroundSize: "cover",
        display: "flex",
        marginTop: "19px",
        gap: "56px",
        flexDirection: "column",
        backgroundImage: "url(" + "https://multi-step-form-eduardionescu.vercel.app/images/bg-sidebar-mobile.svg" + ")",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px",
        height: "383px",
        "@media (max-width: 480px)": {
            flexDirection: "row",
            height: "2px",

        }

    },

    steps: {
        display: "flex",
        flexDirection: "column",


        "@media (max-width: 480px)": {
            display: "none",
            gap: "12px"

        }
    },
    fromsectiondiv: {
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        "@media (max-width: 480px)": {
            display: "flex",
            flexDirection: "row",
        }
    },

});