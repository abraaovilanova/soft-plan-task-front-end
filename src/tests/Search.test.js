import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Search from '../components/Search/Search';


describe('Search component', () => {

	it('renders search component', () => {

		render(<Search />);
		expect(screen.getByTestId("search")).not.toBeNull();

	});

	it('sends the search term when submitted', async () => {

		render(

			<Search
				search={ term =>
					expect(term).toEqual('')
				}
			/>

		);

		await fireEvent.submit(screen.getByTestId("search"));

	});


	it('renders the search field by country as a text box', () => {

		render(<Search />);
		const field = screen.getByPlaceholderText("Search... i.e Brazil");
		expect(field).not.toBeNull();
		expect(field.tagName).toEqual('INPUT');
		expect(field.type).toEqual('text');

	});

	it('sends user-entered search term', async () => {

		const searchTerm = "Brazil";

		render(

			<Search
				search={ term =>
					expect(term).toEqual(searchTerm)
				}
			/>

		);

		await fireEvent.change(screen.getByPlaceholderText("Search... i.e Brazil"), { target: { value: searchTerm } });

		await fireEvent.submit(screen.getByTestId("search"));
	});
	
});