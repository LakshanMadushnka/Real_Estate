/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'ckmmbmpnwepvkslpnslt.supabase.co', // ✅ Supabase images
      'img.clerk.com'                    // ✅ Clerk profile images
    ],
  },
};

export default nextConfig;
