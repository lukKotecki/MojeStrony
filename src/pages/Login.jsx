import React from 'react'

export default function Login(){



    return (
        <div className='login'>
            <form>
                <label htmlFor='login'>Login:</label> <br/>
                <input id='login' type='text'/> <br />
                <label htmlFor='login'>Hasło:</label> <br/>
                <input id='login' type='text'/>


            </form>
        </div>
    )
}