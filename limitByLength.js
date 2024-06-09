let sentence =
  'ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat.';

function limitByLength(items) {
  let words = items;
  if (words.length <= 100) {
    return words;
  }
  return words.slice(0, 100) + '...';
}

console.log(limitByLength(sentence));
