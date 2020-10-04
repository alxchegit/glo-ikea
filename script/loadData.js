import {getData} from './getData.js';
	const wishlist = ['idd005','idd100','idd077','idd033'];

	const carlist = [
		{
			id: 'idd042',
			count: 2
		},
		{
			id: 'idd052',
			count: 3
		},
		{
			id: 'idd072',
			count: 1
		},
	];


export const loadData = () => {


	if(location.search){
		const search = decodeURI(location.search);
		const prop = search.split('=')[0].slice(1); 
		const value = search.split('=')[1];   
		console.log(prop +" - "+value);

		if(prop === 's'){
			console.log(value);
		} else if(prop === 'wishlist') {
			getData.whishList(wishlist, (data) => console.dir({whishlist: data}));
		}else{
			console.log(prop, value);
		}
	}

	if(location.hash){
		console.log(location.hash.substring(1));
	}

	if(location.pathname.includes('cart')){
		console.log(carlist);
	}
};