import React from 'react'
import bags from "../bags.gif"
const Thanks = () => {
   
    document.body.style.backgroundColor = "rgb(207 212 255 / 61%)"
   

    return (
        <div style={{ background: "rgb(207 212 255 / 61%)", height: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "70%", paddingTop: "103px", margin: "auto", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", padding: "46px", borderRadius: "12px", textAlign: "center" }}>


                    <div>
                        <img src={bags} alt="" width={"56px"} />
                    </div>
                    <div>
                        <p style={{ fontSize: "20px", fontWeight: "700" }}>Thanks For Shopping</p>
                    </div>
                    <div>
                        <p style={{ fontSize: "12px", fontWeight: "700", textAlign: "center" }}>
                            Wishing you joy with every new thing you've bought,
                            <br />
                            <br />
                            May your shopping experience bring happiness unsought.
                            <br />
                            <br />
                            Enjoy your purchases and cherish them with delight,
                            <br />
                            <br />
                            May they bring you joy morning, noon, and night!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Thanks