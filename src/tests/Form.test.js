import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Form from "../components/Form/Form"


describe("Form component", () => {

	const country = {
		name: 'name',
		flag: { svgFile: "https://restcountries.eu/data/bra.svg" },
		topLevelDomains: [ { name: ".br" } ],
		capital: "Brasília",
		area: "8515767",
		population: "206135893"
	}

	it('renders a form', () => {

		render(<Form country={country} />)
		expect(screen.getByTestId("edit")).not.toBeNull()

	})		

	describe("area field", () => {

		it('renders the area field as a text box', () => {

			render(<Form country={country} />)
			const field = screen.getByTestId("edit-input-area")
			expect(field).not.toBeNull()
			expect(field.tagName).toEqual('INPUT')
			expect(field.type).toEqual('number')

		})

		it('renders a label for the area field', () => {

			render(<Form country={country} />)
			const label = screen.getByLabelText('Area [km²]:')
			expect(label).not.toBeNull()

		})

		it('includes the country value for the area', () => {

			render(<Form country={country} />)
			expect(screen.getByTestId("edit-input-area").value).toBe("8515767")

		})
	})

	describe("population field", () => {

		it('renders the population field as a text box', () => {

			render(<Form country={country} />)
			const field = screen.getByTestId("edit-input-population")
			expect(field).not.toBeNull()
			expect(field.tagName).toEqual('INPUT')
			expect(field.type).toEqual('number')

		})

		it('renders a label for the population field', () => {

			render(<Form country={country} />)
			const label = screen.getByLabelText('Population:')
			expect(label).not.toBeNull()

		})

		it('includes the country value for the population', () => {

			render(<Form country={country} />)
			expect(screen.getByTestId("edit-input-population").value).toBe("206135893")

		})
	})

	describe("capital field", () => {

		it('renders the capital field as a text box', () => {

			render(<Form country={country} />)
			const field = screen.getByTestId("edit-input-capital")
			expect(field).not.toBeNull()
			expect(field.tagName).toEqual('INPUT')
			expect(field.type).toEqual('text')

		})

		it('renders a label for the capital field', () => {

			render(<Form country={country} />)
			const label = screen.getByLabelText('Capital:')
			expect(label).not.toBeNull()

		})

		it('includes the country value for the capital', () => {

			render(<Form country={country} />)
			expect(screen.getByTestId("edit-input-capital").value).toBe("Brasília")

		})
	})

	describe("flag field", () => {

		it('renders the flag field as a text box', () => {

			render(<Form country={country} />)
			const field = screen.getByTestId("edit-input-flag")
			expect(field).not.toBeNull()
			expect(field.tagName).toEqual('INPUT')
			expect(field.type).toEqual('text')

		})

		it('renders a label for the flag field', () => {

			render(<Form country={country} />)
			const label = screen.getByLabelText('Flag:')
			expect(label).not.toBeNull()

		})

		it('includes the country value for the flag', () => {

			render(<Form country={country} />)
			expect(screen.getByTestId("edit-input-flag").value).toBe("https://restcountries.eu/data/bra.svg")

		})
	})

	describe("name field", () => {

		it('renders the name field as a text box', () => {

			render(<Form country={country} />)
			const field = screen.getByTestId("edit-input-name")
			expect(field).not.toBeNull()
			expect(field.tagName).toEqual('INPUT')
			expect(field.type).toEqual('text')

		})

		it('renders a label for the name field', () => {

			render(<Form country={country} />)
			const label = screen.getByLabelText('Name:')
			expect(label).not.toBeNull()

		})
	})

	it("checks if field changes stores in state", async () => {

		render(

			<Form 
				country={country}
				edit={ edited => {
						expect(screen.getByTestId("edit-input-name").value).toBe(edited.name)
						expect(screen.getByTestId("edit-input-flag").value).toEqual(edited.flag.svgFile)
						expect(screen.getByTestId("edit-input-topLevelDomains").value).toEqual(edited.topLevelDomains[0].name)
						expect(screen.getByTestId("edit-input-capital").value).toEqual(edited.capital)
						expect(screen.getByTestId("edit-input-area").value).toEqual(edited.area)
						expect(screen.getByTestId("edit-input-population").value).toEqual(edited.population)
					}
				}
			/>

		)

		const changeValues = [

			{ name: "edit-input-name", value: "Argentina" },
			{ name: "edit-input-flag", value: "https://restcountries.eu/data/arg.svg" },
			{ name: "edit-input-topLevelDomains", value: ".ar" },
			{ name: "edit-input-capital", value: "Buenos Aires" },
			{ name: "edit-input-area", value: "2780400" },
			{ name: "edit-input-population", value: "43590400" },

		]

		await changeValues.map( input => {

			fireEvent.change(screen.getByTestId(input.name), { target: { value: input.value } })

		})

		await fireEvent.submit(screen.getByTestId("edit"))
	})
	
	it("creates correct object to save changes", async () => {

		render(

			<Form 
				country={country}
				edit={
					edited => expect(edited).toEqual(country)
				}
			/>

		)

		await fireEvent.submit(screen.getByTestId("edit"))

	})

	describe("topLevelDomains field", () => {

		it('renders the topLevelDomains field as a text box', () => {

			render(<Form country={country} />)
			const field = screen.getByTestId("edit-input-topLevelDomains")
			expect(field).not.toBeNull()
			expect(field.tagName).toEqual('INPUT')
			expect(field.type).toEqual('text')

		})

		it('renders a label for the topLevelDomains field', () => {

			render(<Form country={country} />)
			const label = screen.getByLabelText('Top Level Domains:')
			expect(label).not.toBeNull()

		})

		it('includes the country value for the topLevelDomains', () => {

			render(<Form country={country} />)
			expect(screen.getByTestId("edit-input-topLevelDomains").value).toBe(".br")

		})
	})

	describe("submit button", () => {

		it('renders the submit button', () => {

			render(<Form country={country} />)
			const field = screen.getByText("Save")
			expect(field).not.toBeNull()
			expect(field.tagName).toEqual('BUTTON')
			expect(field.type).toEqual('submit')

		})
	})	

})