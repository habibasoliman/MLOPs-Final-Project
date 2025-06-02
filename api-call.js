async function getPredictedLabel(processed_t) {
  try {
    // Send POST request to your deployed backend API
    const response = await fetch("https://mlops-handgesture-api-production.up.railway.app/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ landmarks: processed_t })
    });

    if (!response.ok) {
      console.error("API request failed:", response.statusText);
      return null;
    }

    const data = await response.json();
    console.log("Predicted label from API:", data.gesture);

    // Return the gesture predicted by the backend
    return data.gesture || null;
  } catch (error) {
    console.error("Error calling prediction API:", error);
    return null;
  }
}
