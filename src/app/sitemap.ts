export default async function sitemap() {
  const baseUrl = "https://vikkmore.vercel.app";
  const lastModified = new Date();

  const paths = ["", "/home", "/about", "/settings", "/profile", "/liked", "/search"];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "daily",
    priority: path === "" ? 1 : 0.8,
  }));
}
