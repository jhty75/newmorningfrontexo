import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenArticlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
		addArticleToStore: (state, action) => {
			state.value.push(action.payload);
		},
		removeAllArticleFromStore: (state) => {
			state.value = [];
		}
	
	},
});

export const { addArticleToStore, removeAllArticleFromStore } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
