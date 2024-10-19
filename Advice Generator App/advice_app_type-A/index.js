document.addEventListener('DOMContentLoaded', () => {
	const buttonDice = document.querySelector('#button-dice');
	const adviceNumber = document.querySelector('#advice-number');
	const adviceText = document.querySelector('.advice-text');
	const divider = document.querySelector('.divider');

	getData();
	/* --- handlers --------------------------------------------------- */
	buttonDice.addEventListener('click', () => {
		getData();
		console.log('clicked the dice button');
	});

	// divider.innerHTML = `<img src="./images/pattern-divider-desktop.svg" alt="divider-desktop">
   // `;

	function getData() {
		fetch('https://api.adviceslip.com/advice') //
			.then((response) => response.json()) //
			.then((data) => {
				console.log(data);
				// console.log(data.slip);
				// console.log(data.slip.id);
				// console.log(data.slip.advice);

				const adviceIdData = data.slip.id;
				const adviceTextData = data.slip.advice;

				console.log(adviceIdData);
				console.log(adviceTextData);

				adviceNumber.innerText = `Advice #${adviceIdData}`;
				adviceText.innerText = `“${adviceTextData}”`;
			})
			.catch((error) => console.error());
	}
});
