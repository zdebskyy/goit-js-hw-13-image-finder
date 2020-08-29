const baseUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal'


export default {
    page: 1,
    query: '',
    fetchPictures() {
        const search = `'&q='${this.query}&page=${
            this.page
        }`
        const pageSize = '&per_page=12'
        const apiKey = '&key=17911527-5bdfde13a28c678a168d7ccf7'
        return fetch(baseUrl + search + pageSize + apiKey).then(response => response.json()).then(parcedResopnse => {
            this.incrementPage();
            return parcedResopnse.hits;
        });
    },

    get searchQuery(){
        return this.query;
    },
    set searchQuery(string){
         this.query = string;
    },

    incrementPage() {
        this.page += 1;
    },
    resetPage(){
        this.page = 1;
    },
}
