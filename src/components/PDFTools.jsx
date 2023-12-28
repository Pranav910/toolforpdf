import React from 'react'
import "@/styles/pdftool.css"
import Link from 'next/link'

function PDFTools({ toolname, description, svg }) {
    return (
        <>
            <div className="toolmain">
                <Link href={"/imagetopdf"}>
                    {svg}
                    <h2>{toolname}</h2>
                    <p>{description}</p>
                </Link>
            </div>
        </>
    )
}

export default PDFTools