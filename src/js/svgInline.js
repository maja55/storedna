import React from 'react';

export const defaultBox = (color) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.99 126" className="overlay-box pos-absolute w-100">
      <g id="box">
        <rect id="box" className="box" style={{fill:color}} width="267.99" height="126"/>
      </g>
    </svg>
  );
}


export const peeledBoxLeft = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 267.99 126" className="overlay-box pos-absolute w-100">
      <defs>
        <linearGradient id="linear-gradient" x1="747.76" y1="43.95" x2="686.39" y2="-31.65" gradientTransform="matrix(1, 0, 0, -1, -656.62, 95.25)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff"/>
          <stop offset="0.09" stopColor="#faf7f3"/>
          <stop offset="0.25" stopColor="#eee2d3"/>
          <stop offset="0.46" stopColor="#d9c0a0"/>
          <stop offset="0.71" stopColor="#bd915a"/>
          <stop offset="0.93" stopColor="#a36518"/>
        </linearGradient>
      </defs>
      <g id="box-peel-left" className="overlay-box">
        <g id="box">
          <path className="box-peel" fill="#f59b41" d="M268,0H0V58a7.15,7.15,0,0,0,6.41,7.11A72,72,0,0,0,54.49,52.25s21.44,50.42,57.17,66.92c4.39,2,12.51,1.83,39.31,1.83H268Z"/>
        </g>
        <path id="corner" className="corner" fill="url(#linear-gradient)" d="M111.66,119.16,4.74,64.59C25,68.75,54.49,52.25,54.49,52.25S76.83,99,111.66,119.16Z"/>
      </g>
    </svg>
  );
}

export const peeledBoxRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 267.99 126" className="overlay-box pos-absolute w-100">
      <defs>
        <linearGradient id="linear-gradient" x1="747.76" y1="43.95" x2="686.39" y2="-31.65" gradientTransform="translate(924.62 95.25) rotate(180)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff"/>
          <stop offset="0.09" stopColor="#faf7f3"/>
          <stop offset="0.25" stopColor="#eee2d3"/>
          <stop offset="0.46" stopColor="#d9c0a0"/>
          <stop offset="0.71" stopColor="#bd915a"/>
          <stop offset="0.93" stopColor="#a36518"/>
        </linearGradient>
      </defs>
      <g id="box-peel-left">
        <g id="box">
          <path className="box-peel" fill="#f59b41" d="M0,0H268V58a7.15,7.15,0,0,1-6.41,7.11A72,72,0,0,1,213.5,52.25s-21.44,50.42-57.17,66.92c-4.39,2-12.51,1.83-39.31,1.83H0Z"/>
        </g>
        <path id="corner" className="corner" fill="url(#linear-gradient)" d="M156.33,119.16,263.26,64.59C243,68.75,213.5,52.25,213.5,52.25S191.17,99,156.33,119.16Z"/>
      </g>
    </svg>
  );
}

export const categoryItem = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.4 36.35" className="pos-absolute actionboard-item category-item">
      <g className="shoe-label" id="shoe" data-name="Layer 2"><g id="categories"><path d="M5.76,36.23V31.08l-2,5.15h-.5l-2-5.15v5.15H0V29.56H1.65l1.82,4.58,1.81-4.58H6.93v6.67Z"/><path d="M8.35,36.23V29.56h4.57v1H9.52v1.72h3.33v1H9.52V35.2h3.4v1Z"/><path d="M18.77,36.23l-3.48-4.77v4.77H14.12V29.56h1.2l3.41,4.62V29.56H19.9v6.67Z"/><path d="M21.66,32.07l-.48-.38a1.62,1.62,0,0,0,.72-.94l-.17,0a.6.6,0,0,1-.59-.63.68.68,0,0,1,.68-.68.81.81,0,0,1,.77.91A2.11,2.11,0,0,1,21.66,32.07Z"/><path d="M23,35.58l.48-.75a2.48,2.48,0,0,0,1.63.67c.63,0,1-.26,1-.64,0-.95-2.92-.27-2.92-2.13,0-.79.68-1.46,1.9-1.46a2.76,2.76,0,0,1,1.87.67l-.44.74a2,2,0,0,0-1.43-.58c-.55,0-.89.26-.89.6,0,.85,2.92.21,2.92,2.13,0,.86-.71,1.51-2,1.51A2.92,2.92,0,0,1,23,35.58Z"/><path d="M34.58,36.23l-1.47-2.49H31.94v2.49H30.77V29.56H33.7a2,2,0,0,1,2.19,2.09,1.88,1.88,0,0,1-1.59,2l1.64,2.62Zm.11-4.59a1,1,0,0,0-1.14-1H31.94v2.12h1.61A1.05,1.05,0,0,0,34.69,31.64Z"/><path d="M37.06,33.59v-4h1.19v4a1.7,1.7,0,1,0,3.4,0v-4h1.19v4a2.57,2.57,0,0,1-2.89,2.76A2.58,2.58,0,0,1,37.06,33.59Z"/><path d="M48.91,36.23l-3.48-4.77v4.77H44.26V29.56h1.2l3.41,4.62V29.56H50v6.67Z"/><path d="M56.11,36.23l-3.48-4.77v4.77H51.46V29.56h1.2l3.41,4.62V29.56h1.17v6.67Z"/><path d="M58.66,36.23V29.56h1.17v6.67Z"/><path d="M65.9,36.23l-3.48-4.77v4.77H61.25V29.56h1.2l3.41,4.62V29.56H67v6.67Z"/><path d="M68.16,32.9a3.35,3.35,0,0,1,3.5-3.45,3.12,3.12,0,0,1,2.68,1.38l-1,.55a2.15,2.15,0,0,0-1.73-.89,2.41,2.41,0,0,0,0,4.82,2.4,2.4,0,0,0,1.58-.6v-1h-2v-1H74.4v2.49a3.6,3.6,0,0,1-2.74,1.22A3.36,3.36,0,0,1,68.16,32.9Z"/><path className="shoe shoe-thin-line" d="M19.33,6.19h.06c0-3.83,0-5.12,1.16-5.72a.47.47,0,0,1,.54,0c.43.35.27,1.73.27,1.74h.06c0-.06.17-1.44-.29-1.81a.53.53,0,0,0-.61,0c-1.15.62-1.24,1.92-1.19,5.79Z"/><path className="shoe shoe-thin-line" d="M20.79.35c1.06-.43.82,1.64.82,1.64s-.2.12-.21.17S21.6.4,20.79.35"/><path className="shoe shoe-thin-line" d="M21,.4s-1.47,1.23-1.24,4.7a9.82,9.82,0,0,0-.38,1s0-1.82,0-2.86S19.67.35,21,.35"/><path className="shoe shoe-thin-line" d="M47.46,20.24c1.7,0,3.56-.06,5.37-.21,5.19-.45,8.72-1.53,10.5-3.22a.7.7,0,0,0,.23-.54h-.32a.32.32,0,0,1-.1.25h0c-1.7,1.62-5.27,2.71-10.32,3.14a68,68,0,0,1-9.89.06,42,42,0,0,1-8.08-1.53L34.17,18a14,14,0,0,0-2.48-.46,30.36,30.36,0,0,1-4.84-.94,49.07,49.07,0,0,0-10.75-1.28v.35A49,49,0,0,1,26.77,17a30.52,30.52,0,0,0,4.88.95,13.77,13.77,0,0,1,2.44.45l.66.17a42.1,42.1,0,0,0,8.13,1.54c1.16.09,2.77.15,4.57.15Z"/><path className="shoe shoe-thin-line" d="M26.76,16.84h.32A5.26,5.26,0,0,0,25,12.77c-1.42-.94-2.81-1.78-3.56-2.23l-.61-.37c-.1-.06-.32-.17-.6-.31a6.7,6.7,0,0,1-1.37-.79h0l-.3.11c.07.23.51.48,1.54,1,.25.12.48.24.56.29l.62.38c.8.48,2.14,1.29,3.55,2.23a5,5,0,0,1,2,3.76Z"/><path className="shoe shoe-thin-line" d="M63.22,15.62c.13,1.77-.29,2.36-3.68,3.43A55.44,55.44,0,0,1,44.8,20.89a71.9,71.9,0,0,1-10.93-1.52l-.78-.15a6.82,6.82,0,0,0-1.74-.16c-.69,0-1.4,0-4.57-.88a46.77,46.77,0,0,0-11-1.47c0-.19,0-.49.06-.68s.14-.2.26-.28a.28.28,0,0,0,.16-.15l.71-2,.26,0,.12-.1c.12-.29,1.23-3.18,1.37-3.66.05-.19.08-.34.12-.49s.1-.49.25-1a12,12,0,0,0,.46-2.15,14.94,14.94,0,0,1,1.85-3.73l.06-.07c.27-.33.31-.39.68-.28s.89.26.94,2.32a3.25,3.25,0,0,0,1.62,3.06c.55.28,2.09,0,3.91-2,1.62-1.76,2.43-1.94,2.78-2l.14,0c.3-.09.36-.22.46-.5L32,2.77a6.39,6.39,0,0,0,.33-1.42c0-.09,0-.09.11-.17A2.24,2.24,0,0,0,32.7,1,1.65,1.65,0,0,1,33.86.92h0c.23,0,.27,0,.8.77a13,13,0,0,0,2.59,2.39l.23.12c.2.1.2.11.25.17a.3.3,0,0,1,.05.13,2,2,0,0,0,.13.33,6.91,6.91,0,0,0,1.78,1.29,6.24,6.24,0,0,0,1.25.47,1.5,1.5,0,0,1,.89.88c.28.54.48.55.83.53h.26a1.34,1.34,0,0,1,.89.51.07.07,0,0,1,0,0A.76.76,0,0,0,44,9c.2.24.56.24,1,.24a4.38,4.38,0,0,1,.62,0c.19,0,.22.11.21.44a.61.61,0,0,0,.16.55,15.56,15.56,0,0,0,2.11.82l.71.25.57.17.29.07a2.61,2.61,0,0,1,1.11.44,4.64,4.64,0,0,0,2.31.79,25.26,25.26,0,0,1,3.7.88,18.4,18.4,0,0,0,4.55.52,2,2,0,0,1,1.88,1.42ZM39.86,23.79a.25.25,0,0,0-.19.14c-.06.1-.12.17-.23.17h-1a.56.56,0,0,1-.16-.27c0-.07,0-.2-.14-.22s-.13,0-.18.12a.41.41,0,0,1-.34.24,6,6,0,0,1-1.26,0,1.67,1.67,0,0,1-.12-.21L36,23.68l-.11.2s0,.08-.12.11a6.88,6.88,0,0,1-1.23,0,.39.39,0,0,1-.15-.15c0-.15-.07-.19-.12-.21s-.14,0-.2.12-.1.19-.25.19c-.3,0-.63,0-.77,0a1.6,1.6,0,0,1-.39-.55s0-.18-.16-.2-.18.1-.22.18a.68.68,0,0,1-.45.44,3.15,3.15,0,0,1-1.11,0,1.08,1.08,0,0,1,0-.13.24.24,0,0,0-.05-.25c-.09-.08-.19,0-.26,0a1.68,1.68,0,0,1-1.15.23.76.76,0,0,1-.4-.11v0a.26.26,0,0,0,0-.25c-.07-.09-.21-.11-.4-.06l-.08.05a.63.63,0,0,0-.09.14l-.45,0h-.6c-.12,0-.27-.14-.33-.21h0a.21.21,0,0,0,0-.26c-.09-.14-.22-.1-.61.11a1.59,1.59,0,0,1-.28.13,5.59,5.59,0,0,1-1.2,0,.34.34,0,0,1,0-.14.21.21,0,0,0-.06-.24c-.1-.07-.2-.06-.58.33A7,7,0,0,1,22.73,23a.11.11,0,0,1,0-.13.22.22,0,0,0,.05-.26.16.16,0,0,0-.19-.09.91.91,0,0,0-.47.47,8.13,8.13,0,0,1-1.53-.31h0l-.09,0h-.06c0-.05.07-.2,0-.29s-.21,0-.31.14a1.49,1.49,0,0,1-.23.24c-.57-.08-1.12-.2-1.13-.21h0C16.07,22,15.29,21,15.09,20.55a2.24,2.24,0,0,1-.21-1.34c0-.11,0-.22,0-.35s0-.32,0-.44c0-.68,0-.69.18-.75a1.36,1.36,0,0,0,.6-.59,46.68,46.68,0,0,1,11,1.46c3.21.94,3.95.91,4.66.89a6.52,6.52,0,0,1,1.68.15l.77.15a72,72,0,0,0,11,1.53A55.89,55.89,0,0,0,59.63,19.4c2.32-.74,3.37-1.29,3.75-2.24v0h0v0a2.85,2.85,0,0,1-.69,1.71.16.16,0,0,0-.16-.12c-.15,0-.18.17-.2.35a3.37,3.37,0,0,1-1.6,1.06.17.17,0,0,0-.06-.09.15.15,0,0,0-.17,0,.45.45,0,0,0-.16.29,8,8,0,0,1-2.28,1.05.18.18,0,0,0-.07-.18c-.08-.05-.16,0-.23.06a1.38,1.38,0,0,1-.71.5.19.19,0,0,0-.09-.17c-.12-.07-.22,0-.32.14a1.4,1.4,0,0,1-.2.2,2.32,2.32,0,0,1-.58.24c0-.11-.05-.18-.13-.2s-.18.1-.2.15-.06.16-.11.18h0a3.41,3.41,0,0,1-.83.22.18.18,0,0,0-.06-.15.15.15,0,0,0-.23,0,1,1,0,0,1-.52.32l-.18,0a3.13,3.13,0,0,1-.5.09l-.23-.16a.69.69,0,0,1-.27.23l-.12,0a3,3,0,0,1-.91.18c-.08,0-.1,0-.1,0l-.3-.12c-.06.12-.19.29-.27.29h-.23a4,4,0,0,0-.65,0l-.12-.09-.1,0c-.29,0-.35.1-.37.13l0,0s-.09.14-.5.22a2.45,2.45,0,0,1-.79.06l0,0a.19.19,0,0,0-.07-.19c-.17-.12-.42.19-.47.25s-.12.16-.54.17h-.87a.2.2,0,0,0-.1-.21c-.12-.06-.22,0-.35.19l-.14.15H44.26a.6.6,0,0,1-.12-.12l-.08-.14h-.28a.7.7,0,0,1-.58.39H42.06A.85.85,0,0,1,42,24c0-.12,0-.19-.12-.22s-.19.06-.22.11a.72.72,0,0,1-.19.2,4.9,4.9,0,0,1-1.42,0L40,23.91a.19.19,0,0,0-.15-.12h0Zm-.84.67h.43a.52.52,0,0,0,.4-.21l.06.07.09,0a4.42,4.42,0,0,0,1.68,0l.09-.07,0,.07.15.12H43.2a.93.93,0,0,0,.72-.36,1,1,0,0,0,.2.18l.09,0h1.37c.1,0,.18-.09.31-.23a.27.27,0,0,0,.13.1h0s.5,0,.95,0,.66-.15.77-.29l.05-.06A.5.5,0,0,0,48,24a2.65,2.65,0,0,0,.91-.05c.47-.08.62-.22.71-.35l.1,0,.12.09.11,0a3.64,3.64,0,0,1,.66,0h.24a.55.55,0,0,0,.39-.23.47.47,0,0,0,.22.1,2.74,2.74,0,0,0,1.05-.19l.12,0a.61.61,0,0,0,.22-.11.25.25,0,0,0,.17.06,2.87,2.87,0,0,0,.6-.09l.18,0a1.21,1.21,0,0,0,.51-.24l.07.06a3.18,3.18,0,0,0,1.1-.24h0a.41.41,0,0,0,.16-.12l0,0a2.5,2.5,0,0,0,.88-.32,1.05,1.05,0,0,0,.18-.15l0,0a.18.18,0,0,0,.19,0,1.67,1.67,0,0,0,.84-.45.23.23,0,0,0,.09.06H58a6.74,6.74,0,0,0,1.65-.61,3.23,3.23,0,0,0,1-.61,3.55,3.55,0,0,0,2-1.25v0a.24.24,0,0,0,.12,0l0,0a3.09,3.09,0,0,0,.94-2.1.38.38,0,0,0-.13-.32.25.25,0,0,0-.13-.05,4.25,4.25,0,0,0,.05-1.26v0a2.36,2.36,0,0,0-2.2-1.69,18,18,0,0,1-4.45-.51,25.6,25.6,0,0,0-3.77-.9,4.23,4.23,0,0,1-2.13-.7,2.62,2.62,0,0,0-1.26-.53l-.28-.07L48.89,11l-.71-.25a20.61,20.61,0,0,1-2-.77.81.81,0,0,1,0-.25c0-.25,0-.72-.49-.8a4.79,4.79,0,0,0-.66,0c-.31,0-.62,0-.73-.13s-.15-.22-.15-.26a.57.57,0,0,0,0-.11,1.56,1.56,0,0,0-1.19-.74h-.28c-.28,0-.33,0-.53-.35-.39-.75-.82-1-1.11-1a6,6,0,0,1-1.18-.45,7.54,7.54,0,0,1-1.63-1.14,1.63,1.63,0,0,1-.1-.26A.73.73,0,0,0,38,4.16a.83.83,0,0,0-.35-.27l-.22-.12a13,13,0,0,1-2.48-2.3c-.57-.78-.66-.85-1-.9h0c-.5-.09-1.16-.13-1.42.15a1.64,1.64,0,0,1-.19.17.53.53,0,0,0-.24.42,6,6,0,0,1-.31,1.31l-.08.22c-.08.23-.09.24-.25.29l-.11,0c-.4.09-1.24.28-2.94,2.11s-3.18,2.1-3.56,1.91a2.9,2.9,0,0,1-1.44-2.74c0-2-.59-2.48-1.17-2.65s-.71,0-1,.39l-.06.07a15.65,15.65,0,0,0-1.94,3.91,11.94,11.94,0,0,1-.45,2.09,9.94,9.94,0,0,0-.25,1c0,.16-.06.29-.11.46-.11.4-1.08,2.93-1.32,3.52l-.27,0-.13.11-.73,2,0,0a.75.75,0,0,0-.44.52,8.2,8.2,0,0,0-.07.87,1.1,1.1,0,0,1-.46.49c-.39.15-.39.41-.39,1.09,0,.13,0,.27,0,.44s0,.25,0,.35a2.6,2.6,0,0,0,.25,1.52c.23.46,1.07,1.6,3.87,2.11.05,0,.6.14,1.17.22.12,0,.23-.07.35-.2a.41.41,0,0,0,.31.13,4.8,4.8,0,0,0,1.8.29.21.21,0,0,0,.1-.17v0a.62.62,0,0,0,.06.12c0,.09.21.25,1.83.25l.11,0,.16-.15a.48.48,0,0,0,0,.09v0c0,.1.12.16.68.17a7.34,7.34,0,0,0,.82,0,1.42,1.42,0,0,0,.39-.17l.12-.06a.42.42,0,0,0,.09.15.81.81,0,0,0,.58.32h.61l.57-.06.12-.18a.4.4,0,0,0,0,.16c.08.16.29.25.65.29a2.08,2.08,0,0,0,1.14-.16.32.32,0,0,0,0,.2l.09.07a3.56,3.56,0,0,0,1.36.07.89.89,0,0,0,.57-.42,2.74,2.74,0,0,0,.43.52l.11,0s.44,0,.81,0a.51.51,0,0,0,.39-.15.85.85,0,0,0,.23.18l.06,0a7.48,7.48,0,0,0,1.35,0,.48.48,0,0,0,.24-.12l0,0,.11.07a6.47,6.47,0,0,0,1.41,0,.79.79,0,0,0,.39-.18,1.11,1.11,0,0,0,.23.27l.1,0a6.57,6.57,0,0,0,.67,0Z"/><path className="shoe shoe-thin-line" d="M47.42,10.95a1.68,1.68,0,0,0,.34,0l-.06-.35a3.66,3.66,0,0,1-1.54-.19,5.18,5.18,0,0,1-1.34-.6,8.19,8.19,0,0,0-1-.53l-.36-.15A8.6,8.6,0,0,1,42,8.36l-.32-.19a7.55,7.55,0,0,1-1.34-1,5,5,0,0,0-1.4-.83,1.92,1.92,0,0,1-1-.74,4.22,4.22,0,0,0-2.31-1.23l-.23-.06h0a.64.64,0,0,0-.65-.4h-.25a1.69,1.69,0,0,1-1.14-.34,3.22,3.22,0,0,0-1.75-.41l0,.35a3,3,0,0,1,1.57.35,2,2,0,0,0,1.3.39h.24c.3,0,.34.11.38.2l.06.1c0,.06.1.08.38.15a4.08,4.08,0,0,1,2.13,1.09,2.23,2.23,0,0,0,1.16.86,4.74,4.74,0,0,1,1.32.78,7.6,7.6,0,0,0,1.38,1.05l.32.19a9.13,9.13,0,0,0,1.51.75l.36.15a8.22,8.22,0,0,1,1,.51,5.59,5.59,0,0,0,1.41.63,4.79,4.79,0,0,0,1.34.22Z"/><path className="shoe shoe-thin-line" d="M26.43,10a4,4,0,0,0,1.43-.24C30.92,8.6,35,4.68,35.17,4.51L35,4.25s-4.2,4-7.2,5.17S20.4,7.21,19.46,6.33l-.21.27a16.61,16.61,0,0,0,3.43,2.32A8.5,8.5,0,0,0,26.43,10Z"/><polygon className="shoe shoe-thin-line" points="40.12 7.19 40.54 6.35 40.26 6.17 39.84 7.01 40.12 7.19"/><polygon className="shoe shoe-thin-line" points="39.19 6.67 39.61 5.92 39.34 5.73 38.91 6.47 39.19 6.67"/><polygon className="shoe shoe-thin-line" points="38.71 6.48 39.28 5.75 39.03 5.51 38.47 6.25 38.71 6.48"/><polygon className="shoe shoe-thin-line" points="38.09 5.93 38.56 5.23 38.3 5.02 37.83 5.72 38.09 5.93"/><polygon className="shoe shoe-thin-line" points="44.72 10.13 44.95 10 45.12 9.09 44.81 9.02 44.68 9.7 44.38 9.54 44.48 9.03 44.17 8.95 44.04 9.59 44.13 9.79 44.72 10.13"/><path className="shoe shoe-thin-line" d="M42.58,8.87a3.76,3.76,0,0,1,.52-.94l-.25-.22a4,4,0,0,0-.58,1.07Z"/><path className="shoe shoe-thin-line" d="M41.93,8.46a2.51,2.51,0,0,1,.29-.76l-.27-.18a2.86,2.86,0,0,0-.33.93Z"/><path className="shoe shoe-thick-line" d="M19.75,23.18"/></g></g>
    </svg>
  );
}

export const locationPin = (className) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.22 20.86">
      <path id="svg_1" data-name="svg 1" className={ `store-item-pin pin-${className}` } d="M14.71,7.79c0,4-7.15,13.61-7.12,13.63S.5,11.79.51,7.77A7.19,7.19,0,0,1,7.62.51,7.19,7.19,0,0,1,14.71,7.79ZM7.61,4.71a3.06,3.06,0,1,0,3,3.06,3,3,0,0,0-3-3.06Z"/>
    </svg>
  )
}
