import { createRoot } from 'react-dom/client';
import { useState, StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { ArticleStateType, defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import './styles/index.module.scss'; 

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [currentState, setCurrentState] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className="main"
			style={
				{
					'--font-family': currentState.fontFamilyOption.value,
					'--font-size': currentState.fontSizeOption.value,
					'--font-color': currentState.fontColor.value,
					'--container-width': currentState.contentWidth.value,
					'--bg-color': currentState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm stateForm={setCurrentState} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
