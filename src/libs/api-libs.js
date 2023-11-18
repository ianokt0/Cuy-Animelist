export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await response.json();
    return anime
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap
    // slice(first, last)

    const response = {
        data: data.slice(first, last)
    }

    return response
}

export const getAllUser = async (resource) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HRM}/${resource}`,{
        headers: {Authorization: 'Bearer 2|tsfbbnZT2I3BUFgXlQuxH1p0fvI97VmOuJIUG3Tp2c71a56d'}
    })
    .then(resp => resp.json())
    .then(json => console.log(JSON.stringify(json)))

    const users = await response.json();
    return users
}