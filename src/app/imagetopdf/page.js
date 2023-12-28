'use client'

import React, {useState } from 'react'
import styles from "@/styles/img2pdf.module.css"
import PrevImages from '@/components/PrevImages'
import { jsPDF } from 'jspdf';

function Page() {

    const [images, setImages] = useState([])
    const [pdfname, setPdfName] = useState('')


    function handleImages(e) {
        const imageFile = e.target.files[0]
        const blob = new Blob([imageFile], { type: 'image/png' })
        const imageURL = URL.createObjectURL(blob)

        setImages(prev => [...prev, {
            url: imageURL,
            imageName: imageFile.name
        }])

    }

    const generatePDF = () => {
        if (images.length === 0) {
          alert('Please select at least one image.')
          return
        }
    
        const pdf = new jsPDF('p', 'mm', 'a4')
    
        const addImagesToPdf = async () => {
          for (const image of images) {
            const img = document.createElement('img')
            img.src = image.url
    
            await new Promise((resolve) => {
              img.onload = () => {
                const imgWidth = pdf.internal.pageSize.getWidth()
                const imgHeight = pdf.internal.pageSize.getHeight()
    
                pdf.addImage(img, 'PNG', 0, 0, imgWidth, imgHeight)
                pdf.addPage()
                resolve()
              }
            })
          }
    
          pdf.deletePage(pdf.internal.getNumberOfPages())
          pdf.save(`${pdfname}.pdf`)
        }
    
        addImagesToPdf()
      }


    return (
        <main className={styles.main}>
            <div className={styles.submain}>
                <div className={styles.previmg}>
                    <h1 style={{ textAlign: 'center' }}>You can add multiple images to get a single PDF.</h1>
                    {
                        images.length > 0?images.map((val, index) => {
                            return <PrevImages key={index} src={val.url} imageName={val.imageName} />
                        }):<p>click '+' button to add images.</p>
                    }
                </div>
                <input type='file' accept='image/*' multiple id='chooseimages' style={{ display: 'none' }} onChange={handleImages} />
                <label title='add more images' htmlFor='chooseimages'>+</label>
            </div>
            <div className={styles.sideopts}>
                <input type='text' placeholder='Enter the name of the PDF' value={pdfname} onChange={(e) => {
                    setPdfName(e.target.value)
                }} />
                <button onClick={generatePDF}>Generate PDF</button>
            </div>
        </main>
    )
}

export default Page