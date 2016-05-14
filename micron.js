/** 
 * @file micron.js - Standalone helper arrow functions (ES6) in 1 line.
 * @version 1.9.0
 * @author Vangware - https://vangware.com
 */

/* jshint asi: true, forin: false, strict: false, curly: false, -W058: true, esnext: true */
/* exported ael, atr, css, del, get, url, xhr */

/**
 * Listen to several events on an element or a group of elements.
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements with event.
 * @param {Object} V - List of events and callbacks in Object format.
 * @param {Function} c - Callback Function.
 * @returns {Element[]} E - DOM Element or Array of DOM Elements with event.
 */
const ael=(E,V)=>(E.length?E:[E]).map(e=>Object.keys(V).map(v=>(e.addEventListener(v,V[v]),e))[0]);

/**
 * Set several attributes of an element or a group of elements.
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements with event.
 * @param {Object} A - List of attributes in Object format.
 * @returns {Element[]} E - DOM Element or Array of DOM Elements with new attributes.
 */
const atr=(E,A)=>(E.length?E:[E]).map(e=>Object.keys(A).map(a=>(e.setAttribute(a,A[a]),e))[0]);

/**
 * Get the current document cookies in object form
 *
 * @returns {Object} o - The document cookies object
 */
const cks=()=>JSON.parse("{"+document.cookie.split("; ").map(e=>e.replace(/"/g,'\\"').replace("=",'":"')).join('","')+"}");

/**
 * Set several styles of an element or a group of elements.
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements to set styles.
 * @param {Object} S - List of styles in Object format.
 * @returns {Element[]} E - DOM Element or Array of DOM Elements with new styles.
 */
const css=(E,S)=>(E.length?E:[E]).map(e=>Object.keys(S).map(s=>(e.style[s]=S[s],e))[0]);

/**
 * Remove an element or a group of elements from the DOM.
 *
 * @param {(Element|Element[])} E - DOM Element or Array of DOM Elements to remove from DOM
 * @returns {Element[]} E - DOM Element or Array of DOM Elements removed from DOM
 */
const del=E=>(E.length?E:[E]).map(e=>e.parentElement.removeChild(e));

/**
 * Alias for querySelectorAll, but returning an array instead of a nodeList.
 *
 * @param {string} q - CSS Query.
 * @param {Element} [e=document] - Base element.
 * @returns {Element[]} - Array of elements.
 */
const get=(q,e)=>Array.from((e||document).querySelectorAll(q));

/**
 * Takes a string and an object and makes a regex map replace
 * @param  {string} s - String
 * @param  {Object} m - Map with format { "strin to be replaced": "replacing string" }
 * @return {string} s - String with replaced elements from map
 */
const mrx=(s,m)=>s.replace(new RegExp(Object.keys(m).map(c=>c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).join("|"),"g"),c=>m[c]);

/**
 * Random string generator (up to 16 characters).
 * Credit: https://github.com/Jacob-Friesen/obscurejs/blob/master/2015/oneLineRandomText.js
 *
 * @param {number} l - Length of the random string
 */
const rnd=l=>(Math.random()+1).toString(36).substr(2,l);

/**
 * Parse an object into a simple string in URL format for XHR.
 *
 * @param {Object} o - List of input data for ajax in Object format.
 * @returns {string} - URL formated string.
 */
const url=o=>Object.keys(o).map(p=>p+"="+encodeURIComponent(o[p])).join("&");

/**
 * Alias for new XMLHttpRequest, with GET method by default.
 *
 * @param {string} u - URL.
 * @param {string} [m=GET] - Method.
 * @returns {XMLHttpRequest} x - The opened XML HTTP Request.
 */
const xhr=(u,m)=>{let x=new XMLHttpRequest;return x.open(m||"GET",u),x};