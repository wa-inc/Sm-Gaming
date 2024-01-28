fetch('https://v1-client-status-smgaming.glitch.me/')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, 'text/html');
    const statusElement = htmlDoc.querySelector('.Status');

    if (statusElement && statusElement.textContent.trim() === 'Opened') {
      console.log('Client status is Opened');
    } else {
      document.body.innerHTML = "";

      
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
      container.style.height = '100vh'; 


      const warningCard = document.createElement('div');
      warningCard.classList.add('warning-card');

      warningCard.innerHTML = `
        <h1>⚠️ SM Gaming Client ⚠️</h1>
        <p>You're Outdated</p>
        <p>Please Update to The Newest Version</p>
      `;

      container.appendChild(warningCard);

      document.body.appendChild(container);
    }
  })
  .catch(error => {
    document.body.innerHTML = ""; 

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '100vh'; 


    const errorCard = document.createElement('div');
    errorCard.classList.add('warning-card', 'error-card');


    errorCard.innerHTML = `
      <h1>❌ Error ❌</h1>
      <p>Unable to Fetch Client Status</p>
    `;

  
    container.appendChild(errorCard);


    document.body.appendChild(container);

    console.error('Error fetching client status:', error);
  });
