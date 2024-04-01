import React from 'react'
import sites from '../assets/sites.js'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

export default function Moje(){

let sitesToRender = sites.map(site => 
    <div key={nanoid()} className='site'>
        <Link to={site.url} target='_blank' >{site.name}</Link>
        
    </div>)

    return (
        <article>
            {sitesToRender}

        </article>
    )
}