class ProxyRatingSorter {
    constructor() {
        this.cache = {};
    }


    async sorter(data, orderBy) {
        if (this.cache[orderBy]) {
            console.log("from cache")
            console.log(this.cache[orderBy])
            return this.cache[orderBy]   
        }
        console.log("from server")
        console.log(this.cache[orderBy])
        this.cache[orderBy] = await RatingSorterApi.sorter(data, orderBy);
        return this.cache[orderBy]
    }
}
