export default async function handler(req, res) {
  // Optional security check using your environment secret
  const { secret } = req.query;
  if (secret !== process.env.CRON_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    const PLACE_ID = 'YOUR_GOOGLE_PLACE_ID'; // Your Google Business Place ID

    const response = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();

    // TODO: Add your database storage logic here (e.g., Supabase / Vercel KV)

    return res.status(200).json({ 
      success: true, 
      message: "Reviews updated successfully", 
      count: data.reviews?.length || 0 
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update reviews' });
  }
}