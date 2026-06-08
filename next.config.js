/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
  env: {
    BUSINESS_NAME: 'Shiv Hospital Eye & Skin Care',
    BUSINESS_PHONE: '094262 08000',
    BUSINESS_ADDRESS: '201, Sanjeevani complex, S T road, near Mayur medical, Sadhana Colony, Jamnagar, Gujarat 361006',
  },
};

module.exports = nextConfig;
