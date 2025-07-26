import React, { useEffect } from "react";

interface HTMLContentProps {
  htmlContent: string;
}

const HTMLParser: React.FC<HTMLContentProps> = ({ htmlContent }) => {
  useEffect(() => {
    // Set target="_blank" for all links
    const links = document.querySelectorAll(".html-parser a");
    links.forEach((link) => link.setAttribute("target", "_blank"));

    // Add alt text to images if missing
    const images = document.querySelectorAll(".html-parser img");
    images.forEach((img) => {
      if (!img.getAttribute("alt")) {
        img.setAttribute("alt", "Product image");
      }
    });
  }, [htmlContent]);

  return (
    <div className="html-parser">
      <style>
        {`
          .html-parser {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
            
          
          .html-parser p {
            margin: 0 0 12px 0;
            font-size: 20px;
            //    font-weight: semi-bold;
               padding-top: 20px;
            //    padding-left: 15px
            
          }
          
          .html-parser ol {
            list-style-type: decimal; 
            padding-left: 20px; 
            margin: 12px 0;
          }
          
          .html-parser ul {
            list-style-type: disc; 
            padding-left: 20px; 
            margin: 12px 0;
          }
          
          .html-parser li {
            margin-bottom: 4px;
            font-size: 14px;
          }
          
          .html-parser a {
            text-decoration: underline;
            font-size: 14px;
            color: #3899F4; 
          }
          
          .html-parser table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0;
            font-size: 14px;
          }

          .html-parser th, .html-parser td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }

          .html-parser th {
            background-color: #f4f4f4;
            font-weight: bold;
          }

          .html-parser tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          .html-parser tr:hover {
            background-color: #f1f1f1;
          }

          .html-parser pre {
            background-color: #f5f5f5;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 10px;
            overflow-x: auto;
            font-size: 14px;
            line-height: 1.5;
            white-space: pre-wrap;
            margin: 12px 0;
          }

          .html-parser code {
            font-family: 'Courier New', Courier, monospace;
            background-color: #f5f5f5;
            border-radius: 3px;
            padding: 2px 4px;
            font-size: 14px;
            color: #d63384;
          }
          
          .html-parser blockquote {
            border-left: 4px solid #ddd;
            padding-left: 16px;
            margin: 16px 0;
            font-style: italic;
            color: #666;
          }

          .html-parser blockquote p {
            margin: 0;
            padding: 0;
          }
          
          .html-parser .detailmodule_image {
            margin: 20px 0;
            padding: 5px
          }
          
          .html-parser .detail-desc-decorate-image {
            max-width: 80%;
            height: 100%;
            margin: 8px 0;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          
         
          }
          
        //   .html-parser br {
        //     display: none;
        //   }
        `}
      </style>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default HTMLParser;
