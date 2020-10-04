export const getData = {
	url: 'database/dataBase.json',
	get(process) {
		fetch(this.url)
		.then( response => response.json() )
		.then( process ) 
	},
	whishList(list, callback) {
		this.get((data) => {
			const result = data.filter( function(item) { return list.includes(item.id) } );
			callback(result)
		}); 
	},
};

getData.get(console.log);