// netlify/functions/menu.js
export async function handler(event, context) {
  const restaurantId = event.queryStringParameters.id;
  const url = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&restaurantId=${restaurantId}`;

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!res.ok) {
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: res.statusText }),
      };
    }

    const data = await res.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // ✅ must stringify
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
