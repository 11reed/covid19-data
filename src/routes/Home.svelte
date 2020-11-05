<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet">
</svelte:head>


<div>
    <h1>Covid-19 Data</h1>
    <h3>This project retrieves data from:</h3>
    <a href="https://disease.sh/">https://disease.sh/</a>
</div>


<style>
	:global(body) {
		font-family: 'Mukta', sans-serif;
        background-color: #212F3D;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
        flex-flow: column;
        color:#5DADE2 ;
	}

    h1 {
        font-size: 50px;
    }

    a {
        color: #EC5443;
    }
</style>