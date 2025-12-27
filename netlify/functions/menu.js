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
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: response.statusText }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // MUST stringify
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
