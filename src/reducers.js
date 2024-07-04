import {createSlice} from "@reduxjs/toolkit";

const  estIni = {
    episodios: [],
    informacion: "",
    incrementar: 0,
    imagen: "",
    nombre: ""
};

const reducers = createSlice({
    name: "holaAPP",
    initialState: estIni,
    reducers: {
        setEpisodios: (state, action) => {
            state.episodios = action.payload;
        },
        setOtraInformacion: (state, action) => {
            state.informacion = action.payload;
        },

        setIncremental: (state, action) => {
            state.incrementar += action.payload;
        },
        setImagen: (state, action) => {
            state.imagen = action.payload;
        },
        setNombre: (state, action) => {
            state.nombre = action.payload;
        }
    }
});

export const {setEpisodios, setOtraInformacion, setIncremental, setImagen,setNombre} = reducers.actions;
export default reducers.reducer;