class FamilyTree {
  constructor (value) {
    this.value=value;
    this.children=[];
    if(this.value===undefined) throw Error;
    else if(typeof this.value!=='string') throw Error;

  }
  insert(child){
    let currChild= new FamilyTree(child)
    this.children.push(currChild);
  }

  familySize(){
    if(this.children===0) return 1;
    else return this.children.length+1;
  }

  findMember(val){
    for(let curr of this.children){
//       console.log(curr)
      if(curr.value===val) return curr;
    }
    return undefined;
  }

  log(){
    let str='';
    let dash='--';
    str+=dash+' '+this.value;
    if(this.children.length>0) dash+=dash;
    for(let currChild of this.children){
      str+='\n'+dash+' '+currChild.value;
      if(currChild.children.length>0){
        let currdash= dash+'--'
        for(let grandchild of currChild.children){
          str+='\n'+currdash+' '+grandchild.value
        }
      }
    }
    return str;
  }
}

module.exports = FamilyTree;
