function create(words) {
   words.forEach(section => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = section;
      p.style.display = 'none';
      div.appendChild(p);
      
      const container = document.querySelector('#content');
      container.appendChild(div);
      div.addEventListener('click', () => {
         p.style.display = 'block';
      })
      
   });

}