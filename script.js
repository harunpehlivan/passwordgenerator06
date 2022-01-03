function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}import { render } from "https://cdn.skypack.dev/react-dom@17";
import { useForm } from "https://cdn.skypack.dev/react-hook-form@7";
import useCopyToClipboard from "https://cdn.skypack.dev/react-use@17/esm/useCopyToClipboard";
import useLocalStorage from "https://cdn.skypack.dev/react-use@17/esm/useLocalStorage";
import React, { useState } from "https://cdn.skypack.dev/react@17";

function randomInteger(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const similarCharacters = /[lI|O0|5S]/g;

function generatePassword(options) {
  const defaults = {
    length: 10,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    includeUppercase: true,
    excludeSimilarCharacters: true };


  const {
    length,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    excludeSimilarCharacters } =
  Object.assign({}, defaults, options);

  let characters = "";

  if (includeLowercase) {
    characters += lowercase;
  }

  if (includeNumbers) {
    characters += numbers;
  }

  if (includeSymbols) {
    characters += symbols;
  }

  if (includeUppercase) {
    characters += uppercase;
  }

  if (excludeSimilarCharacters) {
    characters = characters.replace(similarCharacters, "");
  }

  let password = "";

  for (let i = 0; i < length; i += 1) {
    const character = characters[randomInteger(characters.length - 1)];

    password += character;
  }

  return password;
}

// https://iconmonstr.com/clipboard-4-svg/
function IconClipboard(props) {
  return /*#__PURE__*/(
    React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24" },
    props), /*#__PURE__*/

    React.createElement("path", { d: "M16 10c3.469 0 2 4 2 4s4-1.594 4 2v6h-10v-12h4zm.827-2h-6.827v16h14v-8.842c0-2.392-4.011-7.158-7.173-7.158zm-8.827 12h-6v-16h4l2.102 2h3.898l2-2h4v2.145c.656.143 1.327.391 2 .754v-4.899h-3c-1.229 0-2.18-1.084-3-2h-8c-.82.916-1.771 2-3 2h-3v20h8v-2zm2-18c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm4 18h6v-1h-6v1zm0-2h6v-1h-6v1zm0-2h6v-1h-6v1z" })));


}

function App() {
  const defaultSettings = {
    length: 12,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    includeUppercase: true,
    excludeSimilarCharacters: true };

  const [settings, setSettings] = useLocalStorage(
  "settings",
  JSON.stringify(defaultSettings));

  const defaultValues = JSON.parse(settings);
  const [password, setPassword] = useState(generatePassword(defaultValues));
  const [_state, copyToClipboard] = useCopyToClipboard();
  const { register, handleSubmit, watch } = useForm({
    defaultValues });


  function onSubmit(data) {
    const password = generatePassword(data);

    setSettings(JSON.stringify(data));
    setPassword(password);
  }

  return /*#__PURE__*/(
    React.createElement("div", { className: "app" }, /*#__PURE__*/
    React.createElement("div", { className: "grid" }, /*#__PURE__*/
    React.createElement("h1", null, "Password Generator"), /*#__PURE__*/
    React.createElement("div", { className: "output" }, /*#__PURE__*/
    React.createElement("output", null, password), /*#__PURE__*/
    React.createElement("button", { className: "button", onClick: () => copyToClipboard(password) }, /*#__PURE__*/
    React.createElement(IconClipboard, null))), /*#__PURE__*/



    React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "form" }, /*#__PURE__*/
    React.createElement("fieldset", { className: "form__fieldset" }, /*#__PURE__*/
    React.createElement("legend", { className: "form__legend" }, "Length"), /*#__PURE__*/
    React.createElement("div", { className: "form__field" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "length" }, "Length"), /*#__PURE__*/
    React.createElement("input", _extends({
      className: "form__input form__input--range",
      id: "length",
      type: "range",
      min: "6",
      max: "32",
      step: "1" },
    register("length", {
      valueAsNumber: true }))), /*#__PURE__*/


    React.createElement("span", null, watch("length")))), /*#__PURE__*/



    React.createElement("fieldset", { className: "form__fieldset" }, /*#__PURE__*/
    React.createElement("legend", { className: "form__legend" }, "Settings"), /*#__PURE__*/

    React.createElement("div", { className: "form__field" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "includeLowercase" }, "Include lowercase"), /*#__PURE__*/
    React.createElement("input", _extends({
      className: "form__input form__input--checkbox",
      id: "includeLowercase",
      type: "checkbox" },
    register("includeLowercase")))), /*#__PURE__*/



    React.createElement("div", { className: "form__field" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "includeUppercase" }, "Include uppercase"), /*#__PURE__*/
    React.createElement("input", _extends({
      className: "form__input form__input--checkbox",
      type: "checkbox",
      id: "includeUppercase" },
    register("includeUppercase")))), /*#__PURE__*/



    React.createElement("div", { className: "form__field" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "includeNumbers" }, "Include numbers"), /*#__PURE__*/
    React.createElement("input", _extends({
      className: "form__input form__input--checkbox",
      id: "includeNumbers",
      type: "checkbox" },
    register("includeNumbers")))), /*#__PURE__*/



    React.createElement("div", { className: "form__field" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "includeSymbols" }, "Include symbols"), /*#__PURE__*/
    React.createElement("input", _extends({
      className: "form__input form__input--checkbox",
      id: "includeSymbols",
      type: "checkbox" },
    register("includeSymbols")))), /*#__PURE__*/



    React.createElement("div", { className: "form__field" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "excludeSimilarCharacters" }, "Exclude similar characters"), /*#__PURE__*/


    React.createElement("input", _extends({
      className: "form__input form__input--checkbox",
      id: "excludeSimilarCharacters",
      type: "checkbox" },
    register("excludeSimilarCharacters"))))), /*#__PURE__*/



    React.createElement("button", {
      className: "button button--large button--rounded",
      type: "submit" }, "Generate Password")))));







}

render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));