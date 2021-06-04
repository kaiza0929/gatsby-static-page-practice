import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

var store = createStore((state = {dark_mode: false}, action) => {
    switch (action.type) {
        case "ON":
            return {dark_mode: true};
        case "OFF":
            return {dark_mode: false};
        default:
            return state;
    }
});

var ProviderComponent = ({ element }) => {
    return (
        <Provider store={store}>{element}</Provider>
    )
}

export default ProviderComponent;