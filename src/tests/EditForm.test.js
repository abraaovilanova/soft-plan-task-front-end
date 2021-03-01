import React from "react"
import { BrowserRouter, Router } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import { DETAILS } from '../service/queries'
import EditForm from '../components/EditForm/EditForm'


const renderWithRouter = (ui, { route = '/661' } = {}) => {

	window.history.pushState({}, 'Test page', route)

	return render(ui, { wrapper: BrowserRouter })

}


const mocks = [
	{ 
		request: { 
			query: DETAILS, 
			variables: { id: "661"}
		},
		result: { 
			data: {
				details: {
					area: 8515767,
					capital: "Brasília",
					flag: {svgFile: "https://restcountries.eu/data/bra.svg"},
					name: 'Brazil',
					population: 206135893,
					topLevelDomains: [{name: ".br"}],
					_id: "661"
				}
			}
		}
	}
]


// É passado um país como parãmetro, o qual vai ser editado no Form de edição.
const match = {
	params: {
		id: "661"
	}
}


describe('Edit component', () => {

	// Tenta renderizar o país no componente "Edit".
	it('renders Edit component without errors', async () => {

		renderWithRouter(

			<MockedProvider mocks={mocks} addTypename={false}>
				<EditForm match={match} />	
			</MockedProvider>

		)
	})


	// Carrega o componente "Edit" com um mock vazio e testa a menssagem de tratamento do país não localizado.
	it("check if you haven't found the country", async () => {

		const notFindMock = { 

			request: { 

				query: DETAILS, 
				variables: { id: "661"}

			},

			result: { 

				data: {

					details: []

				}
			}
		}		
	
		renderWithRouter(

			<MockedProvider mocks={[notFindMock]}>
				<EditForm match={match} />	
			</MockedProvider>

		)

		await waitFor(() => expect(document.getElementsByClassName("error-page")).not.toBeNull())
	})


	// Carrega um mock indefinido e testa tratamento para o erro "undefined".
	it("check if date is undefined", async () => {

		const notFindMock = { 

			request: { 

				query: DETAILS, 
				variables: { id: "661"}

			},

			result: { 

				data: undefined

			}
		};		
	
		renderWithRouter(

			<MockedProvider mocks={[notFindMock]}>
				<EditForm match={match} />	
			</MockedProvider>

		);

		await waitFor(() => expect(document.getElementsByClassName("loader")).not.toBeNull());
	});


	// Testa se está emitindo erro de falha corretamnete.
	it('should show error UI', async () => {

		const errorMock = {

			request: {
			query: DETAILS,
			variables: { id: '661' },
			},
			error: new Error('fail'),
		};

		renderWithRouter(

			<MockedProvider mocks={[errorMock]} addTypename={false}>
				<EditForm match={match} />	
			</MockedProvider>

		);

		await waitFor(() => expect(document.getElementsByClassName("error-page")).not.toBeNull());

	});


	// Verifica se está renderizando o estado "Carregando..." inicialmente.
	it('should render loading state initially', async () => {

		renderWithRouter(

			<MockedProvider mocks={mocks}>
				<EditForm match={match} />	
			</MockedProvider>

		)

		expect(document.getElementsByClassName("error-page")).not.toBeNull()
	})

	
	// Testa se está renderizando o botão de voltar.
	it('renders link go back', async () => {

		renderWithRouter(

			<MockedProvider mocks={mocks}>
				<EditForm match={match} />	
			</MockedProvider>

		);

		await waitFor(() => expect(screen.getByText("Back")).not.toBeNull());

	});

});