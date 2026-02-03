async function getJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Why don't scientists trust atoms? Because they make up everything!";
  }
}

module.exports = getJoke;
