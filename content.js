fetch('https://v1-client-status-smgaming.glitch.me/')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, 'text/html');
    const statusElement = htmlDoc.querySelector('.Status');

    if (statusElement && statusElement.textContent.trim() === 'Opened') {
      // If status is Opened, do nothing
      console.log('Client status is Opened');
    } else {
      // If status is not Opened, remove all content and display the warning card
      document.body.innerHTML = ""; // Remove all existing content

      // Create a container for the warning card and center it
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
      container.style.height = '100vh'; // Make the container full height

      // Create the warning card
      const warningCard = document.createElement('div');
      warningCard.classList.add('warning-card');

      // Content of the warning card
      warningCard.innerHTML = `
        <h1>⚠️ SM Gaming Client ⚠️</h1>
        <p>You're Outdated</p>
        <p>Please Update to The Newest Version</p>
      `;

      // Append the warning card to the container
      container.appendChild(warningCard);

      // Append the container to the body
      document.body.appendChild(container);
    }
  })
  .catch(error => {
    // If there's an error fetching the status, display an error message
    document.body.innerHTML = ""; // Remove all existing content

    // Create a container for the error card and center it
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '100vh'; // Make the container full height

    // Create the error card
    const errorCard = document.createElement('div');
    errorCard.classList.add('warning-card', 'error-card');

    // Content of the error card
    errorCard.innerHTML = `
      <h1>❌ Error ❌</h1>
      <p>Unable to Fetch Client Status</p>
    `;

    // Append the error card to the container
    container.appendChild(errorCard);

    // Append the container to the body
    document.body.appendChild(container);

    console.error('Error fetching client status:', error);
  });
