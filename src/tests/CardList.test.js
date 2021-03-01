import React from "react"
import { Router } from 'react-router-dom'
import { render, screen } from "@testing-library/react"
import { createMemoryHistory } from 'history'
import CardList from "../components/CardList/CardList"


const dataList = {
	list: [
		{ 
			area: 8515767,
			capital: "Brasília",
			flag: {svgFile: "https://restcountries.eu/data/bra.svg"},
			name: "Brazil",
			population: 206135893,
			topLevelDomains: [{name: ".br"}],
			_id: "661"
		}
	]
}


describe("List component", () => {

	it("checks whether the list has rendered", () => {

		const history = createMemoryHistory()

		render(

			<Router history={history}>
				<CardList loading={false} error={false} data={dataList} />
			</Router>

		)

		expect(screen.getByTestId("list")).not.toBeNull()

	})


	it('shoulds render loading state initially', () => {

		render(<CardList loading={true} />)
		expect(document.getElementsByClassName("loader")).not.toBeNull()

	})

	it("checks if you didn't find countries", () => {

		render(<CardList loading={false} error={false} data={{list:[]}} />)
		expect(document.getElementsByClassName("error-page")).not.toBeNull()

	})


	it("check if date is still undefined", () => {

		render(<CardList loading={false} error={false} />)
		expect(document.getElementsByClassName("loader")).not.toBeNull()

	})
	
})