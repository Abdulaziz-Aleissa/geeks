document
  .getElementById("chatForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userQuery = document.getElementById("userQuery").value;
    fetchChatGPTResponse(userQuery);
    document.getElementById("userQuery").value = ""; // Clear the input after submission
  });

async function fetchChatGPTResponse(query) {
  const url = "https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask";
  const headers = {
    "content-type": "application/json",
    "X-RapidAPI-Key": "api_here",
    "X-RapidAPI-Host": "chatgpt-gpt4-ai-chatbot.p.rapidapi.com",
  };
  const data = { query: query };

  try {
    const response = await axios.post(url, data, { headers: headers });
    displayResponse(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayResponse(data) {
  const responseDiv = document.getElementById("chatGPTResponse");
  responseDiv.innerHTML += `
      <div class="chatbot-message">
          <span class="chatbot-icon">🤖</span>
          <p>Chatbot: ${data.response}</p>
      </div>`;
}

// Close modal functionality
document
  .querySelector("#chatGPTModal .close")
  .addEventListener("click", function () {
    document.getElementById("chatGPTModal").style.display = "none";
  });

// Open modal functionality
document
  .querySelector(".get-started-btn.scrollto")
  .addEventListener("click", function () {
    document.getElementById("chatGPTModal").style.display = "block";
  });
