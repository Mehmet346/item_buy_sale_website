import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dark: false,
}

export const themeSlice = createSlice({
    name: 'darkTheme',
    initialState,
    reducers: {
        changeToDark: (state) => {
            state.dark = true
            document.documentElement.classList.add('dark');
        },
        changeToLight: (state) => {
            state.dark = false;
            document.documentElement.classList.remove('dark');
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeToDark, changeToLight } = themeSlice.actions

export default themeSlice.reducer