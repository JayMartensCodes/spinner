// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);

const animations = ['|','/','-','\\','|','/','-','\\','|'];
let delay = 100;
for (const animation of animations) {
  setTimeout(() => {
    process.stdout.write(`\r${animation}   `);
  }, delay);
  delay += 200;
}