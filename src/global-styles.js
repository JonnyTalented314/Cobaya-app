import { createGlobalStyle } from 'styled-components';
import GilroyRegular from './assets/fonts/Gilroy-Regular.ttf';
import GilroySemibold from './assets/fonts/Gilroy-Semibold.ttf';
import GilroyBold from './assets/fonts/Gilroy-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy Semibold';
    src: url(${GilroySemibold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy Bold';
    src: url(${GilroyBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family:  ${props => (props.lowcarbon ? 'Ubuntu' : 'Gilroy')};
    ${'' /* overflow: hidden */}
  }

  #app {
    background-color: #f2f3f8;
    min-height: 100%;
    min-width: 100%;
  }

  .app-frame {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }

  p,
  label {
    line-height: 24px;
  }

  a:-webkit-any-link {
    text-decoration: none;
    cursor: pointer;
  }

  strong {
    font-family: 'Gilroy Bold';
    font-weight: 700;
  }

  /* scrollbars style */
  ${'' /* body::-webkit-scrollbar, *::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  body::-webkit-scrollbar-track, *::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
  }

  body::-webkit-scrollbar-thumb, *::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  body::-webkit-scrollbar {
      width: 1em;
  } */}

  /* CSSTransition */
  .fade-appear {
    opacity: 0.01;
  }
  .fade-appear-active {
    opacity: 1;
    transition: opacity .5s ease-in;
  }

  /**KPI date picker from to */
  .kpi-options {
    background-color: white;
    display: flex;
    align-items: flex-end;

    .kpi-item {
      flex: 1;
      margin-right: 20px;
      &.location {
        min-width: 330px;
      }
    }

    .InputFromTo {
      padding-top: 23px;
      .DayPickerInput input {
        border: none;
        font-size: 1em;
        outline: none;
        width: 150px;
      }
    }
    .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
      background-color: #f0f8ff !important;
      color: #4a90e2;
    }
    .InputFromTo .DayPicker-Day {
      border-radius: 0 !important;
    }
    .InputFromTo .DayPicker-Day--start {
      border-top-left-radius: 50% !important;
      border-bottom-left-radius: 50% !important;
    }
    .InputFromTo .DayPicker-Day--end {
      border-top-right-radius: 50% !important;
      border-bottom-right-radius: 50% !important;
    }
    .InputFromTo .DayPickerInput-Overlay {
      width: 550px;
    }
    .InputFromTo-to .DayPickerInput-Overlay {
      margin-left: -198px;
    }
  }

  .kpi-charts-area {
    background-color: white;
    padding: 20px 20px;
    .charts-title {
      color: #868aa8;
      margin-bottom: 15px;
      font-weight: bold;

      &.actions{
        margin-top: 10px;
      }
    }

  }

  .infinite-scroll {
    margin-top: 10px;
    table td, table th, table th:last-child, table td:last-child {
      padding: 4px;
    }
  }

  .text-right {
    text-align: right;
  }

  .image_full_width {
    width: 100%;
  }

  .hidden {
    display: none;
  }

  /* react-phone-input-2 custom css */
  .react-tel-input .flag-dropdown.open .selected-flag {
    background: #fff;
    border-radius: 20px 0 0 20px;
  }
  .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus {
    background-color: #fff;
    border-radius: 20px 0 0 20px;
  }
`;


export default GlobalStyle;
