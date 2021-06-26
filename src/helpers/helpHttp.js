export const helpHttp = () => {
	const customFetch = (endpoint, options) => {
		/* const defaultHeaders = {
            accept: 'application/json',
        }; */

		const controller = new AbortController(); //genera un evento abort cuando se llama al metodo abort()
		options.signal = controller.signal;

		options.method = options.method || "GET";
		/* options.headers = options.headers
			? { ...defaultHeader, ...options.headers }
			: defaultHeader; */

		options.body = JSON.stringify(options.body) || false;
		if (!options.body) delete options.body;

		console.log(options);
		setTimeout(() => controller.abort(), 1000);

		return fetch(endpoint, options)
			.then((response) =>
				response.ok
					? response.json()
					: Promise.reject({
							err: true,
							status: response.status || "00",
							statusText: response.statusText || "Ocurrio un error",
					  })
			)
			.catch();
	};

	const get = (url, options = {}) => customFetch(url, options);

	const post = (url, options = {}) => {
		options.method = "POST";
		return customFetch(url, options);
	};

	/* const put = (url, options = {}) => {
		options.method = "PUT";
		return customFetch(url, options);
	};

	const del = (url, options = {}) => {
		options.method = "DELETE";
		return customFetch(url, options);
	}; */

	return {
		get,
		post,
	};
};
