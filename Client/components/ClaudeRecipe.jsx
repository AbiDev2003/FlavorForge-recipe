import ReactMarkdown from 'react-markdown'
import {jsPDF} from 'jspdf'
export default function ClaudeRecipe(props){
    const handlePDFdownload = () => {
        // Create a new jsPDF instance
        const doc = new jsPDF();
        
        // Set font size and style
        doc.setFontSize(16);
        doc.text("Recipe", 20, 20);
        
        // Convert markdown to plain text (remove markdown syntax)
        const plainText = props.receipe
            .replace(/#{1,6}\s/g, '') // Remove headers
            .replace(/\*\*/g, '') // Remove bold
            .replace(/\*/g, '') // Remove italic
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1'); // Remove links, keep text
        
        // Split text into lines that fit the page width
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 20;
        const maxLineWidth = pageWidth - (margin * 2);
        
        // Split text by lines and wrap long lines
        const lines = doc.splitTextToSize(plainText, maxLineWidth);
        
        // Add text to PDF with proper line height
        doc.setFontSize(12);
        let yPosition = 30;
        const lineHeight = 7;
        const pageHeight = doc.internal.pageSize.getHeight();
        
        lines.forEach(line => {
            // Check if we need a new page
            if (yPosition + lineHeight > pageHeight - margin) {
                doc.addPage();
                yPosition = margin;
            }
            
            doc.text(line, margin, yPosition);
            yPosition += lineHeight;
        });
        
        // Save the PDF
        doc.save("recipe.pdf");
    }
    return (
        <section className='suggested-recipe-container' aria-live='polite'>
            <ReactMarkdown>{props.receipe}</ReactMarkdown>
            <p className='warning-note'>You may download the receipe as PDF, before RESET the response. You can't recover the response once you click on RESET button </p>
            <div>
                <button className='close-btn' onClick={props.onReset}>🔄 RESET</button>
                <button className='pdf-download-btn' onClick={handlePDFdownload}>⬇️ Download as PDF</button>
            </div>
        </section>
    )
}
