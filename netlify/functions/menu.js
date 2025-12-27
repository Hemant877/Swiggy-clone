export async function handler(event) {
  const restaurantId = event.queryStringParameters?.id;

  if (!restaurantId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Restaurant ID is required" }),
    };
  }

  const url = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${restaurantId}`;

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
        "Referer": "https://www.swiggy.com/",
        "Origin": "https://www.swiggy.com",
      },
    });

    const text = await res.text();

    // If Swiggy blocks, it returns HTML
    if (text.startsWith("<")) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Blocked by Swiggy", raw: text.slice(0, 100) }),
      };
    }

    const data = JSON.parse(text);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
