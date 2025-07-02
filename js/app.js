async function sendMessage() {
  const input = document.getElementById("msgInput").value;
  const responseDiv = document.getElementById("response");
  responseDiv.textContent = "Waiting on Sov B...";

  try {
    const res = await fetch("https://buddy-engine.onrender.com/api/talk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    responseDiv.textContent = "Sov B: " + data.reply;
  } catch (err) {
    responseDiv.textContent = "Error talking to Sov B.";
  }
}