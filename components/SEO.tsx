
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
    schema?: string; // JSON-LD schema string
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    url = "https://trimbakeshwarpujari.in",
    image = "/temple.png",
    schema
}) => {
    const siteTitle = "Pandit Nilesh Guruji | Trimbakeshwar Pujari";
    const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const finalDescription = description || "Official Trimbakeshwar Purohit for Kaal Sarp Puja, Narayan Nagbali, and Pitra Dosh Nivaran. 15+ Years of Experience. Call for Booking.";

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{finalTitle}</title>
            <meta name="title" content={finalTitle} />
            <meta name="description" content={finalDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={finalTitle} />
            <meta property="twitter:description" content={finalDescription} />
            <meta property="twitter:image" content={image} />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* JSON-LD Schema */}
            {schema && (
                <script type="application/ld+json">
                    {schema}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
