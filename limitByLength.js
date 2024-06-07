
let sentence='ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat.'

function limitByLength(items)
{

let words = items.split(' ');
 if(words.length < 100){
    return words.join(' ');
}
 else{
    return words.slice(0, 100).join(' ');
}

}
console.log(limitByLength(sentence))