import React, { useState } from 'react'
import { TextField, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

function CardInfo() {
	return (
		<div>
			<TextField
				required
				label='Card Number'
				fullWidth
				variant='outlined'
				placeholder='XXXX-XXXX-XXXX-XXXX'
			/>
			<br /><br />
			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }} >
				<TextField
					required
					label='EXP'
					variant='outlined'
					placeholder='XX/XX'
				/>
				<TextField
					required
					label='CVV'
					type='password'
					variant='outlined'
					placeholder='XXX'

				/>
			</div>
		</div>
	)
}

function UPIInfo() {
	return (
		<TextField
			required
			label='UPI ID'
			variant='outlined'
		/>
	)
}

export default function PaymentDetails({ nextStep, prevStep }) {

	const [value, setValue] = useState('0');

	console.log(value)

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const paymentOptions = [
		<CardInfo />,
		<CardInfo />,
		<UPIInfo />,
	]

	return (
		<div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 40, }} >
			<Typography variant='h5' >Payment Information</Typography>
			<br /><br />
			<form>
				<FormControl component="fieldset">
					<FormLabel component="legend">Payment Method</FormLabel>
					<RadioGroup row aria-label="method" name="methods" value={value} onChange={handleChange}>
						<FormControlLabel value={'0'} control={<Radio />} label="Debit Card" />
						<FormControlLabel value={'1'} control={<Radio />} label="Credit Card" />
						<FormControlLabel value={'2'} control={<Radio />} label="UPI" />
						<FormControlLabel value={'3'} disabled control={<Radio />} label="COD" />
					</RadioGroup>
				</FormControl>
				<br /><br />
				{paymentOptions[value]}
				<br /><br />
				<br /><br />
				<Button variant='contained' color='primary' onClick={nextStep} >Next</Button>
				{' '}
				<Button variant='contained' color='primary' onClick={prevStep} >Prev</Button>
				{' '}
				<Button variant='contained' color='primary' onClick={nextStep} >Finish</Button>
			</form>
		</div>
	)
}