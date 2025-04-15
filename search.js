document.querySelector('.search-button').addEventListener('click', function () {
  const searchInput = document.querySelector('.search-bar');
  const query = searchInput.value.trim().toLowerCase();

  const content = document.getElementById('content');
  content.innerHTML = ''; // Pastro përmbajtjen e mëparshme

  // Kontrollo nëse fjala është më e shkurtër se 3 shkronja
  if (query.length <= 3) {
    content.innerHTML = `<p class="no-result">Ju lutem shkruani një fjalë kyç " " ;</p>`;
    return;
  }

  // Filtrimi i rezultateve
  const results = searchableData.filter(entry =>
    entry.title.toLowerCase().includes(query) ||
    entry.content.toLowerCase().includes(query)
  );

  // Vetëm nëse ka rezultate, shto titullin
  if (results.length > 0) {
    const heading = document.createElement('h1');
    heading.textContent = `Rezultatet e kërkimit për "${query}";`;
    content.appendChild(heading);
  }

  const resultsWrapper = document.createElement('div');
  resultsWrapper.classList.add('results-wrapper');
  content.appendChild(resultsWrapper);

  if (results.length > 0) {
    results.forEach(result => {
      const section = document.createElement('div');
      section.classList.add('search-result');
      section.innerHTML = `<h2>${result.title}</h2><p>${result.content}</p>`;
      resultsWrapper.appendChild(section);
    });
  } else {
    // Në vend që të fshijmë gjithçka, shtojmë mesazhin brenda wrapper-it
    const noResult = document.createElement('p');
    noResult.classList.add('no-result');
    noResult.textContent = `Nuk ka rezultate për fjalën "${query}";`;
    resultsWrapper.appendChild(noResult);
  }

  // Fshi përmbajtjen e inputit
  searchInput.value = '';

  // Ruaj seksionin aktual
  localStorage.setItem('currentSection', 'search');
});
