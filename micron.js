/** 
 * @file Standalone helper arrow functions (ES6) in 1 line.
 * @version 1.9.5
 * @author Vangware - https://vangware.com
 */

/* jshint asi: true, forin: false, strict: false, curly: false, -W058: true, esnext: true */
/* exported ael, atr, cks, css, del, get, mrx, rnd, url, xhr */

/**
 * Listen to several events on an element or a group of elements.
 *
 * @example
 * // <a id="id">Link</a>
 * ael(get("#id"), {
 *   click: event => {
 *     event.preventDefault();
 *     console.log("#id element clicked");
 *   }
 * });
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements with event.
 * @param {Object} V List of events and callbacks in Object format.
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with event.
 */
const ael=(E,V)=>(E.length?E:[E]).map(e=>Object.keys(V).map(v=>(e.addEventListener(v,V[v]),e))[0]);

/**
 * Set several attributes of an element or a group of elements.
 *
 * @example
 * // <a id="id">Link</a>
 * atr(get("#id"), {
 *   class: "a-class"
 * });
 * // <a id="id" class="a-class">Link</a>
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements with event.
 * @param {Object} A List of attributes in Object format.
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new attributes.
 */
const atr=(E,A)=>(E.length?E:[E]).map(e=>Object.keys(A).map(a=>(e.setAttribute(a,A[a]),e))[0]);

/**
 * Get the current document cookies in object form
 *
 * @returns {Object} The document cookies object
 */
const cks=()=>decodeURIComponent(document.cookie).split("; ").map(c=>c.split(/=(.+)?/)).map(c=>({[c[0]]:(s=>{try{return JSON.parse(s)}catch(e){return !1}})(c[1])||c[1]})).reduce((o,c)=>Object.assign(o,c));

/**
 * Set several styles of an element or a group of elements.
 *
 * @example
 * // <a id="id">Link</a>
 * css(get("#id"), {
 *   fontWeight: 700
 * });
 * // <a id="id" style="font-weight:700">Link</a>
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements to set styles.
 * @param {Object} S List of styles in Object format.
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements with new styles.
 */
const css=(E,S)=>(E.length?E:[E]).map(e=>(Object.assign(e.style,S),e));

/**
 * Remove an element or a group of elements from the DOM.
 *
 * @example
 * // <a id="id">Link</a>
 * del(get("#id")); // Element gets removed from the DOM and returned
 *
 * @param {(HTMLElement|HTMLElement[])} E DOM Element or Array of DOM Elements to remove from DOM
 * @returns {HTMLElement[]} DOM Element or Array of DOM Elements removed from DOM
 */
const del=E=>(E.length?E:[E]).map(e=>e.parentElement.removeChild(e));

/**
 * Alias for querySelectorAll, but returning an array instead of a nodeList.
 *
 * @example
 * // <a id="id">Link</a>
 * get("#id"); // Above element gets returned
 *
 * @param {string} q CSS Query.
 * @param {HTMLElement} [e=document] Base element.
 * @returns {HTMLElement[]} Array of elements.
 */
const get=(q,e=document)=>Array.from(e.querySelectorAll(q));

/**
 * Takes a string and an object and makes a regex map replace
 *
 * @example
 * mrx("abc", {"a":1,"b":2,"c":3}); // Returns "123"
 *
 * @param  {string} s String
 * @param  {Object} m Map with format { "string to be replaced": "replacing string" }
 * @return {string} String with replaced elements from map
 */
const mrx=(s,m)=>s.replace(new RegExp(Object.keys(m).map(c=>c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).join("|"),"g"),c=>m[c]);

/**
 * Random string generator (up to 16 characters).
 * Credit: https://github.com/Jacob-Friesen/obscurejs/blob/master/2015/oneLineRandomText.js
 *
 * @param {number} l Length of the random string
 */
const rnd=l=>(Math.random()+1).toString(36).substr(2,l);

/**
 * Parse an object into a simple string in URL format for XHR.
 *
 * @example
 * url({ a: 1, b: 2, c: 3 }); // Returns "a=1&b=2&c=3"
 *
 * @param {Object} o List of input data for ajax in Object format.
 * @returns {string} URL formated string.
 */
const url=o=>Object.keys(o).map(p=>Array.isArray(o[p])?o[p].map(r=>p+"[]="+r).join("&"):(typeof o[p]==="object"&&o[p]!==null)?url(Object.keys(o[p]).reduce((r,q)=>Object.assign(r,{[p+`[${q}]`]:o[p][q]}),{})):p+"="+encodeURIComponent(o[p])).join("&");

/**
 * Alias for new XMLHttpRequest, with GET method by default.
 *
 * @example
 * xhr("/api").send(); // Sends request to /api
 *
 * @param {string} u URL.
 * @param {string} [m=GET] Method.
 * @returns {XMLHttpRequest} The opened XML HTTP Request.
 */
const xhr=(u,m="GET")=>{let x=new XMLHttpRequest;return x.open(m,u),x};