/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["localhost", "image.tmdb.org"],
	},
	env: {
		API_KEY: "42606fdf9f1bad9f581df7dc311c4930",
	},
};

module.exports = nextConfig;
