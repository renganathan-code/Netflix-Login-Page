import Success from "../assets/images/success.png"
function Landing()
{
    return(
        <>
        <div className='card'>
                <img src={Success} alt="success-png" />
                <h2>Your Login was Successfully Completed</h2>
        </div>
        </>
    )
}

export default Landing;
