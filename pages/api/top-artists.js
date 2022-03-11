import { getTopArtists } from "@lib/spotify";

export default async function topArtists(_, res) {
  const artists = await getArtistsData();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({ artists });
}

export async function getArtistsData() {
  const response = await getTopArtists();
  const { items } = await response.json();

  const artists = items.map(artist => ({
    name: artist.name,
    imageUrl: artist.images[0].url,
    width: artist.images[0].width,
    height: artist.images[0].height
  }));

  return artists;
}
