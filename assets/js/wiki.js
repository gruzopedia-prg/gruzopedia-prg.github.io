(function () {
  'use strict';

  // Spis treści jest tworzony automatycznie z nagłówków ## i ### artykułu.
  var article = document.getElementById('article-body');
  var toc = document.getElementById('toc');
  var tocList = document.getElementById('toc-list');
  if (article && toc && tocList) {
    var headings = Array.prototype.slice.call(article.querySelectorAll('h2, h3'));
    if (headings.length) {
      var used = {};
      var majorNumber = 0;
      var minorNumber = 0;
      headings.forEach(function (heading, index) {
        if (!heading.id) {
          var id = (heading.textContent || 'sekcja').toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/ł/g, 'l').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          id = id || 'sekcja-' + (index + 1);
          var base = id;
          var counter = 2;
          while (used[id] || document.getElementById(id)) { id = base + '-' + counter++; }
          heading.id = id;
        }
        used[heading.id] = true;
        var item = document.createElement('li');
        var isMinor = heading.tagName.toLowerCase() === 'h3';
        if (isMinor && majorNumber > 0) { minorNumber++; item.className = 'toc-sub'; }
        else { majorNumber++; minorNumber = 0; }
        var number = document.createElement('span');
        number.className = 'toc-number';
        number.textContent = isMinor && majorNumber > 0 ? majorNumber + '.' + minorNumber : String(majorNumber);
        item.appendChild(number);
        var link = document.createElement('a');
        link.href = '#' + encodeURIComponent(heading.id);
        link.textContent = heading.textContent;
        item.appendChild(link);
        tocList.appendChild(item);
      });
      toc.hidden = false;
      var toggle = document.getElementById('toc-toggle');
      if (toggle) {
        toggle.addEventListener('click', function () {
          var isHidden = tocList.hidden;
          tocList.hidden = !isHidden;
          toggle.textContent = isHidden ? '[ukryj]' : '[pokaż]';
        });
      }
    }
  }

  // Wyszukiwanie filtruje gotową tabelę, bez serwera ani zewnętrznych bibliotek.
  var search = document.getElementById('catalog-search');
  if (search) {
    var rows = Array.prototype.slice.call(document.querySelectorAll('.car-row'));
    var counter = document.getElementById('catalog-counter');
    var empty = document.getElementById('catalog-empty');
    function normalise(value) {
      return (value || '').toLowerCase().normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l').trim();
    }
    function filterCars() {
      var query = normalise(search.value);
      var count = 0;
      rows.forEach(function (row) {
        var show = normalise(row.getAttribute('data-search')).indexOf(query) !== -1;
        row.hidden = !show;
        if (show) count++;
      });
      if (counter) counter.textContent = count + ' z ' + rows.length + ' haseł';
      if (empty) empty.hidden = count > 0 || rows.length === 0;
    }
    search.addEventListener('input', filterCars);
    try {
      var params = new URLSearchParams(window.location.search);
      var query = params.get('q');
      if (query) { search.value = query; }
    } catch (error) { /* wyszukiwanie bez parametrów też działa */ }
    filterCars();
  }
})();
