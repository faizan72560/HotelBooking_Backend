class Apifeature{
    constructor(query,queryStr){
        this.query=query
        this.queryStr=queryStr
    }

    search(){
        // console.log(this.query,"good")
        const keyword=this.queryStr.keyword
        ?{
            // name:{
            //     $regex:this.queryStr.keyword,
            //     $option:"i",
            // },
            // room:{
            //     $regex:this.queryStr.keyword,
            //     $option:"i",
            // },
            // price:{
            //     $regex:this.queryStr.keyword,
            //     $option:"i",
            // },
            city:{
                $regex:this.queryStr.keyword,
                $options:"i",
            },
    }:{}
    this.query=this.query.find({...keyword})
    return this
}

filter() {

    const queryCopy = { ...this.queryStr };
    //   Removing some fields for category
    const removeFields = ["keyword", "page", "limit"];
    console.log(queryCopy)

    removeFields.forEach((key) => delete queryCopy[key]);

    // Filter For Price and Rating


    let queryStr = JSON.stringify(queryCopy);
  
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;

  }

  pagination(resultPerPage) {
    
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    // console.log(this.query)

    return this;
  }
}

module.exports=Apifeature