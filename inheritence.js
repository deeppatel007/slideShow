class university{
    constructor(name){
        this.uniNmae = name;
    }

    name(){
        return this.uniNmae;
    }
}

class branch extends university{
    #rollNo = 0
    constructor(uni, branchName){
        super(uni);
        this.branchName = branchName;
    }

    details(){
        return "I am in " + this.name() + " and in" + this.branchName + "branch"; 
    }

    set rollNo(n){
        this.#rollNo = n; 
    }
    get rollNo(){
        return this.#rollNo;
    }
}

let b = new branch("pdpu", "computer");
console.log(b.details());
b.rollNo = 10;
console.log(b.rollNo);

