import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { MockedProvider } from '@apollo/client/testing'
import { contriesItemsVar } from '../service'
import { COUNTRYS } from '../service/queries'
import App from '../App';


// mock do país
const dataList = {
	Country: [
		{ 
			area: 8515767,
			capital: "Brasília",
			flag: {svgFile: "https://restcountries.eu/data/bra.svg"},
			name: "Brazil",
			population: 206135893,
			topLevelDomains: [{name: ".br"}],
					location: [{longitude: 123, latitude: 456, x: 123, y: 456}],
					distanceToOtherCountries: [{countryName: "Paraguai", distanceInKm: "456"}],
			_id: "661"
		}
	]
};

const mocks = [{ request: { query: COUNTRYS }, result: { data: dataList }}];

describe('App component', () => {
	it('renders App component without errors', async () => {
		render(
			<MockedProvider mocks={mocks} addTypename={false}>
		      <App />
		    </MockedProvider>
		)
	})

	it('should render loading state initially', async () => {

		render(

			<MockedProvider mocks={mocks} addTypename={false}>
		      <App />
		    </MockedProvider>

		)

		await waitFor(() => expect(document.getElementsByClassName("loader")).not.toBeNull());

	})

	it('store server data in the reactive variable', async () => {

		render(

			<MockedProvider mocks={mocks} addTypename={false}>
		      <App />
		    </MockedProvider>
		)

		await waitFor(() => expect(contriesItemsVar()).toEqual(dataList.Country));

	})


	it('should show error UI', async () => {
		const errorMocks = {
			request: {
				query: COUNTRYS
			},
			error: new Error('fail')
		};

		render(
			<MockedProvider mocks={[errorMocks]} addTypename={false}>
		      <App />
		    </MockedProvider>

		);

		await waitFor(() => expect(document.getElementsByClassName("error-page")).not.toBeNull());

	});
	
});