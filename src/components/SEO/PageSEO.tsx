import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

const PageSEO = ({
  title,
  description,
  keywords = "vikkmore, youtube music player, free music streaming, playlist manager",
  image = "https://vikkmore.com/icon-512.png"
}: PageSEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', description);
    }
    
    // Update keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogImage) ogImage.setAttribute('content', image);
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    if (twitterImage) twitterImage.setAttribute('content', image);
    
  }, [title, description, keywords, image, location.pathname]);

  return null;
};

export default PageSEO;