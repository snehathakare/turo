import React from 'react'
import './payout.css'

function Payout() {
    return (
        <div>
            <h3>Stripe</h3>
            <span>To complete your Turo listing, please set up your payout account with Stripe, a leading payout provider.</span>
            <div className="payout-div">
                <h4>Set up stripe account</h4>
                <p>To receive your earnings, you need to set up an account with Stripe, our payment provider.</p>
                <p>In the next step, Stripe will verify your identity and account information.</p>
                <p>Once your account is verified, you’ll provide your direct deposit information.</p>
                <a href="/">SET UP ACCOUNT</a>
            </div>
            <div><button className="primary-btn">NEXT</button></div>

        </div>
    )
}

export default Payout
