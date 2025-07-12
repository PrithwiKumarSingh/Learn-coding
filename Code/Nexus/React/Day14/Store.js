import { configureStore } from "@reduxjs/toolkit";
import react1Slicer from "./Slicer1"


const Stores = configureStore({
    reducer : {
        slice1:react1Slicer
    }
})

export default Stores