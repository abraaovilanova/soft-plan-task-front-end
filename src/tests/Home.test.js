import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import { COUNTRYS } from '../service/queries';
import Home from '../components/Home/Home';


// Cria um mock/cobaia de um país.
const mocks = [
	{ 
		request: { 
			query: COUNTRYS, 
			variables: { term: "" }
		},
		result: { 
			data: {
				list: [
					{
						area: 8515767,
						capital: "Brasília",
						flag: {svgFile: "https://restcountries.eu/data/bra.svg"},
						nameTranslations: [{value: "Brasil"}],
						population: 206135893,
						topLevelDomains: [{name: ".br"}],
						_id: "661"
					}
				]
			}
		}
	}
];


describe('Home component', () => {

	it('renders Home component without errors', async () => {

		render(

			<MockedProvider mocks={mocks} addTypename={false}>
				<Home />	
			</MockedProvider>

		)

        await waitFor(() => expect(document.getElementsByClassName("home")).not.toBeNull());

	})

	it("checks if it's loading", async () => {

		render(

			<MockedProvider mocks={mocks} addTypename={false}>
				<Home />	
			</MockedProvider>

		)

		await waitFor(() => expect(document.getElementsByClassName("loader")).not.toBeNull());
	})
})