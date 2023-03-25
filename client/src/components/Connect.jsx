import React, { useContext } from "react"
import "./styles.css"
import Loader from "./Loader"

import { TipMeContext } from "./../context/TipMeContext"

export default function Connect() {
    const { connectWallet, isLoading } = useContext(TipMeContext)

    return (
        <div className="tipMe">
            {isLoading ? (
                <Loader />
            ) : (
                <React.Fragment>
                    <div className="tipTitle">Tip Management System</div>
                    <button type="button" onClick={connectWallet} className="submitButton">
                        Connect Wallet
                    </button>
                </React.Fragment>
            )}
        </div>
    )
}
