export const STORAGE_KEY = 'favouriteList';

export function convertRawtoDefinedImageList(rawImageList) {
    let definedImageList = [];
  
    rawImageList.forEach((rawImage, index) => {
        let definedImage = {};
        definedImage['id'] = createUniqueId(rawImage.link)
        definedImage['img_src'] = rawImage.media.m
        definedImage['title'] = rawImage.title
        definedImage['link'] = rawImage.link
        definedImage['description'] = rawImage.description
        definedImage['published_raw'] = new Date(rawImage.published)
        definedImage['published'] = new Date(rawImage.published).toLocaleDateString()
        definedImage['author'] = rawImage.author
        definedImage['author_id'] = rawImage.author_id
        definedImage['date_taken_raw'] = new Date(rawImage.date_taken)
        definedImage['date_taken'] = new Date(rawImage.date_taken).toLocaleDateString()
        definedImage['tags'] =  rawImage.tags ? rawImage.tags.split(' ') : []
        definedImage['isFavourite'] = false
        definedImageList.push(definedImage)
    })
  
    return definedImageList;
}
  
export function arrayRemove(arr, ditem, objPropToCompare) {
    return arr.filter(function(item){
        return item[objPropToCompare] != ditem[objPropToCompare];
    });

}

export function  findAndReplaceArrayOfObj(arr1, arr2, objProp) {
    let newArr = []
    newArr = arr1.map(itemA => {
      let fullObj = arr2.find(itemB => itemB[objProp] === itemA[objProp]);
      return fullObj ? fullObj : itemA;
    });
    return newArr;
}

function createUniqueId(str) {
    let id = ''

    let clippedStr = 'https://www.flickr.com/photos/';
    
    let indexClippedStr = str.indexOf(clippedStr) + clippedStr.length;

    id = str.substring(indexClippedStr + 1).replaceAll('/', '');

    return id;
}