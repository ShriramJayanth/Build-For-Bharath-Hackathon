// [[1	,0	,1	,0	,0	,1	,0	,0	,0	,0]
// [0	,1	,0	,1	,0	,0	,0	,0	,1	,0]
// [1	,0	,1	,0	,1	,0	,0	,1	,0	,1]
// [0	,1	,1	,0	,0	,0	,1	,1	,0	,0]
// [0	,0	,0	,1	,0	,1	,1	,0	,1	,0]
// [0	,0	,1	,1	,0	,0	,0	,0	,0	,1]
// [1	,1	,0	,0	,1	,0	,0	,1	,0	,0]
// [0	,0	,1	,0	,0	,0	,1	,0	,0	,0]
// [0	,1	,0	,0	,1	,0	,0	,0	,0	,1]
// [1	,1	,1	,1	,1	,1	,1	,1	,1	,1]]

const col=[0,2,5,1,3,8,0,2,4,7,9,1,2,6,7,3,5,6,8,2,3,9,0,1,4,7,2,6,1,4,9]
const rowptr=[0,3,6,11,15,19,22,26,28]

export function check(Vindex,Pindex){
    if(Vindex===-1){
        return true;
    }
    let start=rowptr[Vindex];
    let end=(Vindex===rowptr.length-1?col.length:rowptr[Vindex+1]);
    console.log(start+" "+end);
    for(let i=start;i<end;i++){
         if(col[i]===Pindex){
            return true;
         }
    }
    return false;
}

export function findind(Vname,Vlist){
    for(let i=0;i<Vlist.length;i++){
        if(Vlist[i].name===Vname){
            return Vlist[i].index;
        }
    }
}