
    'use strict';
    {
      const btn = document.getElementById('btn');

      btn.addEventListener('click', () => {
        // const results = ['大吉', '大吉', '大吉', '大吉', '大吉', '末吉'];
        // const n = Math.floor(Math.random() * results.length);
        // btn.textContent = results[n];
        const n = Math.random();
        if (n < 0.05) {
          btn.textContent = '大吉';
        } else if (n < .2) {
          btn.textContent = '中吉';
        } else {
          btn.textContent = '経';





        }

      });

      btn.addEventListener('mousedown', () => {
        btn.classList.add('pressed');
      });

      btn.addEventListener('mouseup', () => {
        btn.classList.remove('pressed');
      });







      }
