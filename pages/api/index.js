export async function handler(url) {
  // const response = await fetch(url);
  // const data = await response.json();
  // return data.results
  try {
    const response = await fetch(url);
    const data = await response.json();
    // Check if data.response.docs exists and is an array, otherwise return an empty array
    return data.results ?? [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error
  }
}

export async function search(url) {
  const response = await fetch(url);
  const data = await response.json();
  const docs = data.response.docs ?? [];
  const results = docs.map((doc) => {
    return {
      title: doc?.headline?.main,
      url: doc.web_url,
      uri: doc.uri,
    };
  });
  return results;
}
