// Code Keypad Component Here

function Keypad (){
    const handleChange = () => {
        console.log('Entering password...');
    }

    return (
        <>
            <form method="get">
                <input type="password" onChange={handleChange} />
            </form>
        </>
    )
}

export default Keypad;