import React, { useReducer } from 'react'
import './Form.css'



export default function Form ({ country, edit }) {

	const name = country.name;
	const { flag, capital, area, population, topLevelDomains } = country;


	const [ fields, setFields ] = useReducer(( fields, field ) => ({ ...fields, ...field }),
		{ flag: flag.svgFile, name, capital, area, population, topLevelDomains: topLevelDomains[0].name }
	);


	const change = event => setFields({[ event.target.name ]: event.target.value });


	const submit = event => {

		const edited = {

			...country,
			name: fields.name,
			flag: { ...flag, svgFile: fields.flag },
			topLevelDomains: [{ ...topLevelDomains[0], name: fields.topLevelDomains }],
			capital: fields.capital,
			area: fields.area,
			population: fields.population
		};

		edit( edited );
		event.preventDefault();
	}

	const defaultAttrs = { onChange: change, required: true };


	const formModel = [

		{ label: "Flag", attrs: { name: "flag", type: "text", value: fields.flag } },
		{ label: "Name", attrs: { name: "name", type: "text", value: fields.name } },
		{ label: "Capital", attrs: { name: "capital", type: "text", value: fields.capital } },
		{ label: "Area [km²]", attrs: { name: "area", type: "number", value: fields.area } },
		{ label: "Population", attrs: { name: "population", type: "number", value: fields.population } },
		{ label: "Top Level Domains", attrs: { name: "topLevelDomains", type: "text", value: fields.topLevelDomains } }

	];


	return (

		<form onSubmit={ submit } data-testid="edit">
			{
				formModel.map(( item, i ) => 
					<div className="form-row" key={i}>
						<label className="form-label"htmlFor={item.attrs.name}>{ item.label }:</label>
                        <input 
							className="form-input" 
							type="text" 
							value={item.attrs.value} 
							id={item.attrs.name} 
							{ ...item.attrs } 
							{ ...defaultAttrs } 
							data-testid={`edit-input-${item.attrs.name}`}/>
					</div>
				)
			}
			<button type="submit" className="form-button">Save</button>
		</form>

	);
	
}