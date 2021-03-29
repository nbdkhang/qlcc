export const speciesChoice = [
  // { id: 1, name: "Tất cả" },
  { id: 2, name: "Hóa đơn điện", url: `/api/elec-bill/all/`,header:["Số thứ tự","Thời gian","Chỉ số cũ","Chỉ số mới","Số điện","Giá chỉ số","Tổng giá"] },
  { id: 3, name: "Hóa đơn nước", url: `/api/water-bill/all/`,header:["Số thứ tự","Thời gian","Chỉ số cũ","Chỉ số mới","Số điện","Giá chỉ số","Tổng giá"] },
  { id: 4, name: "Hóa đơn khác", url: `/api/other-bill/all/`,header:["Số thứ tự","Thời gian","Chỉ số cũ","Chỉ số mới","Số điện","Giá chỉ số","Tổng giá"] },
];
export const timeChoice = [
  // { id: 1, name: "Tất cả" },
  { id: 2, name: "Tháng hiện tại" },
  { id: 3, name: "Tháng trước" },
  { id: 4, name: "Năm hiện tại" },
];
export const headerElec=["Số thứ tự","Thời gian","Chỉ số cũ","Chỉ số mới","Số điện","Giá chỉ số","Tổng giá"];
export const headerWater=["Số thứ tự","Thời gian","Chỉ số cũ","Chỉ số mới","Số điện","Giá chỉ số","Tổng giá"];
export const headerOther=["Số thứ tự","Thời gian","Chỉ số cũ","Chỉ số mới","Số điện","Giá chỉ số","Tổng giá"];
export const createURL = (species, time, apartment_id) => {
  if (species === null) {
    return process.env.REACT_APP_API_LINK + `/api/elec-bill/all/${apartment_id}`;
  } else {
    for (const item of speciesChoice) {
      if (species == item.name) {
        return {name:item.name,url:process.env.REACT_APP_API_LINK + item.url+`${apartment_id}`,header:item.header};
      }
    }
  }
};
export const createHeader=(species)=>{

}
export const handleData=(data)=>
{
  const newData=[];
  let count=1;
  for (let line of data) {
    //console.log(line);
    let newLine=Object.values(line);//console.log(newLine);
    newLine[0]=count;   //STT
    newLine[1]=newLine[6]+"/"+newLine[7];//Thời gian

    let temp=newLine[4];  // swap
    newLine[4]=newLine[5];
    newLine[5]= temp;
    
    newLine.splice(6,2);
    newLine.splice(7,1)
    //console.log(newLine);
    for(let i=0;i<newLine.length;i++)
    {
      newLine[i]=newLine[i].toString();
    }
    count++;
    newData.push(newLine);
    //console.log(count);
  }
  
 return newData;
}
