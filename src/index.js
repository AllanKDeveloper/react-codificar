import React, { useReducer, useEffect } from 'react';
import ReactDOM from "react-dom";
import JssProvider from "react-jss/lib/JssProvider";

import { createGenerateClassName, MuiThemeProvider, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from "@material-ui/core/CssBaseline";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

import AppBar from "./Layout/AppBar";
import Component from "./Components/Component";
import { useFetch } from "./utils/hooks";
import Modal from "./Components/Modal";
import useModal from './Components/useModal';
import Loading from "./Components/Loading";
import SearchInput from './Components/searchInput';

import "./css/modal.css";

const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});

const CODIFICAR_API = "https://my-json-server.typicode.com/codificar/oficina/proposals";

const initialState = {
  loading: true,
  datas: [],
  errorMessage: null,
  setSearch: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_CODIFICAR_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_CODIFICAR_SUCCESS":
      return {
        ...state,
        loading: false,
        datas: action.payload,
        setSearch: action.search
      };
    case "SEARCH_CODIFICAR_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

function filterByValue(array, string) { return array.filter(o => { return Object.keys(o).some(k => { if(typeof o[k] === 'string') return o[k].toLowerCase().includes(string.toLowerCase()); }); }); }

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {isShowing, toggle, text} = useModal();

  useEffect(() => {
    fetch(CODIFICAR_API)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_CODIFICAR_SUCCESS",
          payload: jsonResponse
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_CODIFICAR_REQUEST"
    });

    fetch(CODIFICAR_API)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse != undefined) {
          let data = filterByValue(jsonResponse, searchValue);
          dispatch({
            type: "SEARCH_CODIFICAR_SUCCESS",
            payload: data,
            search: searchValue
          });
        } else {
          dispatch({
            type: "SEARCH_CODIFICAR_FAILURE",
            error: 'Erro no JSON'
          });
        }
      });
  };

  const { datas, errorMessage, loading, setSearch} = state;

  return (
    <div className="App">
        <AppBar />
        <JssProvider generateClassName={generateClassName}>
            <MuiThemeProvider
              theme={createMuiTheme({
                typography: {
                  useNextVariants: true
                },
                overrides: Component.getTheme(muiBaseTheme)
              })}
            >
           {loading && !errorMessage ? (
              <Loading />
            ) : errorMessage ? (
              <div className="errorMessage">{errorMessage}</div>
            ) : (
            <>
              <div><SearchInput search={search} text={setSearch}/></div>
              <Modal
                isShowing={isShowing}
                hide={toggle}
                text={text}
              />
              {datas.map((data, index) => (
                <Component key={data.id} id={data.id} valor={data.value} customer={data.customer} seller={data.seller} toggle={toggle} text={data.description}/>
              ))}
            </>
            )}
          </MuiThemeProvider>
        </JssProvider>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);