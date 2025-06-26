import Todolist from '../assets/to-do-list.png';
import WeatherForecastImg from '../assets/weather-forecast.png';

export const projects = [
	{
		name: 'Weather-Forecast',
		description:
			'Este é um site simples e funcional que exibe a previsão do tempo em tempo real, utilizando HTML, CSS e JavaScript. Para consumir os dados meteorológicos, o projeto integra uma API de previsão do tempo através da biblioteca Axios.',
		year: '2025',
		tech: 'Javascript',
		role: 'Front-end Developer',
		image: WeatherForecastImg,
		app: 'https://guilhermeguedes1.github.io/weather-forecast/',
		github: 'https://github.com/GuilhermeGuedes1/weather-forecast',
	},

	{
		name: 'To do List',
		description:
			'Este é um aplicativo simples de lista de tarefas (to-do list) criado com React. Permite adicionar, marcar como concluída e remover tarefas, com armazenamento no localStorage para persistência dos dados entre sessões. Além disso, possui uma animação legal que revela o ícone de lixeira ao passar o mouse sobre a tarefa.',
		year: '2025',
		tech: 'React',
		role: 'Front-end Developer',
		image: Todolist,
		app: 'https://todolist-beta-lilac.vercel.app/',
		github: 'https://github.com/GuilhermeGuedes1/todolist',
	},
];
