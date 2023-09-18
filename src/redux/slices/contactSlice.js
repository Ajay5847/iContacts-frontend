import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../axios/axisoClient";


export const getContactData = createAsyncThunk("/contacts", async (body) => {
    try {
        const response = await axiosClient.get("/api/contacts");
        return response.result;
    } catch (e) {
        return Promise.reject(e);
    }
});

export const createContact = createAsyncThunk("api/contacts",
    async (body) => {
        try {
            const response = await axiosClient.post("/api/contacts", body);
            return response.result.user;
        } catch (error) {
            return Promise.reject(error);
        }
    }
);

const contactSlice = createSlice({
    name: "contactSlice",
    initialState: {
        toastData: {},
        contactData: {},
    },
    reducers: {
        showToast: (state, action) => {
            state.toastData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getContactData.fulfilled, (state, action) => {
            state.contactData = action.payload;
        }).addCase(createContact.fulfilled, (state, action) => {
            state.contactData = action.payload;
        });
    },
});

export default contactSlice.reducer;

export const { showToast } = contactSlice.actions;
