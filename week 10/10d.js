const url=require('url')
const adress='https://www.maya.com/products?category=application&price=low';
const praseUrl=url.parse(adress,true);
console.log('Host:',praseUrl.host);
console.log('Path name : ',praseUrl.pathname)
console.log('Query Parameters: ',praseUrl.query );


